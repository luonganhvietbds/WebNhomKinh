'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AdminUser {
    email: string;
    role: 'admin' | 'editor';
    name: string;
}

interface AuthContextType {
    user: AdminUser | null;
    isLoading: boolean;
    login: (email: string, password: string) => Promise<boolean>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Demo credentials - In production, use Firebase Auth
const DEMO_USERS = [
    { email: 'admin@aluglass.vn', password: 'admin123', role: 'admin' as const, name: 'Admin' },
    { email: 'editor@aluglass.vn', password: 'editor123', role: 'editor' as const, name: 'Editor' },
];

export function AdminAuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<AdminUser | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Check localStorage for existing session
        const savedUser = localStorage.getItem('adminUser');
        if (savedUser) {
            try {
                setUser(JSON.parse(savedUser));
            } catch {
                localStorage.removeItem('adminUser');
            }
        }
        setIsLoading(false);
    }, []);

    const login = async (email: string, password: string): Promise<boolean> => {
        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 500));

        const foundUser = DEMO_USERS.find(
            (u) => u.email === email && u.password === password
        );

        if (foundUser) {
            const userData: AdminUser = {
                email: foundUser.email,
                role: foundUser.role,
                name: foundUser.name,
            };
            setUser(userData);
            localStorage.setItem('adminUser', JSON.stringify(userData));
            return true;
        }

        return false;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('adminUser');
    };

    return (
        <AuthContext.Provider value={{ user, isLoading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAdminAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAdminAuth must be used within an AdminAuthProvider');
    }
    return context;
}
