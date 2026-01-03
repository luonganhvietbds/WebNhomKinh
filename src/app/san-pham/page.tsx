'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Search, Filter, Eye, ArrowRight } from 'lucide-react';
import { productsData, productCategories } from '@/lib/config';

export default function ProductsPage() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredProducts = productsData.filter((product) => {
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
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
                            Danh mục sản phẩm
                        </span>
                        <h1 className="text-white mb-4">Sản phẩm nhôm kính cao cấp</h1>
                        <p className="text-xl text-white/80">
                            Đa dạng giải pháp từ cửa nhôm, vách kính đến mặt dựng curtain wall
                            với chất lượng quốc tế và đầy đủ chứng nhận.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Filters & Products */}
            <section className="section">
                <div className="container">
                    {/* Filter Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white rounded-2xl shadow-lg border border-secondary-100 p-6 mb-12"
                    >
                        <div className="flex flex-col lg:flex-row gap-6">
                            {/* Search */}
                            <div className="flex-1 relative">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary-400" size={20} />
                                <input
                                    type="text"
                                    placeholder="Tìm kiếm sản phẩm..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="form-input pl-12"
                                />
                            </div>

                            {/* Category Filter */}
                            <div className="flex items-center gap-2 flex-wrap">
                                <Filter size={20} className="text-secondary-500" />
                                {productCategories.map((category) => (
                                    <button
                                        key={category.id}
                                        onClick={() => setSelectedCategory(category.id)}
                                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${selectedCategory === category.id
                                                ? 'bg-primary-600 text-white shadow-lg'
                                                : 'bg-secondary-100 text-secondary-600 hover:bg-secondary-200'
                                            }`}
                                    >
                                        {category.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Products Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {filteredProducts.map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="group"
                            >
                                <div className="card overflow-hidden h-full hover-lift">
                                    <div className="aspect-[4/3] relative overflow-hidden">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {product.featured && (
                                            <div className="absolute top-4 left-4 badge badge-gold">
                                                Nổi bật
                                            </div>
                                        )}
                                        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="btn btn-white w-full text-sm">
                                                <Eye size={16} />
                                                Xem chi tiết
                                            </button>
                                        </div>
                                    </div>
                                    <div className="p-5">
                                        <span className="badge badge-primary text-xs mb-2">
                                            {product.categoryName}
                                        </span>
                                        <h3 className="font-bold text-primary-900 mb-2">{product.name}</h3>
                                        <p className="text-secondary-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                                        <div className="flex flex-wrap gap-1">
                                            {product.specs.slice(0, 2).map((spec) => (
                                                <span key={spec} className="text-xs bg-secondary-100 text-secondary-600 px-2 py-1 rounded">
                                                    {spec}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {filteredProducts.length === 0 && (
                        <div className="text-center py-16">
                            <p className="text-secondary-500 text-lg">Không tìm thấy sản phẩm phù hợp</p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="section bg-gradient-subtle">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="mb-4">Cần tư vấn chi tiết?</h2>
                        <p className="text-secondary-600 text-lg mb-8">
                            Đội ngũ kỹ thuật sẵn sàng tư vấn giải pháp phù hợp nhất cho dự án của bạn.
                        </p>
                        <Link href="/lien-he">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="btn btn-primary"
                            >
                                Nhận tư vấn miễn phí
                                <ArrowRight size={18} />
                            </motion.button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
