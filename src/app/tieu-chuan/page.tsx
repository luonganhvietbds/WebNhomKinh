'use client';

import { motion } from 'framer-motion';
import { Shield, Award, FileCheck, Download, ExternalLink, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui';

// ===========================================
// CERTIFICATIONS DATA
// ===========================================
const certifications = [
    {
        name: 'ISO 9001:2015',
        organization: 'Bureau Veritas',
        description: 'Hệ thống quản lý chất lượng',
        validUntil: '2026',
        icon: Award,
    },
    {
        name: 'ISO 14001:2015',
        organization: 'Bureau Veritas',
        description: 'Hệ thống quản lý môi trường',
        validUntil: '2026',
        icon: Shield,
    },
    {
        name: 'CE Marking',
        organization: 'European Union',
        description: 'Chứng nhận tiêu chuẩn Châu Âu',
        validUntil: 'Unlimited',
        icon: FileCheck,
    },
];

const standards = [
    {
        category: 'Tiêu chuẩn kỹ thuật nhôm',
        items: [
            { code: 'EN 12020', name: 'Tolerances on dimensions and shape' },
            { code: 'EN 755', name: 'Extruded rod/bar, tube and profiles' },
            { code: 'EN 573', name: 'Chemical composition and form of wrought products' },
            { code: 'AA Standards', name: 'Aluminum Association specifications' },
        ],
    },
    {
        category: 'Tiêu chuẩn kính xây dựng',
        items: [
            { code: 'EN 12150', name: 'Thermally toughened soda lime silicate safety glass' },
            { code: 'EN 14449', name: 'Laminated glass and laminated safety glass' },
            { code: 'EN 1279', name: 'Insulating glass units (IGU)' },
            { code: 'ASTM C1036', name: 'Flat glass specification' },
        ],
    },
    {
        category: 'Tiêu chuẩn mặt dựng',
        items: [
            { code: 'EN 13830', name: 'Curtain walling - Product standard' },
            { code: 'EN 12152', name: 'Air permeability - Performance requirements' },
            { code: 'EN 12154', name: 'Watertightness - Performance requirements' },
            { code: 'EN 13116', name: 'Resistance to wind load - Performance requirements' },
        ],
    },
    {
        category: 'Tiêu chuẩn an toàn & PCCC',
        items: [
            { code: 'EN 1627-1630', name: 'Burglar resistance for windows, doors, curtain walling' },
            { code: 'EN 13501', name: 'Fire classification of construction products' },
            { code: 'TCVN 6160:1996', name: 'PCCC - Nhà cao tầng - Yêu cầu thiết kế' },
            { code: 'TCVN 9385:2012', name: 'Chống sét cho công trình xây dựng' },
        ],
    },
];

const documents = [
    { name: 'Catalog sản phẩm 2024', type: 'PDF', size: '15 MB' },
    { name: 'Thông số kỹ thuật hệ cửa nhôm', type: 'PDF', size: '8 MB' },
    { name: 'Hướng dẫn lắp đặt Curtain Wall', type: 'PDF', size: '12 MB' },
    { name: 'Bảng màu sắc xử lý bề mặt', type: 'PDF', size: '5 MB' },
    { name: 'Chứng chỉ ISO 9001:2015', type: 'PDF', size: '2 MB' },
    { name: 'Chứng nhận CE Marking', type: 'PDF', size: '1 MB' },
];

// ===========================================
// HERO SECTION
// ===========================================
function StandardsHero() {
    return (
        <section className="relative py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-3xl"
                >
                    <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-primary-200 text-sm font-medium mb-6">
                        Tiêu chuẩn & Chứng chỉ
                    </span>
                    <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                        Cam kết chất lượng quốc tế
                    </h1>
                    <p className="text-xl text-primary-100 leading-relaxed">
                        Sản phẩm và quy trình của chúng tôi tuân thủ nghiêm ngặt các tiêu chuẩn
                        quốc tế EN, ASTM, CE và TCVN, đảm bảo an toàn và chất lượng tối đa.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

// ===========================================
// CERTIFICATIONS
// ===========================================
function Certifications() {
    return (
        <section className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-12"
                >
                    <h2 className="mb-4">Chứng chỉ quốc tế</h2>
                    <p className="text-secondary-600 text-lg">
                        Các chứng nhận chất lượng từ tổ chức uy tín quốc tế
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-xl p-8 shadow-lg border border-secondary-100 text-center"
                        >
                            <div className="w-20 h-20 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                <cert.icon className="text-primary-600" size={40} />
                            </div>
                            <h3 className="text-2xl font-bold text-primary-900 mb-2">{cert.name}</h3>
                            <p className="text-secondary-500 text-sm mb-2">{cert.organization}</p>
                            <p className="text-secondary-600 mb-4">{cert.description}</p>
                            <span className="inline-block px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">
                                Hiệu lực đến: {cert.validUntil}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ===========================================
// STANDARDS LIST
// ===========================================
function StandardsList() {
    return (
        <section className="section section-alt">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-12"
                >
                    <h2 className="mb-4">Tiêu chuẩn kỹ thuật áp dụng</h2>
                    <p className="text-secondary-600 text-lg">
                        Sản phẩm tuân thủ các tiêu chuẩn quốc tế và Việt Nam
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {standards.map((category, index) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-xl p-6 shadow-md"
                        >
                            <h4 className="font-semibold text-primary-900 mb-4 flex items-center gap-2">
                                <FileCheck className="text-primary-600" size={20} />
                                {category.category}
                            </h4>
                            <ul className="space-y-3">
                                {category.items.map((item) => (
                                    <li key={item.code} className="flex items-start gap-3">
                                        <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                                        <div>
                                            <span className="font-medium text-primary-700">{item.code}</span>
                                            <span className="text-secondary-600 text-sm block">{item.name}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ===========================================
// DOCUMENTS
// ===========================================
function Documents() {
    return (
        <section className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-12"
                >
                    <h2 className="mb-4">Tài liệu kỹ thuật</h2>
                    <p className="text-secondary-600 text-lg">
                        Tải xuống catalog, thông số kỹ thuật và các chứng chỉ
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    <div className="bg-white rounded-xl shadow-md overflow-hidden">
                        {documents.map((doc, index) => (
                            <motion.div
                                key={doc.name}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className={`flex items-center justify-between p-4 hover:bg-primary-50 transition-colors ${index !== documents.length - 1 ? 'border-b border-secondary-100' : ''
                                    }`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
                                        <span className="text-red-600 text-xs font-bold">{doc.type}</span>
                                    </div>
                                    <div>
                                        <h5 className="font-medium text-primary-900">{doc.name}</h5>
                                        <p className="text-sm text-secondary-500">{doc.size}</p>
                                    </div>
                                </div>
                                <button className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium text-sm">
                                    <Download size={18} />
                                    Tải xuống
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="text-center mt-8">
                    <p className="text-secondary-500 text-sm mb-4">
                        Cần tài liệu kỹ thuật chi tiết hơn?
                    </p>
                    <Link href="/lien-he">
                        <Button variant="secondary">
                            Yêu cầu tài liệu
                            <ExternalLink size={16} />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

// ===========================================
// MAIN PAGE
// ===========================================
export default function StandardsPage() {
    return (
        <>
            <StandardsHero />
            <Certifications />
            <StandardsList />
            <Documents />
        </>
    );
}
