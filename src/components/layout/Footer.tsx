import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Linkedin, Youtube } from 'lucide-react';
import { siteConfig } from '@/lib/config';

const footerLinks = {
    sanPham: [
        { name: 'Cửa nhôm hệ', href: '/san-pham?category=cua-nhom' },
        { name: 'Vách kính cường lực', href: '/san-pham?category=vach-kinh' },
        { name: 'Mặt dựng curtain wall', href: '/san-pham?category=mat-dung' },
        { name: 'Mái kính', href: '/san-pham?category=mai-kinh' },
    ],
    giaiPhap: [
        { name: 'Cao ốc văn phòng', href: '/giai-phap' },
        { name: 'Trung tâm thương mại', href: '/giai-phap' },
        { name: 'Khách sạn & Resort', href: '/giai-phap' },
        { name: 'Nhà máy công nghiệp', href: '/giai-phap' },
    ],
    congTy: [
        { name: 'Giới thiệu', href: '/gioi-thieu' },
        { name: 'Dự án tiêu biểu', href: '/du-an' },
        { name: 'Tiêu chuẩn & Chứng chỉ', href: '/tieu-chuan' },
        { name: 'Liên hệ', href: '/lien-he' },
    ],
};

export default function Footer() {
    return (
        <footer className="bg-primary-950 text-white">
            {/* Main Footer */}
            <div className="container py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center">
                                <span className="text-white font-bold text-xl">AG</span>
                            </div>
                            <div>
                                <span className="text-xl font-bold">{siteConfig.company.name}</span>
                                <span className="block text-xs text-primary-300">{siteConfig.company.tagline}</span>
                            </div>
                        </div>
                        <p className="text-primary-200 mb-6 leading-relaxed">
                            {siteConfig.company.description}
                        </p>
                        <div className="flex gap-3">
                            <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                                <Linkedin size={20} />
                            </a>
                            <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                                <Youtube size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Products */}
                    <div>
                        <h4 className="font-semibold text-lg mb-6">Sản phẩm</h4>
                        <ul className="space-y-3">
                            {footerLinks.sanPham.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-primary-200 hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Solutions */}
                    <div>
                        <h4 className="font-semibold text-lg mb-6">Giải pháp</h4>
                        <ul className="space-y-3">
                            {footerLinks.giaiPhap.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-primary-200 hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-semibold text-lg mb-6">Liên hệ</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin size={20} className="text-primary-400 mt-1 flex-shrink-0" />
                                <span className="text-primary-200">
                                    {siteConfig.contact.address.street}<br />
                                    {siteConfig.contact.address.district}, {siteConfig.contact.address.city}
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={20} className="text-primary-400 flex-shrink-0" />
                                <a href={siteConfig.contact.hotlineHref} className="text-primary-200 hover:text-white transition-colors font-semibold text-lg">
                                    {siteConfig.contact.hotline}
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={20} className="text-primary-400 flex-shrink-0" />
                                <a href={siteConfig.contact.emailHref} className="text-primary-200 hover:text-white transition-colors">
                                    {siteConfig.contact.email}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-primary-800">
                <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-primary-400 text-sm">
                        © {new Date().getFullYear()} {siteConfig.company.name}. Tất cả quyền được bảo lưu.
                    </p>
                    <div className="flex gap-6 text-sm">
                        <Link href="/chinh-sach" className="text-primary-400 hover:text-white transition-colors">
                            Chính sách bảo mật
                        </Link>
                        <Link href="/dieu-khoan" className="text-primary-400 hover:text-white transition-colors">
                            Điều khoản sử dụng
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
