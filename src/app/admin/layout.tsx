'use client';

import { AdminAuthProvider } from '@/lib/auth';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <AdminAuthProvider>
            <div className="min-h-screen bg-gray-100">
                {children}
            </div>
        </AdminAuthProvider>
    );
}
