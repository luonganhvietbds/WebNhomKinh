'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/lib/config';

const navigation = [
  { name: 'Trang chủ', href: '/' },
  { name: 'Giới thiệu', href: '/gioi-thieu' },
  {
    name: 'Sản phẩm',
    href: '/san-pham',
    children: [
      { name: 'Cửa nhôm', href: '/san-pham?category=cua-nhom' },
      { name: 'Vách kính', href: '/san-pham?category=vach-kinh' },
      { name: 'Mặt dựng', href: '/san-pham?category=mat-dung' },
      { name: 'Mái kính', href: '/san-pham?category=mai-kinh' },
    ]
  },
  { name: 'Giải pháp', href: '/giai-phap' },
  { name: 'Dự án', href: '/du-an' },
  { name: 'Tiêu chuẩn', href: '/tieu-chuan' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary-900 text-white py-2">
        <div className="container flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href={siteConfig.contact.hotlineHref} className="flex items-center gap-2 hover:text-primary-300 transition-colors">
              <Phone size={14} />
              <span>{siteConfig.contact.hotline}</span>
            </a>
            <a href={siteConfig.contact.emailHref} className="flex items-center gap-2 hover:text-primary-300 transition-colors hidden sm:flex">
              <Mail size={14} />
              <span>{siteConfig.contact.email}</span>
            </a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span>{siteConfig.company.slogan}</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-secondary-100">
        <div className="container">
          <nav className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">AG</span>
              </div>
              <div>
                <span className="text-xl font-bold text-primary-900">{siteConfig.company.name}</span>
                <span className="block text-xs text-secondary-500">{siteConfig.company.tagline}</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 text-secondary-700 hover:text-primary-600 font-medium transition-colors py-2"
                  >
                    {item.name}
                    {item.children && <ChevronDown size={16} />}
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.children && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 bg-white shadow-xl rounded-xl py-2 min-w-[200px] border border-secondary-100"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2.5 text-secondary-600 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/lien-he"
                className="btn btn-primary"
              >
                Tư vấn giải pháp
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-secondary-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-white border-t border-secondary-100 overflow-hidden"
            >
              <div className="container py-4">
                {navigation.map((item) => (
                  <div key={item.name} className="border-b border-secondary-100 last:border-0">
                    <Link
                      href={item.href}
                      className="block py-3 text-secondary-700 hover:text-primary-600 font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.children && (
                      <div className="pl-4 pb-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block py-2 text-sm text-secondary-500 hover:text-primary-600"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Link
                  href="/lien-he"
                  className="btn btn-primary w-full mt-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Tư vấn giải pháp
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
