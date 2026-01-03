'use client';

import { motion } from 'framer-motion';
import { Building2, Hotel, ShoppingBag, Factory, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui';

// ===========================================
// SOLUTION DATA
// ===========================================
const solutions = [
    {
        id: 'van-phong',
        icon: Building2,
        title: 'Cao ốc văn phòng',
        shortDesc: 'Giải pháp mặt dựng curtain wall và vách kính cách nhiệt cho tòa nhà văn phòng.',
        challenges: [
            'Yêu cầu cách nhiệt, tiết kiệm năng lượng',
            'Chịu áp lực gió lớn ở tầng cao',
            'Thẩm mỹ chuyên nghiệp, hiện đại',
            'Tiến độ thi công nhanh',
        ],
        solutions: [
            'Hệ Curtain Wall với kính Low-E cách nhiệt',
            'Kết cấu nhôm chịu lực, đạt tiêu chuẩn EN',
            'Module hóa để thi công nhanh',
            'Bảo trì dễ dàng với hệ thống gondola',
        ],
        products: ['Mặt dựng Curtain Wall', 'Mặt dựng Unitized', 'Vách kính cường lực'],
    },
    {
        id: 'thuong-mai',
        icon: ShoppingBag,
        title: 'Trung tâm thương mại',
        shortDesc: 'Hệ thống cửa nhôm kính, vách kính tiêu âm và mái kính cho TTTM.',
        challenges: [
            'Không gian mở rộng lớn',
            'Cách âm cho khu vực khác nhau',
            'Lấy sáng tự nhiên tối đa',
            'An toàn cho người sử dụng đông đúc',
        ],
        solutions: [
            'Vách kính spider span lớn không khung',
            'Hệ cửa tự động tiêu chuẩn thương mại',
            'Mái kính atrium với hệ thoát nước',
            'Kính cường lực an toàn tiêu chuẩn EN12150',
        ],
        products: ['Vách kính Spider', 'Cửa tự động', 'Mái kính cố định'],
    },
    {
        id: 'khach-san',
        icon: Hotel,
        title: 'Khách sạn & Resort',
        shortDesc: 'Giải pháp nhôm kính cao cấp cho trải nghiệm nghỉ dưỡng hoàn hảo.',
        challenges: [
            'Cách âm tuyệt đối cho phòng nghỉ',
            'View đẹp với kính toàn cảnh',
            'Chống ăn mòn môi trường biển',
            'Thiết kế sang trọng, độc đáo',
        ],
        solutions: [
            'Hệ cửa sổ 3 lớp kính cách âm 45dB',
            'Kính cường lực panorama không khung',
            'Xử lý bề mặt chống ăn mòn 20 năm',
            'Thiết kế custom theo kiến trúc',
        ],
        products: ['Cửa nhôm hệ 93', 'Vách kính cường lực', 'Lan can kính'],
    },
    {
        id: 'cong-nghiep',
        icon: Factory,
        title: 'Nhà máy công nghiệp',
        shortDesc: 'Hệ thống cửa nhôm kính công nghiệp cho nhà xưởng và văn phòng.',
        challenges: [
            'Chịu nhiệt độ cao, môi trường khắc nghiệt',
            'An toàn lao động',
            'Chi phí hợp lý',
            'Bảo trì đơn giản',
        ],
        solutions: [
            'Cửa nhôm công nghiệp chịu lực cao',
            'Kính an toàn chống vỡ',
            'Giải pháp tiết kiệm chi phí',
            'Thiết kế dễ tháo lắp bảo trì',
        ],
        products: ['Cửa nhôm công nghiệp', 'Vách ngăn văn phòng', 'Mái kính nhà xưởng'],
    },
];

// ===========================================
// HERO SECTION
// ===========================================
function SolutionHero() {
    return (
        <section className="relative py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-3xl"
                >
                    <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-primary-200 text-sm font-medium mb-6">
                        Giải pháp theo công trình
                    </span>
                    <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                        Giải pháp tối ưu cho mọi loại công trình
                    </h1>
                    <p className="text-xl text-primary-100 leading-relaxed">
                        Mỗi loại công trình có yêu cầu kỹ thuật riêng. Chúng tôi cung cấp giải pháp
                        được thiết kế đặc thù, tối ưu về kỹ thuật và chi phí cho từng dự án.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

// ===========================================
// SOLUTIONS LIST
// ===========================================
function SolutionsList() {
    return (
        <section className="section">
            <div className="container">
                <div className="space-y-20">
                    {solutions.map((solution, index) => (
                        <motion.div
                            key={solution.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                }`}
                        >
                            <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center">
                                        <solution.icon className="text-primary-600" size={28} />
                                    </div>
                                    <h2 className="text-2xl lg:text-3xl">{solution.title}</h2>
                                </div>
                                <p className="text-secondary-600 text-lg mb-8">{solution.shortDesc}</p>

                                <div className="grid md:grid-cols-2 gap-8 mb-8">
                                    <div>
                                        <h4 className="font-semibold text-primary-900 mb-4">Thách thức</h4>
                                        <ul className="space-y-2">
                                            {solution.challenges.map((item) => (
                                                <li key={item} className="flex items-start gap-2 text-secondary-600 text-sm">
                                                    <span className="w-1.5 h-1.5 bg-secondary-400 rounded-full mt-2 flex-shrink-0"></span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-primary-900 mb-4">Giải pháp của chúng tôi</h4>
                                        <ul className="space-y-2">
                                            {solution.solutions.map((item) => (
                                                <li key={item} className="flex items-start gap-2 text-secondary-600 text-sm">
                                                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {solution.products.map((product) => (
                                        <span
                                            key={product}
                                            className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm"
                                        >
                                            {product}
                                        </span>
                                    ))}
                                </div>

                                <Link href={`/giai-phap/${solution.id}`}>
                                    <Button variant="primary">
                                        Xem chi tiết giải pháp
                                        <ArrowRight size={18} />
                                    </Button>
                                </Link>
                            </div>

                            <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary-100 to-primary-300 flex items-center justify-center">
                                    <solution.icon size={100} className="text-primary-500/30" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ===========================================
// CTA SECTION
// ===========================================
function SolutionCTA() {
    return (
        <section className="py-20 bg-gradient-to-r from-primary-800 to-primary-900">
            <div className="container">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                            Không tìm thấy giải pháp phù hợp?
                        </h2>
                        <p className="text-primary-200 text-lg mb-8">
                            Liên hệ ngay để đội ngũ kỹ thuật tư vấn giải pháp tùy chỉnh
                            cho công trình của bạn.
                        </p>
                        <Link href="/lien-he">
                            <Button size="lg" className="bg-white text-primary-900 hover:bg-primary-50">
                                Nhận tư vấn giải pháp
                                <ArrowRight size={20} />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// ===========================================
// MAIN PAGE
// ===========================================
export default function SolutionsPage() {
    return (
        <>
            <SolutionHero />
            <SolutionsList />
            <SolutionCTA />
        </>
    );
}
