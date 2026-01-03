'use client';

import { useAdminAuth } from '@/lib/auth';
import { AdminLogin, AdminSidebar } from '@/components/admin';
import { useState } from 'react';
import {
    Save,
    Globe,
    Mail,
    Bell,
    Shield,
    Key,
    RefreshCw
} from 'lucide-react';
import { Button } from '@/components/ui';

function SettingsContent() {
    const { user } = useAdminAuth();
    const [isSaving, setIsSaving] = useState(false);

    const handleSave = async () => {
        setIsSaving(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsSaving(false);
        alert('Đã lưu cài đặt!');
    };

    return (
        <div className="space-y-6 max-w-4xl">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Cài đặt</h1>
                <p className="text-gray-500 mt-1">Quản lý cài đặt hệ thống</p>
            </div>

            {/* General Settings */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center gap-3 mb-6">
                    <Globe className="text-primary-600" size={24} />
                    <h2 className="text-lg font-semibold text-gray-900">Thông tin chung</h2>
                </div>
                <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Tên công ty</label>
                            <input
                                type="text"
                                defaultValue="AluGlass"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Hotline</label>
                            <input
                                type="text"
                                defaultValue="1900 1234"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email liên hệ</label>
                        <input
                            type="email"
                            defaultValue="info@aluglass.vn"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Địa chỉ</label>
                        <input
                            type="text"
                            defaultValue="123 Đường ABC, Quận XYZ, TP. Hồ Chí Minh"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                        />
                    </div>
                </div>
            </div>

            {/* Email Settings */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center gap-3 mb-6">
                    <Mail className="text-primary-600" size={24} />
                    <h2 className="text-lg font-semibold text-gray-900">Cài đặt Email</h2>
                </div>
                <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">SMTP Host</label>
                            <input
                                type="text"
                                placeholder="smtp.gmail.com"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">SMTP Port</label>
                            <input
                                type="text"
                                placeholder="587"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                            />
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">SMTP Username</label>
                            <input
                                type="text"
                                placeholder="your-email@gmail.com"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">SMTP Password</label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Notification Settings */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center gap-3 mb-6">
                    <Bell className="text-primary-600" size={24} />
                    <h2 className="text-lg font-semibold text-gray-900">Thông báo</h2>
                </div>
                <div className="space-y-4">
                    <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                        <span className="text-gray-700">Nhận email khi có lead mới</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                        <span className="text-gray-700">Nhận email khi có đặt lịch hẹn</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                        <span className="text-gray-700">Báo cáo hàng tuần qua email</span>
                    </label>
                </div>
            </div>

            {/* API Keys */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center gap-3 mb-6">
                    <Key className="text-primary-600" size={24} />
                    <h2 className="text-lg font-semibold text-gray-900">API Keys</h2>
                </div>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Gemini API Keys (Cấu hình trên Vercel)
                        </label>
                        <p className="text-sm text-gray-500 mb-3">
                            Hệ thống sử dụng biến môi trường GEMINI_API_KEY_1 đến GEMINI_API_KEY_20 với cơ chế xoay vòng tự động.
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="flex-1 px-4 py-2 bg-gray-100 rounded-lg text-sm text-gray-600 font-mono">
                                GEMINI_API_KEY_1, GEMINI_API_KEY_2, ... GEMINI_API_KEY_20
                            </div>
                            <button className="flex items-center gap-2 px-4 py-2 text-primary-600 hover:bg-primary-50 rounded-lg transition-colors">
                                <RefreshCw size={16} />
                                Test
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Security */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center gap-3 mb-6">
                    <Shield className="text-primary-600" size={24} />
                    <h2 className="text-lg font-semibold text-gray-900">Bảo mật</h2>
                </div>
                <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-600">
                            <strong>Tài khoản hiện tại:</strong> {user?.email}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                            <strong>Vai trò:</strong> {user?.role === 'admin' ? 'Administrator' : 'Editor'}
                        </p>
                    </div>
                    <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                        Đổi mật khẩu →
                    </button>
                </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end">
                <Button onClick={handleSave} isLoading={isSaving} size="lg">
                    <Save size={18} />
                    Lưu cài đặt
                </Button>
            </div>
        </div>
    );
}

export default function SettingsPage() {
    const { user, isLoading } = useAdminAuth();

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
            </div>
        );
    }

    if (!user) {
        return <AdminLogin />;
    }

    return (
        <AdminSidebar>
            <SettingsContent />
        </AdminSidebar>
    );
}
