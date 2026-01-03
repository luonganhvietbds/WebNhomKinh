'use client';

import { useAdminAuth } from '@/lib/auth';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    FileText,
    Users,
    Brain,
    Settings,
    LogOut,
    Menu,
    X,
    ChevronRight
} from 'lucide-react';
import { useState } from 'react';

const navigation = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Nội dung', href: '/admin/content', icon: FileText },
    { name: 'Leads', href: '/admin/leads', icon: Users },
    { name: 'AI Knowledge', href: '/admin/knowledge', icon: Brain },
    { name: 'Cài đặt', href: '/admin/settings', icon: Settings },
];

interface AdminSidebarProps {
    children: React.ReactNode;
}

export default function AdminSidebar({ children }: AdminSidebarProps) {
    const { user, logout } = useAdminAuth();
    const pathname = usePathname();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen">
            {/* Mobile sidebar backdrop */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`
        fixed lg:static inset-y-0 left-0 z-50
        w-64 bg-primary-900 text-white
        transform transition-transform duration-300
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
                <div className="flex flex-col h-full">
                    {/* Logo */}
                    <div className="p-6 border-b border-primary-800">
                        <Link href="/admin" className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold">AG</span>
                            </div>
                            <div>
                                <span className="font-bold">AluGlass</span>
                                <span className="block text-xs text-primary-300">Admin Panel</span>
                            </div>
                        </Link>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 p-4 space-y-1">
                        {navigation.map((item) => {
                            const isActive = pathname === item.href ||
                                (item.href !== '/admin' && pathname.startsWith(item.href));

                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setSidebarOpen(false)}
                                    className={`
                    flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
                    ${isActive
                                            ? 'bg-primary-700 text-white'
                                            : 'text-primary-200 hover:bg-primary-800 hover:text-white'
                                        }
                  `}
                                >
                                    <item.icon size={20} />
                                    <span>{item.name}</span>
                                    {isActive && <ChevronRight size={16} className="ml-auto" />}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* User & Logout */}
                    <div className="p-4 border-t border-primary-800">
                        <div className="flex items-center gap-3 px-4 py-3 mb-2">
                            <div className="w-8 h-8 bg-primary-700 rounded-full flex items-center justify-center">
                                <span className="text-sm font-medium">{user?.name?.[0]}</span>
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium truncate">{user?.name}</p>
                                <p className="text-xs text-primary-300 truncate">{user?.email}</p>
                            </div>
                        </div>
                        <button
                            onClick={logout}
                            className="flex items-center gap-3 px-4 py-3 w-full text-primary-200 hover:bg-primary-800 hover:text-white rounded-lg transition-colors"
                        >
                            <LogOut size={20} />
                            <span>Đăng xuất</span>
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
                {/* Top bar */}
                <header className="bg-white border-b border-gray-200 px-6 py-4">
                    <div className="flex items-center justify-between">
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="lg:hidden p-2 -ml-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                        >
                            <Menu size={24} />
                        </button>
                        <div className="flex items-center gap-4">
                            <Link
                                href="/"
                                target="_blank"
                                className="text-sm text-primary-600 hover:text-primary-700"
                            >
                                Xem website →
                            </Link>
                        </div>
                    </div>
                </header>

                {/* Page content */}
                <main className="flex-1 overflow-auto p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}
