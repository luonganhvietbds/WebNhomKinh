'use client';

import { useAdminAuth } from '@/lib/auth';
import { AdminLogin, AdminSidebar } from '@/components/admin';
import { useState } from 'react';
import {
    Search,
    Filter,
    Download,
    Mail,
    Phone,
    Building2,
    Calendar,
    Eye,
    MoreVertical
} from 'lucide-react';

// Demo leads data
const leadsData = [
    {
        id: 'LEAD-001',
        name: 'Nguyễn Văn A',
        company: 'Công ty CP ABC',
        email: 'nva@abc.vn',
        phone: '0912345678',
        projectType: 'Cao ốc văn phòng',
        projectStage: 'Đang thiết kế',
        message: 'Cần tư vấn giải pháp curtain wall cho tòa nhà 25 tầng',
        status: 'new',
        createdAt: '2024-01-04T08:30:00'
    },
    {
        id: 'LEAD-002',
        name: 'Trần Thị B',
        company: 'XYZ Development',
        email: 'ttb@xyz.com',
        phone: '0987654321',
        projectType: 'Khách sạn & Resort',
        projectStage: 'Chuẩn bị đấu thầu',
        message: 'Dự án resort 5 sao tại Phú Quốc, cần giải pháp chống ăn mòn',
        status: 'contacted',
        createdAt: '2024-01-04T07:15:00'
    },
    {
        id: 'LEAD-003',
        name: 'Lê Văn C',
        company: 'DEF Construction',
        email: 'lvc@def.vn',
        phone: '0901234567',
        projectType: 'Trung tâm thương mại',
        projectStage: 'Đang thi công',
        message: 'Cần báo giá vách kính spider cho khu vực sảnh',
        status: 'qualified',
        createdAt: '2024-01-03T16:45:00'
    },
    {
        id: 'LEAD-004',
        name: 'Phạm Hữu D',
        company: 'GHI Industries',
        email: 'phd@ghi.com',
        phone: '0909876543',
        projectType: 'Nhà máy công nghiệp',
        projectStage: 'Ý tưởng / Nghiên cứu',
        message: 'Tìm hiểu giải pháp cửa nhôm công nghiệp chịu nhiệt',
        status: 'new',
        createdAt: '2024-01-03T14:20:00'
    },
];

const statusColors = {
    new: 'bg-blue-100 text-blue-700',
    contacted: 'bg-yellow-100 text-yellow-700',
    qualified: 'bg-green-100 text-green-700',
    closed: 'bg-gray-100 text-gray-700',
};

const statusLabels = {
    new: 'Mới',
    contacted: 'Đã liên hệ',
    qualified: 'Tiềm năng',
    closed: 'Đã đóng',
};

function LeadsContent() {
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');

    const filteredLeads = leadsData.filter((lead) => {
        const matchesSearch =
            lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            lead.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
            lead.email.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesStatus = statusFilter === 'all' || lead.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Quản lý Leads</h1>
                    <p className="text-gray-500 mt-1">Danh sách khách hàng tiềm năng từ website</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                    <Download size={18} />
                    Export CSV
                </button>
            </div>

            {/* Filters */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="flex flex-col md:flex-row gap-4">
                    {/* Search */}
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Tìm kiếm theo tên, công ty, email..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        />
                    </div>

                    {/* Status Filter */}
                    <div className="flex items-center gap-2">
                        <Filter size={18} className="text-gray-400" />
                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        >
                            <option value="all">Tất cả trạng thái</option>
                            <option value="new">Mới</option>
                            <option value="contacted">Đã liên hệ</option>
                            <option value="qualified">Tiềm năng</option>
                            <option value="closed">Đã đóng</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Leads Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b border-gray-100">
                            <tr>
                                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Khách hàng</th>
                                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Liên hệ</th>
                                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Dự án</th>
                                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Trạng thái</th>
                                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Ngày tạo</th>
                                <th className="text-right px-6 py-4"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filteredLeads.map((lead) => (
                                <tr key={lead.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                                                <span className="text-primary-600 font-medium">{lead.name[0]}</span>
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-900">{lead.name}</p>
                                                <p className="text-sm text-gray-500 flex items-center gap-1">
                                                    <Building2 size={12} />
                                                    {lead.company}
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <p className="text-sm text-gray-600 flex items-center gap-1">
                                            <Mail size={12} />
                                            {lead.email}
                                        </p>
                                        <p className="text-sm text-gray-600 flex items-center gap-1">
                                            <Phone size={12} />
                                            {lead.phone}
                                        </p>
                                    </td>
                                    <td className="px-6 py-4">
                                        <p className="text-sm font-medium text-gray-900">{lead.projectType}</p>
                                        <p className="text-xs text-gray-500">{lead.projectStage}</p>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[lead.status as keyof typeof statusColors]}`}>
                                            {statusLabels[lead.status as keyof typeof statusLabels]}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <p className="text-sm text-gray-500 flex items-center gap-1">
                                            <Calendar size={12} />
                                            {new Date(lead.createdAt).toLocaleDateString('vi-VN')}
                                        </p>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button className="p-2 text-gray-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors">
                                                <Eye size={18} />
                                            </button>
                                            <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                                                <MoreVertical size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
                    <p className="text-sm text-gray-500">Hiển thị {filteredLeads.length} / {leadsData.length} leads</p>
                    <div className="flex gap-2">
                        <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">Trước</button>
                        <button className="px-3 py-1 bg-primary-600 text-white rounded text-sm">1</button>
                        <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">Sau</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function LeadsPage() {
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
            <LeadsContent />
        </AdminSidebar>
    );
}
