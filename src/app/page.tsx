'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Shield, Award, Users, ChevronRight, CheckCircle, MessageSquare, Sparkles, Zap, Globe, Phone, Building2 } from 'lucide-react';
import { siteConfig, placeholderImages, partners, projectsData } from '@/lib/config';

// ===========================================
// PREMIUM HERO SECTION
// ===========================================
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-mesh overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-20 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent-teal/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent-gold/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8"
            >
              <Sparkles size={16} className="text-accent-gold" />
              <span className="text-white/90 text-sm font-medium">{siteConfig.company.slogan}</span>
            </motion.div>

            {/* Heading */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-[1.1] mb-6">
              Giải pháp nhôm kính
              <span className="block mt-2 bg-gradient-to-r from-primary-300 via-accent-teal to-primary-300 bg-clip-text text-transparent gradient-animate">
                cho công trình quy mô lớn
              </span>
            </h1>

            <p className="text-xl text-white/70 mb-10 leading-relaxed max-w-xl">
              {siteConfig.company.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link href="/lien-he">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn btn-white group"
                >
                  <span>Tư vấn giải pháp</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <Link href="/du-an">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all"
                >
                  <span>Xem dự án tiêu biểu</span>
                </motion.button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-14 pt-10 border-t border-white/10">
              {[
                { value: siteConfig.company.experience, label: 'Năm kinh nghiệm' },
                { value: siteConfig.company.projectsCompleted, label: 'Dự án hoàn thành' },
                { value: siteConfig.company.partners, label: 'Đối tác lớn' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="stat-number text-white">{stat.value}</div>
                  <div className="text-white/50 text-sm mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            {/* Main Image */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={placeholderImages.hero.main}
                alt="Công trình nhôm kính cao cấp"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent" />
              {/* Glass Border Effect */}
              <div className="absolute inset-0 rounded-3xl border border-white/20" />
            </div>

            {/* Floating Card 1 - ISO */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-8 -left-8 glass rounded-2xl p-5 shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Shield className="text-white" size={28} />
                </div>
                <div>
                  <div className="font-bold text-primary-900">{siteConfig.certifications[0].name}</div>
                  <div className="text-sm text-secondary-500">{siteConfig.certifications[0].description}</div>
                </div>
              </div>
            </motion.div>

            {/* Floating Card 2 - AI */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="absolute -top-6 -right-6 glass rounded-2xl p-4 shadow-2xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-teal rounded-lg flex items-center justify-center animate-pulse-glow">
                  <MessageSquare className="text-white" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-primary-900 text-sm">AI Tư vấn 24/7</div>
                  <div className="text-xs text-green-500 font-medium">● Online</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

// ===========================================
// PARTNERS SECTION
// ===========================================
function PartnersSection() {
  return (
    <section className="py-12 bg-white border-b border-secondary-100">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-secondary-500 text-sm font-medium uppercase tracking-wider">
            Được tin tưởng bởi
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.5 }}
                whileHover={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-secondary-400 font-bold text-xl tracking-wider cursor-default"
              >
                {partner}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ===========================================
// SOLUTIONS SECTION
// ===========================================
const solutions = [
  {
    icon: Building2,
    title: 'Cao ốc văn phòng',
    description: 'Giải pháp mặt dựng curtain wall, vách kính cách nhiệt cho các tòa nhà văn phòng hạng A, B.',
    href: '/giai-phap',
    image: placeholderImages.solutions.vanPhong,
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Globe,
    title: 'Trung tâm thương mại',
    description: 'Hệ thống cửa nhôm, vách kính tiêu âm, mái kính cho không gian thương mại hiện đại.',
    href: '/giai-phap',
    image: placeholderImages.solutions.thuongMai,
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Sparkles,
    title: 'Khách sạn & Resort',
    description: 'Giải pháp nhôm kính cao cấp, cách âm, cách nhiệt cho trải nghiệm nghỉ dưỡng hoàn hảo.',
    href: '/giai-phap',
    image: placeholderImages.solutions.khachSan,
    color: 'from-amber-500 to-amber-600',
  },
  {
    icon: Zap,
    title: 'Nhà máy công nghiệp',
    description: 'Hệ thống cửa nhôm kính công nghiệp, vách kính chịu lực cho nhà xưởng, nhà máy.',
    href: '/giai-phap',
    image: placeholderImages.solutions.congNghiep,
    color: 'from-green-500 to-green-600',
  },
];

function SolutionsSection() {
  return (
    <section className="section section-lg section-pattern">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="badge badge-primary mb-4">Giải pháp theo công trình</span>
          <h2 className="mb-4">Đồng hành cùng mọi loại dự án</h2>
          <div className="divider divider-center divider-lg" />
          <p className="text-secondary-600 text-lg mt-6">
            Chúng tôi hiểu rằng mỗi loại công trình có yêu cầu kỹ thuật riêng.
            Đội ngũ chuyên gia sẽ tư vấn giải pháp tối ưu cho từng dự án.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={solution.href} className="group block h-full">
                <div className="card overflow-hidden h-full hover-lift">
                  {/* Image */}
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent" />
                    <div className={`absolute top-4 left-4 w-14 h-14 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <solution.icon className="text-white" size={28} />
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary-900 mb-3">{solution.title}</h3>
                    <p className="text-secondary-600 mb-4">{solution.description}</p>
                    <span className="inline-flex items-center text-primary-600 font-semibold group-hover:gap-2 transition-all">
                      Tìm hiểu thêm <ChevronRight size={18} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===========================================
// WHY US SECTION
// ===========================================
const features = [
  {
    icon: Shield,
    title: 'Chất lượng đảm bảo',
    description: 'Sản phẩm đạt tiêu chuẩn quốc tế ISO, CE, ASTM. Bảo hành dài hạn lên đến 10 năm.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Users,
    title: 'Đội ngũ chuyên nghiệp',
    description: 'Kỹ sư có chứng chỉ quốc tế, kinh nghiệm thi công hàng trăm dự án lớn.',
    gradient: 'from-blue-500 to-indigo-500',
  },
  {
    icon: Award,
    title: 'Tiến độ cam kết',
    description: 'Quy trình quản lý dự án chặt chẽ, cam kết tiến độ theo hợp đồng.',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    icon: MessageSquare,
    title: 'Hỗ trợ AI 24/7',
    description: 'AI Chatbot tư vấn kỹ thuật tự động và đội ngũ kỹ thuật sẵn sàng hỗ trợ.',
    gradient: 'from-purple-500 to-pink-500',
  },
];

function WhyUsSection() {
  return (
    <section className="section section-lg bg-gradient-subtle">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="badge badge-primary mb-4">Tại sao chọn chúng tôi</span>
            <h2 className="mb-4">Đối tác kỹ thuật đáng tin cậy</h2>
            <div className="divider" />
            <p className="text-secondary-600 text-lg mb-8 mt-6">
              Với hơn {siteConfig.company.experience} năm kinh nghiệm, chúng tôi tự hào là đối tác kỹ thuật
              tin cậy của nhiều chủ đầu tư và nhà thầu lớn trong ngành xây dựng.
            </p>

            <div className="space-y-4 mb-10">
              {[
                'Tư vấn giải pháp tối ưu chi phí',
                'Cung cấp đầy đủ hồ sơ kỹ thuật',
                'Hỗ trợ thiết kế shop drawing',
                `Bảo hành dài hạn ${siteConfig.warranty.products}`
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="text-white" size={14} />
                  </div>
                  <span className="text-secondary-700 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            <Link href="/gioi-thieu">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-primary"
              >
                Tìm hiểu về chúng tôi
                <ArrowRight size={18} />
              </motion.button>
            </Link>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="card p-6 hover-lift group"
              >
                <div className={`icon-box-lg bg-gradient-to-br ${feature.gradient} mb-5 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="text-white" size={28} />
                </div>
                <h4 className="font-bold text-primary-900 mb-2 text-lg">{feature.title}</h4>
                <p className="text-secondary-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ===========================================
// PROJECTS SECTION
// ===========================================
function ProjectsSection() {
  // Get first 3 projects
  const displayProjects = projectsData.slice(0, 3);

  return (
    <section className="section section-lg">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12"
        >
          <div>
            <span className="badge badge-primary mb-4">Dự án tiêu biểu</span>
            <h2>Những công trình đã hoàn thành</h2>
            <div className="divider" />
          </div>
          <Link href="/du-an">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn btn-secondary mt-6 md:mt-0"
            >
              Xem tất cả dự án
              <ArrowRight size={18} />
            </motion.button>
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {displayProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group"
            >
              <div className="card overflow-hidden hover-lift">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent" />
                  {/* Year Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                    {project.year}
                  </div>
                </div>
                <div className="p-6">
                  <span className="badge badge-primary mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-primary-900 mb-2">{project.title}</h3>
                  <p className="text-secondary-500 text-sm mb-1">{project.location}</p>
                  <p className="text-secondary-600 text-sm font-medium">{project.scope}</p>
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
function CTASection() {
  return (
    <section className="relative py-24 bg-mesh overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-64 h-64 bg-primary-500/30 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-teal/20 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white/90 text-sm font-medium mb-8">
              <Phone size={16} className="text-accent-gold" />
              Hotline: {siteConfig.contact.hotline} (24/7)
            </span>

            <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
              Sẵn sàng bắt đầu{' '}
              <span className="bg-gradient-to-r from-accent-teal to-primary-300 bg-clip-text text-transparent">
                dự án của bạn?
              </span>
            </h2>
            <p className="text-white/70 text-xl mb-10 max-w-2xl mx-auto">
              Liên hệ ngay để nhận tư vấn giải pháp tối ưu cho công trình.
              Đội ngũ kỹ thuật sẵn sàng hỗ trợ 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/lien-he">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn btn-white w-full sm:w-auto group"
                >
                  <span>Nhận tư vấn miễn phí</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <Link href="/du-an">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all w-full sm:w-auto"
                >
                  <span>Đặt lịch tư vấn dự án</span>
                </motion.button>
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
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PartnersSection />
      <SolutionsSection />
      <WhyUsSection />
      <ProjectsSection />
      <CTASection />
    </>
  );
}
