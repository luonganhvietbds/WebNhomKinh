'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { MapPin, Calendar, ArrowRight, Filter } from 'lucide-react';
import { projectsData, projectCategories, siteConfig } from '@/lib/config';

export default function ProjectsPage() {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const filteredProjects = projectsData.filter((project) => {
        if (selectedCategory === 'all') return true;
        if (selectedCategory === 'van-phong') return project.category === 'Cao ốc văn phòng';
        if (selectedCategory === 'thuong-mai') return project.category === 'Trung tâm thương mại';
        if (selectedCategory === 'khach-san') return project.category === 'Khách sạn & Resort';
        if (selectedCategory === 'cong-nghiep') return project.category === 'Nhà máy công nghiệp';
        return true;
    });

    return (
        <>
            {/* Hero Section */}
            <section className="bg-mesh py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/80" />
                <div className="container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <span className="badge badge-primary bg-white/20 text-white border-white/30 mb-4">
                            Dự án tiêu biểu
                        </span>
                        <h1 className="text-white mb-4">Những công trình đã hoàn thành</h1>
                        <p className="text-xl text-white/80">
                            Hơn {siteConfig.company.projectsCompleted} dự án quy mô lớn trên khắp Việt Nam
                            với chất lượng vượt trội và tiến độ đảm bảo.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-12 -mt-8 relative z-10">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { value: siteConfig.company.projectsCompleted, label: 'Dự án hoàn thành' },
                            { value: '1,000,000m²', label: 'Tổng diện tích' },
                            { value: '100%', label: 'Đúng tiến độ' },
                            { value: siteConfig.company.partners, label: 'Khách hàng tin tưởng' },
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="card p-6 text-center"
                            >
                                <div className="stat-number mb-2">{stat.value}</div>
                                <div className="text-secondary-500 text-sm">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Filter & Projects */}
            <section className="section">
                <div className="container">
                    {/* Category Filter */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center justify-center gap-3 flex-wrap mb-12"
                    >
                        <Filter size={20} className="text-secondary-500" />
                        {projectCategories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${selectedCategory === category.id
                                        ? 'bg-primary-600 text-white shadow-lg'
                                        : 'bg-white text-secondary-600 border border-secondary-200 hover:border-primary-300'
                                    }`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </motion.div>

                    {/* Projects Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="card overflow-hidden h-full hover-lift">
                                    <div className="aspect-[4/3] relative overflow-hidden">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-900/20 to-transparent" />
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <span className="badge bg-white/20 backdrop-blur-sm text-white border-white/30 mb-2">
                                                {project.category}
                                            </span>
                                            <h3 className="text-xl font-bold text-white">{project.title}</h3>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-4 text-sm text-secondary-500 mb-4">
                                            <span className="flex items-center gap-1">
                                                <MapPin size={14} />
                                                {project.location}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Calendar size={14} />
                                                {project.year}
                                            </span>
                                        </div>
                                        <p className="text-secondary-600 font-medium mb-4">{project.scope}</p>
                                        <ul className="space-y-2">
                                            {project.highlights.map((highlight) => (
                                                <li key={highlight} className="text-sm text-secondary-500 flex items-center gap-2">
                                                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                                                    {highlight}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section bg-mesh relative overflow-hidden">
                <div className="absolute inset-0 bg-primary-950/80" />
                <div className="container relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-white mb-4">Bạn có dự án cần triển khai?</h2>
                        <p className="text-white/70 text-lg mb-8">
                            Liên hệ ngay để được tư vấn giải pháp tối ưu và báo giá chi tiết.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/lien-he">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="btn btn-white"
                                >
                                    Tư vấn dự án
                                    <ArrowRight size={18} />
                                </motion.button>
                            </Link>
                            <a href={`tel:${siteConfig.contact.hotline.replace(' ', '')}`}>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="btn border-2 border-white/30 text-white hover:bg-white/10"
                                >
                                    Gọi ngay: {siteConfig.contact.hotline}
                                </motion.button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
