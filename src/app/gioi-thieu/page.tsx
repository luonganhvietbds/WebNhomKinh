'use client';

import { motion } from 'framer-motion';
import { Building2, Users, Award, Target, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui';

// ===========================================
// HERO SECTION
// ===========================================
function AboutHero() {
    return (
        <section className="relative py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-3xl"
                >
                    <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-primary-200 text-sm font-medium mb-6">
                        Về chúng tôi
                    </span>
                    <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                        Đối tác kỹ thuật tin cậy cho công trình quy mô lớn
                    </h1>
                    <p className="text-xl text-primary-100 leading-relaxed">
                        Với hơn 15 năm kinh nghiệm, AluGlass tự hào là đơn vị hàng đầu trong lĩnh vực
                        cung cấp giải pháp nhôm kính cho các công trình cao ốc, trung tâm thương mại,
                        khách sạn và khu công nghiệp trên toàn quốc.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

// ===========================================
// COMPANY OVERVIEW
// ===========================================
function CompanyOverview() {
    return (
        <section className="section">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="mb-6">Hồ sơ doanh nghiệp</h2>
                        <p className="text-secondary-600 text-lg mb-6 leading-relaxed">
                            AluGlass được thành lập năm 2010, khởi đầu là đơn vị thi công nhôm kính cho
                            các công trình dân dụng. Sau hơn 15 năm phát triển, chúng tôi đã trở thành
                            đối tác kỹ thuật uy tín của nhiều chủ đầu tư và nhà thầu lớn.
                        </p>
                        <p className="text-secondary-600 text-lg mb-8 leading-relaxed">
                            Với đội ngũ kỹ sư giàu kinh nghiệm và hệ thống sản xuất hiện đại, chúng tôi
                            cam kết mang đến những giải pháp nhôm kính tối ưu về kỹ thuật, thẩm mỹ và chi phí.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-primary-50 rounded-xl p-6 text-center">
                                <div className="text-4xl font-bold text-primary-700 mb-2">15+</div>
                                <div className="text-secondary-600">Năm kinh nghiệm</div>
                            </div>
                            <div className="bg-primary-50 rounded-xl p-6 text-center">
                                <div className="text-4xl font-bold text-primary-700 mb-2">200+</div>
                                <div className="text-secondary-600">Dự án hoàn thành</div>
                            </div>
                            <div className="bg-primary-50 rounded-xl p-6 text-center">
                                <div className="text-4xl font-bold text-primary-700 mb-2">50+</div>
                                <div className="text-secondary-600">Đối tác lớn</div>
                            </div>
                            <div className="bg-primary-50 rounded-xl p-6 text-center">
                                <div className="text-4xl font-bold text-primary-700 mb-2">500+</div>
                                <div className="text-secondary-600">Nhân sự</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary-200 to-primary-400 flex items-center justify-center">
                            <Building2 size={120} className="text-white/50" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// ===========================================
// CAPABILITIES
// ===========================================
const capabilities = [
    {
        icon: Building2,
        title: 'Nhà máy sản xuất',
        description: 'Nhà máy 10,000m² với dây chuyền sản xuất hiện đại từ Đức, công suất 50,000m² sản phẩm/năm.',
    },
    {
        icon: Users,
        title: 'Đội ngũ kỹ thuật',
        description: '50+ kỹ sư có chứng chỉ quốc tế, 200+ công nhân lành nghề được đào tạo bài bản.',
    },
    {
        icon: Award,
        title: 'Chứng nhận chất lượng',
        description: 'ISO 9001:2015, ISO 14001:2015, chứng nhận CE và các tiêu chuẩn ASTM, EN.',
    },
    {
        icon: Target,
        title: 'Năng lực thiết kế',
        description: 'Đội ngũ thiết kế shop drawing, hỗ trợ BIM, tư vấn giải pháp kỹ thuật chuyên sâu.',
    },
];

function Capabilities() {
    return (
        <section className="section section-alt">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="mb-4">Năng lực cung ứng</h2>
                    <p className="text-secondary-600 text-lg">
                        Hệ thống sản xuất và đội ngũ nhân sự chuyên nghiệp,
                        đáp ứng mọi yêu cầu kỹ thuật của công trình quy mô lớn.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {capabilities.map((cap, index) => (
                        <motion.div
                            key={cap.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-xl p-6 shadow-md text-center"
                        >
                            <div className="w-16 h-16 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <cap.icon className="text-primary-600" size={32} />
                            </div>
                            <h4 className="font-semibold text-primary-900 mb-2">{cap.title}</h4>
                            <p className="text-secondary-600 text-sm">{cap.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ===========================================
// VALUES
// ===========================================
const values = [
    'Chất lượng là ưu tiên hàng đầu',
    'Cam kết tiến độ theo hợp đồng',
    'Tư vấn giải pháp tối ưu chi phí',
    'Hỗ trợ kỹ thuật 24/7',
    'Bảo hành dài hạn lên đến 10 năm',
    'Đồng hành từ thiết kế đến hoàn thiện',
];

function Values() {
    return (
        <section className="section">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="mb-6">Cam kết của chúng tôi</h2>
                        <p className="text-secondary-600 text-lg mb-8">
                            Chúng tôi hiểu rằng mỗi công trình là một khoản đầu tư lớn. Vì vậy,
                            AluGlass cam kết mang đến dịch vụ chuyên nghiệp và sản phẩm chất lượng nhất.
                        </p>

                        <div className="space-y-4">
                            {values.map((value) => (
                                <div key={value} className="flex items-center gap-3">
                                    <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                                    <span className="text-secondary-700">{value}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-primary-900 rounded-2xl p-8 text-white">
                            <h3 className="text-2xl font-bold mb-4">Sứ mệnh</h3>
                            <p className="text-primary-100 mb-6 leading-relaxed">
                                "Trở thành đối tác kỹ thuật tin cậy, đồng hành cùng các công trình
                                xây dựng Việt Nam vươn tầm quốc tế với những giải pháp nhôm kính
                                chất lượng cao, bền vững và thẩm mỹ."
                            </p>
                            <Link href="/lien-he">
                                <Button className="bg-white text-primary-900 hover:bg-primary-50">
                                    Liên hệ hợp tác
                                    <ArrowRight size={18} />
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// ===========================================
// MAIN PAGE
// ===========================================
export default function AboutPage() {
    return (
        <>
            <AboutHero />
            <CompanyOverview />
            <Capabilities />
            <Values />
        </>
    );
}
