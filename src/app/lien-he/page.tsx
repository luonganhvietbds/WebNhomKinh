'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Calendar } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { Button, Input, Textarea, Select } from '@/components/ui';

// ===========================================
// FORM SCHEMA
// ===========================================
const contactSchema = z.object({
    name: z.string().min(2, 'Vui lòng nhập họ tên'),
    company: z.string().min(2, 'Vui lòng nhập tên công ty'),
    email: z.string().email('Email không hợp lệ'),
    phone: z.string().min(10, 'Số điện thoại không hợp lệ'),
    projectType: z.string().min(1, 'Vui lòng chọn loại công trình'),
    projectStage: z.string().min(1, 'Vui lòng chọn giai đoạn'),
    message: z.string().min(10, 'Vui lòng mô tả nhu cầu (tối thiểu 10 ký tự)'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const projectTypes = [
    { value: 'van-phong', label: 'Cao ốc văn phòng' },
    { value: 'thuong-mai', label: 'Trung tâm thương mại' },
    { value: 'khach-san', label: 'Khách sạn & Resort' },
    { value: 'cong-nghiep', label: 'Nhà máy công nghiệp' },
    { value: 'khac', label: 'Loại khác' },
];

const projectStages = [
    { value: 'y-tuong', label: 'Ý tưởng / Nghiên cứu' },
    { value: 'thiet-ke', label: 'Đang thiết kế' },
    { value: 'dau-thau', label: 'Chuẩn bị đấu thầu' },
    { value: 'thi-cong', label: 'Đang thi công' },
];

// ===========================================
// HERO SECTION
// ===========================================
function ContactHero() {
    return (
        <section className="relative py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-3xl"
                >
                    <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-primary-200 text-sm font-medium mb-6">
                        Liên hệ
                    </span>
                    <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                        Nhận tư vấn giải pháp
                    </h1>
                    <p className="text-xl text-primary-100 leading-relaxed">
                        Đội ngũ kỹ thuật sẵn sàng tư vấn giải pháp tối ưu cho công trình của bạn.
                        Liên hệ ngay để được hỗ trợ nhanh nhất.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

// ===========================================
// CONTACT INFO
// ===========================================
function ContactInfo() {
    const contacts = [
        {
            icon: Phone,
            title: 'Hotline',
            value: '1900 1234',
            sub: 'Tư vấn 24/7',
        },
        {
            icon: Mail,
            title: 'Email',
            value: 'info@aluglass.vn',
            sub: 'Phản hồi trong 2 giờ',
        },
        {
            icon: MapPin,
            title: 'Văn phòng',
            value: '123 Đường ABC, Quận XYZ',
            sub: 'TP. Hồ Chí Minh',
        },
        {
            icon: Clock,
            title: 'Giờ làm việc',
            value: 'T2 - T7: 8:00 - 17:30',
            sub: 'Chủ nhật: Theo lịch hẹn',
        },
    ];

    return (
        <section className="py-12 bg-primary-50">
            <div className="container">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {contacts.map((contact, index) => (
                        <motion.div
                            key={contact.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-4"
                        >
                            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <contact.icon className="text-primary-600" size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-secondary-500">{contact.title}</p>
                                <p className="font-semibold text-primary-900">{contact.value}</p>
                                <p className="text-sm text-secondary-500">{contact.sub}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ===========================================
// CONTACT FORM
// ===========================================
function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setIsSubmitted(true);
                reset();
            } else {
                alert('Có lỗi xảy ra. Vui lòng thử lại hoặc gọi hotline 1900 1234.');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            alert('Có lỗi xảy ra. Vui lòng thử lại hoặc gọi hotline 1900 1234.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <section className="section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="max-w-2xl mx-auto text-center bg-green-50 rounded-2xl p-12"
                    >
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Send className="text-green-600" size={40} />
                        </div>
                        <h2 className="text-2xl font-bold text-green-800 mb-4">
                            Cảm ơn bạn đã liên hệ!
                        </h2>
                        <p className="text-green-700 mb-6">
                            Chúng tôi đã nhận được thông tin và sẽ phản hồi trong vòng 2 giờ làm việc.
                        </p>
                        <Button onClick={() => setIsSubmitted(false)} variant="secondary">
                            Gửi yêu cầu khác
                        </Button>
                    </motion.div>
                </div>
            </section>
        );
    }

    return (
        <section className="section">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="mb-2">Gửi yêu cầu tư vấn</h2>
                        <p className="text-secondary-600 mb-8">
                            Điền thông tin bên dưới, đội ngũ sẽ liên hệ tư vấn chi tiết cho bạn.
                        </p>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <Input
                                    label="Họ và tên *"
                                    placeholder="Nguyễn Văn A"
                                    error={errors.name?.message}
                                    {...register('name')}
                                />
                                <Input
                                    label="Công ty *"
                                    placeholder="Công ty ABC"
                                    error={errors.company?.message}
                                    {...register('company')}
                                />
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <Input
                                    label="Email *"
                                    type="email"
                                    placeholder="email@company.com"
                                    error={errors.email?.message}
                                    {...register('email')}
                                />
                                <Input
                                    label="Số điện thoại *"
                                    placeholder="0912 345 678"
                                    error={errors.phone?.message}
                                    {...register('phone')}
                                />
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <Select
                                    label="Loại công trình *"
                                    options={projectTypes}
                                    error={errors.projectType?.message}
                                    {...register('projectType')}
                                />
                                <Select
                                    label="Giai đoạn dự án *"
                                    options={projectStages}
                                    error={errors.projectStage?.message}
                                    {...register('projectStage')}
                                />
                            </div>

                            <Textarea
                                label="Mô tả nhu cầu *"
                                placeholder="Mô tả về công trình và nhu cầu của bạn..."
                                error={errors.message?.message}
                                {...register('message')}
                            />

                            <Button type="submit" size="lg" isLoading={isSubmitting} className="w-full md:w-auto">
                                <Send size={18} />
                                Nhận tư vấn giải pháp
                            </Button>
                        </form>
                    </motion.div>

                    {/* Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        {/* Quick Contact */}
                        <div className="bg-primary-900 rounded-2xl p-8 text-white">
                            <h3 className="text-xl font-bold mb-4">Cần hỗ trợ ngay?</h3>
                            <p className="text-primary-200 mb-6">
                                Gọi hotline để được tư vấn trực tiếp với đội ngũ kỹ thuật.
                            </p>
                            <a
                                href="tel:19001234"
                                className="flex items-center gap-3 text-2xl font-bold hover:text-primary-300 transition-colors"
                            >
                                <Phone size={28} />
                                1900 1234
                            </a>
                        </div>

                        {/* AI Chatbot CTA */}
                        <div className="bg-primary-50 rounded-2xl p-8">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                                    <MessageSquare className="text-primary-600" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-primary-900">AI Tư vấn kỹ thuật</h4>
                                    <p className="text-sm text-secondary-500">Trả lời 24/7</p>
                                </div>
                            </div>
                            <p className="text-secondary-600 mb-4">
                                Tra cứu nhanh thông số kỹ thuật, tiêu chuẩn và giải pháp phù hợp.
                            </p>
                            <Button variant="secondary" className="w-full">
                                Mở AI Chatbot
                            </Button>
                        </div>

                        {/* Schedule Meeting */}
                        <div className="bg-secondary-50 rounded-2xl p-8">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center">
                                    <Calendar className="text-secondary-600" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-primary-900">Đặt lịch tư vấn</h4>
                                    <p className="text-sm text-secondary-500">Gặp trực tiếp đội ngũ</p>
                                </div>
                            </div>
                            <p className="text-secondary-600 mb-4">
                                Đặt lịch hẹn để được tư vấn chuyên sâu tại văn phòng hoặc công trường.
                            </p>
                            <Button variant="ghost" className="w-full border border-secondary-300">
                                Đặt lịch hẹn
                            </Button>
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
export default function ContactPage() {
    return (
        <>
            <ContactHero />
            <ContactInfo />
            <ContactForm />
        </>
    );
}
