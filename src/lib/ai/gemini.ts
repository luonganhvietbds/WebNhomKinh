/**
 * Gemini API Key Rotation System
 * Supports GEMINI_API_KEY_1 through GEMINI_API_KEY_20
 * Automatically rotates to next key on rate limit or failure
 */

interface ApiKeyState {
    keys: string[];
    currentIndex: number;
    failedKeys: Set<number>;
    lastResetTime: number;
}

// Global state for key rotation
const keyState: ApiKeyState = {
    keys: [],
    currentIndex: 0,
    failedKeys: new Set(),
    lastResetTime: Date.now(),
};

// Reset failed keys every 60 seconds
const RESET_INTERVAL = 60 * 1000;

/**
 * Load all available API keys from environment variables
 */
function loadApiKeys(): string[] {
    const keys: string[] = [];

    // Check for keys 1-20
    for (let i = 1; i <= 20; i++) {
        const key = process.env[`GEMINI_API_KEY_${i}`];
        if (key && key.trim()) {
            keys.push(key.trim());
        }
    }

    // Fallback to single GEMINI_API_KEY if no numbered keys found
    if (keys.length === 0) {
        const singleKey = process.env.GEMINI_API_KEY;
        if (singleKey && singleKey.trim()) {
            keys.push(singleKey.trim());
        }
    }

    return keys;
}

/**
 * Initialize or refresh the key pool
 */
function initializeKeys(): void {
    if (keyState.keys.length === 0) {
        keyState.keys = loadApiKeys();
        console.log(`[Gemini] Loaded ${keyState.keys.length} API key(s)`);
    }

    // Reset failed keys periodically
    const now = Date.now();
    if (now - keyState.lastResetTime > RESET_INTERVAL) {
        keyState.failedKeys.clear();
        keyState.lastResetTime = now;
        console.log('[Gemini] Reset failed keys');
    }
}

/**
 * Get the current active API key
 */
export function getCurrentApiKey(): string | null {
    initializeKeys();

    if (keyState.keys.length === 0) {
        console.error('[Gemini] No API keys available');
        return null;
    }

    // Find next available key that hasn't failed
    const startIndex = keyState.currentIndex;
    let attempts = 0;

    while (attempts < keyState.keys.length) {
        if (!keyState.failedKeys.has(keyState.currentIndex)) {
            return keyState.keys[keyState.currentIndex];
        }
        keyState.currentIndex = (keyState.currentIndex + 1) % keyState.keys.length;
        attempts++;
    }

    // All keys failed, reset and try first one
    console.warn('[Gemini] All keys failed, resetting...');
    keyState.failedKeys.clear();
    keyState.currentIndex = startIndex;
    return keyState.keys[keyState.currentIndex];
}

/**
 * Mark current key as failed and rotate to next
 */
export function rotateToNextKey(): string | null {
    initializeKeys();

    if (keyState.keys.length === 0) {
        return null;
    }

    // Mark current as failed
    keyState.failedKeys.add(keyState.currentIndex);
    console.log(`[Gemini] Key ${keyState.currentIndex + 1} marked as failed`);

    // Move to next key
    keyState.currentIndex = (keyState.currentIndex + 1) % keyState.keys.length;

    return getCurrentApiKey();
}

/**
 * Get statistics about API key usage
 */
export function getKeyStats(): {
    totalKeys: number;
    activeKeys: number;
    failedKeys: number;
    currentKeyIndex: number;
} {
    initializeKeys();

    return {
        totalKeys: keyState.keys.length,
        activeKeys: keyState.keys.length - keyState.failedKeys.size,
        failedKeys: keyState.failedKeys.size,
        currentKeyIndex: keyState.currentIndex + 1,
    };
}

/**
 * Reset all keys (useful for manual reset)
 */
export function resetAllKeys(): void {
    keyState.failedKeys.clear();
    keyState.currentIndex = 0;
    keyState.lastResetTime = Date.now();
    console.log('[Gemini] All keys reset');
}
