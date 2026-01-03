'use client';

import { useAdminAuth } from '@/lib/auth';
import { AdminLogin, AdminSidebar } from '@/components/admin';
import { useState } from 'react';
import {
    Plus,
    Edit2,
    Trash2,
    Eye,
    EyeOff,
    Image,
    FileText,
    Globe,
    Calendar
} from 'lucide-react';

// Content types
const contentTypes = [
    { id: 'pages', name: 'Trang', count: 7 },
    { id: 'products', name: 'Sản phẩm', count: 8 },
    { id: 'projects', name: 'Dự án', count: 6 },
    { id: 'news', name: 'Tin tức', count: 12 },
];

// Demo content data
const contentItems = [
    {
        id: 1,
        type: 'pages',
        title: 'Giới thiệu công ty',
        slug: '/gioi-thieu',
        status: 'published',
        author: 'Admin',
        updatedAt: '2024-01-04'
    },
    {
        id: 2,
        type: 'products',
        title: 'Cửa nhôm hệ Xingfa 55',
        slug: '/san-pham/cua-nhom/1',
        status: 'published',
        author: 'Editor',
        updatedAt: '2024-01-03'
    },
    {
        id: 3,
        type: 'projects',
        title: 'Landmark 81',
        slug: '/du-an/1',
        status: 'published',
        author: 'Admin',
        updatedAt: '2024-01-02'
    },
    {
        id: 4,
        type: 'news',
        title: 'AluGlass nhận chứng chỉ ISO 9001:2015',
        slug: '/tin-tuc/iso-certification',
        status: 'draft',
        author: 'Editor',
        updatedAt: '2024-01-04'
    },
    {
        id: 5,
        type: 'products',
        title: 'Mặt dựng Curtain Wall',
        slug: '/san-pham/mat-dung/5',
        status: 'published',
        author: 'Admin',
        updatedAt: '2024-01-01'
    },
];

function ContentManagement() {
    const [selectedType, setSelectedType] = useState('all');

    const filteredContent = contentItems.filter(
        (item) => selectedType === 'all' || item.type === selectedType
    );

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Quản lý Nội dung</h1>
                    <p className="text-gray-500 mt-1">Quản lý trang, sản phẩm, dự án và tin tức</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                    <Plus size={18} />
                    Tạo mới
                </button>
            </div>

            {/* Content Type Tabs */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-2">
                <div className="flex flex-wrap gap-2">
                    <button
                        onClick={() => setSelectedType('all')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${selectedType === 'all'
                                ? 'bg-primary-600 text-white'
                                : 'text-gray-600 hover:bg-gray-100'
                            }`}
                    >
                        Tất cả ({contentItems.length})
                    </button>
                    {contentTypes.map((type) => (
                        <button
                            key={type.id}
                            onClick={() => setSelectedType(type.id)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${selectedType === type.id
                                    ? 'bg-primary-600 text-white'
                                    : 'text-gray-600 hover:bg-gray-100'
                                }`}
                        >
                            {type.name} ({type.count})
                        </button>
                    ))}
                </div>
            </div>

            {/* Content Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-100">
                        <tr>
                            <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Tiêu đề</th>
                            <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Loại</th>
                            <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Trạng thái</th>
                            <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Tác giả</th>
                            <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Cập nhật</th>
                            <th className="text-right px-6 py-4"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {filteredContent.map((item) => (
                            <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                                            {item.type === 'pages' && <Globe size={20} className="text-gray-500" />}
                                            {item.type === 'products' && <FileText size={20} className="text-gray-500" />}
                                            {item.type === 'projects' && <Image size={20} className="text-gray-500" />}
                                            {item.type === 'news' && <FileText size={20} className="text-gray-500" />}
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900">{item.title}</p>
                                            <p className="text-xs text-gray-400">{item.slug}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-gray-600 capitalize">
                                        {contentTypes.find(t => t.id === item.type)?.name}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${item.status === 'published'
                                            ? 'bg-green-100 text-green-700'
                                            : 'bg-yellow-100 text-yellow-700'
                                        }`}>
                                        {item.status === 'published' ? <Eye size={12} /> : <EyeOff size={12} />}
                                        {item.status === 'published' ? 'Đã đăng' : 'Nháp'}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-gray-600">{item.author}</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-gray-500 flex items-center gap-1">
                                        <Calendar size={12} />
                                        {new Date(item.updatedAt).toLocaleDateString('vi-VN')}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-1">
                                        <button className="p-2 text-gray-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors">
                                            <Eye size={18} />
                                        </button>
                                        <button className="p-2 text-gray-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors">
                                            <Edit2 size={18} />
                                        </button>
                                        <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default function ContentPage() {
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
            <ContentManagement />
        </AdminSidebar>
    );
}
