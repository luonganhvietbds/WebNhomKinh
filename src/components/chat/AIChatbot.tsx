'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Loader2, Minimize2 } from 'lucide-react';

interface Message {
    id: string;
    role: 'user' | 'assistant';
    content: string;
    timestamp: Date;
}

const WELCOME_MESSAGE: Message = {
    id: 'welcome',
    role: 'assistant',
    content: `Xin chào! Tôi là trợ lý AI của AluGlass. Tôi có thể giúp bạn:

• Tra cứu thông tin sản phẩm nhôm kính
• Tư vấn giải pháp theo loại công trình
• Tìm hiểu tiêu chuẩn kỹ thuật
• Thông tin về dự án đã thực hiện

Bạn cần hỗ trợ gì hôm nay?`,
    timestamp: new Date(),
};

const QUICK_QUESTIONS = [
    'Giải pháp cho cao ốc văn phòng?',
    'Thông số kỹ thuật cửa nhôm?',
    'Các dự án tiêu biểu?',
    'Quy trình hợp tác?',
];

export default function AIChatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Auto scroll to bottom
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    // Focus input when opened
    useEffect(() => {
        if (isOpen && !isMinimized) {
            inputRef.current?.focus();
        }
    }, [isOpen, isMinimized]);

    const sendMessage = async (content: string) => {
        if (!content.trim() || isLoading) return;

        const userMessage: Message = {
            id: `user-${Date.now()}`,
            role: 'user',
            content: content.trim(),
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInputValue('');
        setIsLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    messages: messages
                        .filter((m) => m.id !== 'welcome')
                        .map((m) => ({ role: m.role, content: m.content })),
                    userMessage: content.trim(),
                }),
            });

            const data = await response.json();

            const assistantMessage: Message = {
                id: `assistant-${Date.now()}`,
                role: 'assistant',
                content: data.message || 'Xin lỗi, có lỗi xảy ra. Vui lòng thử lại.',
                timestamp: new Date(),
            };

            setMessages((prev) => [...prev, assistantMessage]);
        } catch (error) {
            console.error('Chat error:', error);
            const errorMessage: Message = {
                id: `error-${Date.now()}`,
                role: 'assistant',
                content: 'Xin lỗi, hệ thống đang bận. Vui lòng thử lại sau hoặc gọi hotline 1900 1234.',
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        sendMessage(inputValue);
    };

    const handleQuickQuestion = (question: string) => {
        sendMessage(question);
    };

    return (
        <>
            {/* Floating Button */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        onClick={() => setIsOpen(true)}
                        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-800 rounded-full shadow-lg flex items-center justify-center text-white hover:shadow-xl transition-shadow group"
                    >
                        <MessageSquare size={28} />
                        <span className="absolute -top-2 -right-2 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                        </span>
                        {/* Tooltip */}
                        <span className="absolute right-full mr-3 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            Chat với AI
                        </span>
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className={`fixed bottom-6 right-6 z-50 bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col ${isMinimized ? 'w-80 h-16' : 'w-96 h-[600px] max-h-[80vh]'
                            }`}
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-primary-700 to-primary-800 text-white p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                    <Bot size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold">AI Tư vấn kỹ thuật</h3>
                                    <p className="text-xs text-primary-200">Trực tuyến 24/7</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => setIsMinimized(!isMinimized)}
                                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                                >
                                    <Minimize2 size={18} />
                                </button>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                                >
                                    <X size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Chat Content */}
                        {!isMinimized && (
                            <>
                                {/* Messages */}
                                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                                    {messages.map((message) => (
                                        <div
                                            key={message.id}
                                            className={`flex gap-3 ${message.role === 'user' ? 'flex-row-reverse' : ''
                                                }`}
                                        >
                                            <div
                                                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${message.role === 'user'
                                                        ? 'bg-primary-600 text-white'
                                                        : 'bg-primary-100 text-primary-600'
                                                    }`}
                                            >
                                                {message.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                                            </div>
                                            <div
                                                className={`max-w-[75%] rounded-2xl px-4 py-3 ${message.role === 'user'
                                                        ? 'bg-primary-600 text-white rounded-tr-sm'
                                                        : 'bg-white text-gray-800 shadow-sm rounded-tl-sm'
                                                    }`}
                                            >
                                                <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                                                <p
                                                    className={`text-xs mt-1 ${message.role === 'user' ? 'text-primary-200' : 'text-gray-400'
                                                        }`}
                                                >
                                                    {message.timestamp.toLocaleTimeString('vi-VN', {
                                                        hour: '2-digit',
                                                        minute: '2-digit',
                                                    })}
                                                </p>
                                            </div>
                                        </div>
                                    ))}

                                    {/* Loading indicator */}
                                    {isLoading && (
                                        <div className="flex gap-3">
                                            <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">
                                                <Bot size={16} />
                                            </div>
                                            <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
                                                <div className="flex items-center gap-2 text-gray-500">
                                                    <Loader2 size={16} className="animate-spin" />
                                                    <span className="text-sm">Đang trả lời...</span>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    <div ref={messagesEndRef} />
                                </div>

                                {/* Quick Questions */}
                                {messages.length <= 2 && (
                                    <div className="px-4 py-2 bg-white border-t border-gray-100">
                                        <p className="text-xs text-gray-500 mb-2">Câu hỏi thường gặp:</p>
                                        <div className="flex flex-wrap gap-2">
                                            {QUICK_QUESTIONS.map((q) => (
                                                <button
                                                    key={q}
                                                    onClick={() => handleQuickQuestion(q)}
                                                    className="px-3 py-1 text-xs bg-primary-50 text-primary-700 rounded-full hover:bg-primary-100 transition-colors"
                                                >
                                                    {q}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Input */}
                                <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-gray-100">
                                    <div className="flex gap-2">
                                        <input
                                            ref={inputRef}
                                            type="text"
                                            value={inputValue}
                                            onChange={(e) => setInputValue(e.target.value)}
                                            placeholder="Nhập câu hỏi..."
                                            disabled={isLoading}
                                            className="flex-1 px-4 py-2 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:opacity-50"
                                        />
                                        <button
                                            type="submit"
                                            disabled={!inputValue.trim() || isLoading}
                                            className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            <Send size={18} />
                                        </button>
                                    </div>
                                </form>
                            </>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
