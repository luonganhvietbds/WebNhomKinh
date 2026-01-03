import { getCurrentApiKey, rotateToNextKey } from './gemini';

/**
 * Knowledge Base for AI Chatbot
 * Contains product information, technical specs, and company data
 */
const KNOWLEDGE_BASE = `
# AluGlass - Thông tin Công ty và Sản phẩm

## Giới thiệu Công ty
- Tên: AluGlass
- Thành lập: 2010
- Kinh nghiệm: 15+ năm trong lĩnh vực nhôm kính công trình
- Dự án hoàn thành: 200+
- Đối tác lớn: 50+
- Nhân sự: 500+

## Chứng nhận & Tiêu chuẩn
- ISO 9001:2015 - Hệ thống quản lý chất lượng
- ISO 14001:2015 - Hệ thống quản lý môi trường
- CE Marking - Tiêu chuẩn Châu Âu
- Tuân thủ EN, ASTM, TCVN

## Sản phẩm Chính

### 1. Cửa nhôm
- **Hệ Xingfa 55**: Độ dày 1.4mm, kính 2 lớp 5mm, cách âm 32dB, 20+ màu
- **Hệ 93**: Độ dày 1.8mm, kính 3 lớp, cách âm 38dB, chống mưa cấp 5
- Ứng dụng: Căn hộ, văn phòng, khách sạn

### 2. Vách kính
- **Vách kính cường lực**: 10-12mm, an toàn, độ trong suốt cao
- **Vách kính Spider**: Kính 12mm, phụ kiện inox 304, thiết kế không khung
- Ứng dụng: Sảnh, showroom, trung tâm thương mại

### 3. Mặt dựng (Curtain Wall)
- **Curtain Wall tiêu chuẩn**: Chịu gió cấp 12, kín nước 100%, tuổi thọ 30+ năm
- **Unitized System**: Module hóa, lắp đặt nhanh, chất lượng đồng nhất
- Ứng dụng: Cao ốc văn phòng, tòa nhà cao tầng

### 4. Mái kính
- **Mái kính cố định**: Kính Low-E, chống UV, thoát nước tốt
- **Mái kính tự động**: Điều khiển từ xa, cảm biến mưa, motor Đức
- Ứng dụng: Sảnh, giếng trời, atrium

## Giải pháp theo Công trình

### Cao ốc văn phòng
- Curtain Wall với kính Low-E cách nhiệt
- Kết cấu nhôm chịu lực đạt tiêu chuẩn EN
- Module hóa để thi công nhanh

### Trung tâm thương mại
- Vách kính spider span lớn
- Cửa tự động tiêu chuẩn thương mại
- Mái kính atrium với hệ thoát nước

### Khách sạn & Resort
- Cửa sổ 3 lớp kính cách âm 45dB
- Xử lý bề mặt chống ăn mòn 20 năm
- Thiết kế custom theo kiến trúc

### Nhà máy công nghiệp
- Cửa nhôm công nghiệp chịu lực cao
- Kính an toàn chống vỡ
- Thiết kế dễ tháo lắp bảo trì

## Dự án Tiêu biểu
1. Landmark 81 - TP.HCM - 50,000m² curtain wall
2. Vincom Center Bà Triệu - Hà Nội - 25,000m² vách kính
3. JW Marriott Phú Quốc - 15,000m² cửa sổ & vách kính
4. Samsung HCMC CE Complex - 30,000m² cửa nhôm công nghiệp
5. Vinhomes Central Park - 80,000m² mặt dựng
6. Aeon Mall Long Biên - 20,000m² mái kính & vách kính

## Liên hệ
- Hotline: 1900 1234 (24/7)
- Email: info@aluglass.vn
- Địa chỉ: 123 Đường ABC, Quận XYZ, TP. Hồ Chí Minh
- Website: aluglass.vn

## Quy trình Làm việc
1. Tiếp nhận yêu cầu
2. Khảo sát & tư vấn giải pháp
3. Báo giá & thương thảo
4. Thiết kế shop drawing
5. Sản xuất
6. Thi công lắp đặt
7. Nghiệm thu & bảo hành

## Bảo hành
- Bảo hành sản phẩm: 5-10 năm
- Bảo hành thi công: 2-5 năm
- Hỗ trợ kỹ thuật trọn đời
`;

const SYSTEM_PROMPT = `Bạn là trợ lý kỹ thuật AI của AluGlass - công ty chuyên cung cấp giải pháp nhôm kính cho công trình quy mô lớn.

NGUYÊN TẮC TRẢ LỜI:
1. CHỈ trả lời dựa trên thông tin trong Knowledge Base được cung cấp
2. KHÔNG suy diễn hoặc bịa thông tin ngoài tài liệu
3. Ngôn ngữ chuyên nghiệp, kỹ thuật nhưng dễ hiểu
4. Nếu không có thông tin, hướng dẫn khách hàng liên hệ hotline 1900 1234
5. Luôn gợi ý tư vấn chuyên sâu khi có nhu cầu cụ thể về dự án

KNOWLEDGE BASE:
${KNOWLEDGE_BASE}

Khi khách hàng có nhu cầu cụ thể về dự án (quy mô, loại công trình, timeline), hãy:
- Ghi nhận thông tin
- Đề xuất liên hệ với đội ngũ sales/kỹ thuật
- Cung cấp thông tin liên hệ: Hotline 1900 1234 hoặc form tại trang Liên hệ`;

interface ChatMessage {
    role: 'user' | 'assistant';
    content: string;
}

interface GeminiResponse {
    candidates?: Array<{
        content?: {
            parts?: Array<{
                text?: string;
            }>;
        };
    }>;
    error?: {
        message?: string;
        code?: number;
    };
}

/**
 * Call Gemini API with automatic key rotation on failure
 */
async function callGeminiApi(
    messages: ChatMessage[],
    maxRetries: number = 3
): Promise<string> {
    let retries = 0;

    while (retries < maxRetries) {
        const apiKey = getCurrentApiKey();

        if (!apiKey) {
            throw new Error('No API keys available');
        }

        try {
            const response = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        contents: [
                            {
                                role: 'user',
                                parts: [{ text: SYSTEM_PROMPT }],
                            },
                            ...messages.map((msg) => ({
                                role: msg.role === 'assistant' ? 'model' : 'user',
                                parts: [{ text: msg.content }],
                            })),
                        ],
                        generationConfig: {
                            temperature: 0.7,
                            topK: 40,
                            topP: 0.95,
                            maxOutputTokens: 1024,
                        },
                        safetySettings: [
                            {
                                category: 'HARM_CATEGORY_HARASSMENT',
                                threshold: 'BLOCK_MEDIUM_AND_ABOVE',
                            },
                            {
                                category: 'HARM_CATEGORY_HATE_SPEECH',
                                threshold: 'BLOCK_MEDIUM_AND_ABOVE',
                            },
                        ],
                    }),
                }
            );

            const data: GeminiResponse = await response.json();

            // Check for rate limit or API errors
            if (!response.ok) {
                console.error(`[Gemini] API Error: ${response.status}`, data.error);

                if (response.status === 429 || response.status === 503) {
                    // Rate limit or service unavailable - rotate key
                    rotateToNextKey();
                    retries++;
                    continue;
                }

                throw new Error(data.error?.message || `API Error: ${response.status}`);
            }

            // Extract text from response
            const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

            if (!text) {
                throw new Error('Empty response from API');
            }

            return text;
        } catch (error) {
            console.error(`[Gemini] Request failed:`, error);

            if (retries < maxRetries - 1) {
                rotateToNextKey();
                retries++;
                // Exponential backoff
                await new Promise((resolve) => setTimeout(resolve, 1000 * Math.pow(2, retries)));
            } else {
                throw error;
            }
        }
    }

    throw new Error('Max retries exceeded');
}

/**
 * Chat service - main entry point for AI chat
 */
export async function chat(
    messages: ChatMessage[],
    userMessage: string
): Promise<string> {
    const allMessages: ChatMessage[] = [
        ...messages,
        { role: 'user', content: userMessage },
    ];

    try {
        const response = await callGeminiApi(allMessages);
        return response;
    } catch (error) {
        console.error('[ChatService] Error:', error);
        return 'Xin lỗi, hiện tại hệ thống đang bận. Vui lòng thử lại sau hoặc liên hệ hotline 1900 1234 để được hỗ trợ trực tiếp.';
    }
}

export type { ChatMessage };
