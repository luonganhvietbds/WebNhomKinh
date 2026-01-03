'use client';

import { useAdminAuth } from '@/lib/auth';
import { AdminLogin, AdminSidebar } from '@/components/admin';
import {
    Users,
    MessageSquare,
    FileText,
    TrendingUp,
    ArrowUp,
    ArrowDown,
    Clock
} from 'lucide-react';

// Dashboard stats data (demo)
const stats = [
    {
        name: 'Tổng Leads',
        value: '156',
        change: '+12%',
        trend: 'up',
        icon: Users,
        color: 'blue'
    },
    {
        name: 'Chat Sessions',
        value: '89',
        change: '+28%',
        trend: 'up',
        icon: MessageSquare,
        color: 'green'
    },
    {
        name: 'Lượt xem trang',
        value: '2,453',
        change: '+8%',
        trend: 'up',
        icon: TrendingUp,
        color: 'purple'
    },
    {
        name: 'Tài liệu tải',
        value: '45',
        change: '-5%',
        trend: 'down',
        icon: FileText,
        color: 'orange'
    },
];

// Recent leads data (demo)
const recentLeads = [
    { id: 1, name: 'Nguyễn Văn A', company: 'Công ty ABC', email: 'nva@abc.vn', projectType: 'Cao ốc văn phòng', time: '10 phút trước' },
    { id: 2, name: 'Trần Thị B', company: 'XYZ Corp', email: 'ttb@xyz.com', projectType: 'Khách sạn', time: '1 giờ trước' },
    { id: 3, name: 'Lê Văn C', company: 'DEF Building', email: 'lvc@def.vn', projectType: 'TTTM', time: '2 giờ trước' },
    { id: 4, name: 'Phạm Hữu D', company: 'GHI Industries', email: 'phd@ghi.com', projectType: 'Nhà máy', time: '3 giờ trước' },
];

// Recent chat sessions (demo)
const recentChats = [
    { id: 1, query: 'Thông số curtain wall cho tòa nhà 30 tầng', response: 'Đã trả lời', time: '5 phút trước' },
    { id: 2, query: 'Giá cửa nhôm hệ 55', response: 'Hướng dẫn liên hệ sales', time: '15 phút trước' },
    { id: 3, query: 'Tiêu chuẩn EN cho vách kính', response: 'Đã trả lời', time: '1 giờ trước' },
];

function StatCard({ stat }: { stat: typeof stats[0] }) {
    const colors = {
        blue: 'bg-blue-50 text-blue-600',
        green: 'bg-green-50 text-green-600',
        purple: 'bg-purple-50 text-purple-600',
        orange: 'bg-orange-50 text-orange-600',
    };

    return (
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-start justify-between">
                <div className={`p-3 rounded-lg ${colors[stat.color as keyof typeof colors]}`}>
                    <stat.icon size={24} />
                </div>
                <div className={`flex items-center gap-1 text-sm font-medium ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                    {stat.trend === 'up' ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
                    {stat.change}
                </div>
            </div>
            <div className="mt-4">
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.name}</p>
            </div>
        </div>
    );
}

function DashboardContent() {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-gray-500 mt-1">Tổng quan hoạt động website</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <StatCard key={stat.name} stat={stat} />
                ))}
            </div>

            {/* Content Grid */}
            <div className="grid lg:grid-cols-2 gap-6">
                {/* Recent Leads */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="p-6 border-b border-gray-100">
                        <h2 className="font-semibold text-gray-900">Leads mới nhất</h2>
                    </div>
                    <div className="divide-y divide-gray-100">
                        {recentLeads.map((lead) => (
                            <div key={lead.id} className="p-4 hover:bg-gray-50 transition-colors">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <p className="font-medium text-gray-900">{lead.name}</p>
                                        <p className="text-sm text-gray-500">{lead.company}</p>
                                        <p className="text-xs text-primary-600 mt-1">{lead.projectType}</p>
                                    </div>
                                    <span className="text-xs text-gray-400 flex items-center gap-1">
                                        <Clock size={12} />
                                        {lead.time}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="p-4 border-t border-gray-100">
                        <a href="/admin/leads" className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                            Xem tất cả →
                        </a>
                    </div>
                </div>

                {/* Recent Chat Sessions */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="p-6 border-b border-gray-100">
                        <h2 className="font-semibold text-gray-900">Câu hỏi AI Chatbot</h2>
                    </div>
                    <div className="divide-y divide-gray-100">
                        {recentChats.map((chat) => (
                            <div key={chat.id} className="p-4 hover:bg-gray-50 transition-colors">
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <p className="font-medium text-gray-900 line-clamp-1">{chat.query}</p>
                                        <p className="text-sm text-green-600 mt-1">{chat.response}</p>
                                    </div>
                                    <span className="text-xs text-gray-400 flex items-center gap-1 ml-4">
                                        <Clock size={12} />
                                        {chat.time}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="p-4 border-t border-gray-100">
                        <a href="/admin/knowledge" className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                            Quản lý Knowledge Base →
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function AdminDashboard() {
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
            <DashboardContent />
        </AdminSidebar>
    );
}
