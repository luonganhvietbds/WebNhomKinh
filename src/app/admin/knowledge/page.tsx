'use client';

import { useAdminAuth } from '@/lib/auth';
import { AdminLogin, AdminSidebar } from '@/components/admin';
import { useState } from 'react';
import {
    Plus,
    Search,
    Edit2,
    Trash2,
    Save,
    X,
    FileText,
    Package,
    Building2,
    Award,
    HelpCircle
} from 'lucide-react';

// Knowledge base categories
const categories = [
    { id: 'products', name: 'Sản phẩm', icon: Package, count: 8 },
    { id: 'solutions', name: 'Giải pháp', icon: Building2, count: 4 },
    { id: 'standards', name: 'Tiêu chuẩn', icon: Award, count: 12 },
    { id: 'faq', name: 'FAQ', icon: HelpCircle, count: 15 },
    { id: 'company', name: 'Công ty', icon: FileText, count: 5 },
];

// Demo knowledge entries
const knowledgeEntries = [
    {
        id: 1,
        category: 'products',
        title: 'Cửa nhôm hệ Xingfa 55',
        content: 'Độ dày 1.4mm, kính 2 lớp 5mm, cách âm 32dB, 20+ màu sắc. Phù hợp căn hộ và văn phòng.',
        keywords: ['xingfa', 'cửa nhôm', 'hệ 55', 'cách âm'],
        updatedAt: '2024-01-03'
    },
    {
        id: 2,
        category: 'products',
        title: 'Mặt dựng Curtain Wall',
        content: 'Chịu gió cấp 12, kín nước 100%, cách nhiệt tốt. Tuổi thọ 30+ năm. Đạt tiêu chuẩn EN 13830.',
        keywords: ['curtain wall', 'mặt dựng', 'cao ốc', 'văn phòng'],
        updatedAt: '2024-01-02'
    },
    {
        id: 3,
        category: 'standards',
        title: 'Tiêu chuẩn EN 12150',
        content: 'Tiêu chuẩn Châu Âu về kính cường lực nhiệt. Đảm bảo an toàn, chịu lực va đập.',
        keywords: ['EN 12150', 'kính cường lực', 'tiêu chuẩn'],
        updatedAt: '2024-01-01'
    },
    {
        id: 4,
        category: 'faq',
        title: 'Thời gian bảo hành sản phẩm',
        content: 'Bảo hành sản phẩm: 5-10 năm. Bảo hành thi công: 2-5 năm. Hỗ trợ kỹ thuật trọn đời.',
        keywords: ['bảo hành', 'warranty', 'hỗ trợ'],
        updatedAt: '2024-01-03'
    },
];

function KnowledgeContent() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [editingEntry, setEditingEntry] = useState<number | null>(null);
    const [showAddForm, setShowAddForm] = useState(false);

    const filteredEntries = knowledgeEntries.filter((entry) => {
        const matchesCategory = selectedCategory === 'all' || entry.category === selectedCategory;
        const matchesSearch =
            entry.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            entry.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
            entry.keywords.some(k => k.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">AI Knowledge Base</h1>
                    <p className="text-gray-500 mt-1">Quản lý thông tin AI Chatbot sử dụng để trả lời</p>
                </div>
                <button
                    onClick={() => setShowAddForm(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                    <Plus size={18} />
                    Thêm mới
                </button>
            </div>

            <div className="grid lg:grid-cols-4 gap-6">
                {/* Categories Sidebar */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                        <h3 className="font-semibold text-gray-900 mb-4">Danh mục</h3>
                        <div className="space-y-1">
                            <button
                                onClick={() => setSelectedCategory('all')}
                                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${selectedCategory === 'all'
                                        ? 'bg-primary-50 text-primary-700'
                                        : 'text-gray-600 hover:bg-gray-50'
                                    }`}
                            >
                                <span>Tất cả</span>
                                <span className="text-sm bg-gray-100 px-2 py-0.5 rounded">
                                    {knowledgeEntries.length}
                                </span>
                            </button>
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setSelectedCategory(cat.id)}
                                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${selectedCategory === cat.id
                                            ? 'bg-primary-50 text-primary-700'
                                            : 'text-gray-600 hover:bg-gray-50'
                                        }`}
                                >
                                    <span className="flex items-center gap-2">
                                        <cat.icon size={16} />
                                        {cat.name}
                                    </span>
                                    <span className="text-sm bg-gray-100 px-2 py-0.5 rounded">{cat.count}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Content Area */}
                <div className="lg:col-span-3 space-y-4">
                    {/* Search */}
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Tìm kiếm trong knowledge base..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        />
                    </div>

                    {/* Add Form */}
                    {showAddForm && (
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-semibold text-gray-900">Thêm entry mới</h3>
                                <button onClick={() => setShowAddForm(false)} className="text-gray-400 hover:text-gray-600">
                                    <X size={20} />
                                </button>
                            </div>
                            <div className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="Tiêu đề"
                                        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                                    />
                                    <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500">
                                        <option>Chọn danh mục</option>
                                        {categories.map((cat) => (
                                            <option key={cat.id} value={cat.id}>{cat.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <textarea
                                    placeholder="Nội dung (AI sẽ sử dụng thông tin này để trả lời)"
                                    rows={4}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                                />
                                <input
                                    type="text"
                                    placeholder="Keywords (phân cách bằng dấu phẩy)"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                                />
                                <div className="flex justify-end gap-2">
                                    <button
                                        onClick={() => setShowAddForm(false)}
                                        className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                                    >
                                        Hủy
                                    </button>
                                    <button className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
                                        <Save size={18} />
                                        Lưu
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Entries List */}
                    <div className="space-y-3">
                        {filteredEntries.map((entry) => (
                            <div
                                key={entry.id}
                                className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:border-primary-200 transition-colors"
                            >
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="px-2 py-0.5 bg-primary-50 text-primary-700 text-xs rounded-full">
                                                {categories.find(c => c.id === entry.category)?.name}
                                            </span>
                                            <span className="text-xs text-gray-400">
                                                Cập nhật: {new Date(entry.updatedAt).toLocaleDateString('vi-VN')}
                                            </span>
                                        </div>
                                        <h4 className="font-semibold text-gray-900 mb-2">{entry.title}</h4>
                                        <p className="text-sm text-gray-600 mb-3">{entry.content}</p>
                                        <div className="flex flex-wrap gap-1">
                                            {entry.keywords.map((keyword) => (
                                                <span
                                                    key={keyword}
                                                    className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded"
                                                >
                                                    {keyword}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1 ml-4">
                                        <button className="p-2 text-gray-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors">
                                            <Edit2 size={18} />
                                        </button>
                                        <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredEntries.length === 0 && (
                        <div className="text-center py-12 bg-white rounded-xl border border-gray-100">
                            <p className="text-gray-500">Không tìm thấy entry nào</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function KnowledgePage() {
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
            <KnowledgeContent />
        </AdminSidebar>
    );
}
