/**
 * Site Configuration - Centralized content management
 * Admin có thể thay đổi các giá trị này qua CMS hoặc trực tiếp trong file
 */

export const siteConfig = {
    // ============================
    // COMPANY INFO
    // ============================
    company: {
        name: 'AluGlass',
        tagline: 'Nhôm kính công trình',
        slogan: 'Đối tác kỹ thuật hàng đầu cho công trình quy mô lớn',
        description: 'Đối tác kỹ thuật hàng đầu trong lĩnh vực nhôm kính cho công trình quy mô lớn. Cam kết chất lượng, đúng tiến độ, giải pháp tối ưu.',
        founded: '2010',
        experience: '15+',
        projectsCompleted: '200+',
        partners: '50+',
        employees: '500+',
    },

    // ============================
    // CONTACT INFO
    // ============================
    contact: {
        hotline: '1900 1234',
        hotlineHref: 'tel:19001234',
        email: 'info@aluglass.vn',
        emailHref: 'mailto:info@aluglass.vn',
        address: {
            street: '123 Đường Nguyễn Văn Linh',
            district: 'Quận 7',
            city: 'TP. Hồ Chí Minh',
            country: 'Việt Nam',
            full: '123 Đường Nguyễn Văn Linh, Quận 7, TP. Hồ Chí Minh, Việt Nam',
        },
        workHours: {
            weekday: 'T2 - T7: 8:00 - 17:30',
            weekend: 'Chủ nhật: Theo lịch hẹn',
        },
    },

    // ============================
    // SOCIAL LINKS
    // ============================
    social: {
        facebook: 'https://facebook.com/aluglass',
        linkedin: 'https://linkedin.com/company/aluglass',
        youtube: 'https://youtube.com/@aluglass',
        zalo: 'https://zalo.me/aluglass',
    },

    // ============================
    // CERTIFICATIONS
    // ============================
    certifications: [
        { name: 'ISO 9001:2015', description: 'Hệ thống quản lý chất lượng' },
        { name: 'ISO 14001:2015', description: 'Hệ thống quản lý môi trường' },
        { name: 'CE Marking', description: 'Tiêu chuẩn Châu Âu' },
    ],

    // ============================
    // WARRANTY
    // ============================
    warranty: {
        products: '5-10 năm',
        installation: '2-5 năm',
        support: 'Trọn đời',
    },
};

/**
 * Placeholder Images - Admin thay thế sau qua CMS
 * Format: https://images.unsplash.com/... hoặc URL từ storage
 */
export const placeholderImages = {
    // ============================
    // HERO IMAGES
    // ============================
    hero: {
        main: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop',
        secondary: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
    },

    // ============================
    // PROJECT IMAGES - Dự án tiêu biểu
    // ============================
    projects: {
        landmark81: 'https://images.unsplash.com/photo-1565363887715-71c1c9c6f7d3?w=800&h=600&fit=crop',
        vincom: 'https://images.unsplash.com/photo-1557804483-ef3ae78eca57?w=800&h=600&fit=crop',
        marriott: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
        samsung: 'https://images.unsplash.com/photo-1590650046871-92c887180603?w=800&h=600&fit=crop',
        vinhomes: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&h=600&fit=crop',
        aeon: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&h=600&fit=crop',
    },

    // ============================
    // PRODUCT IMAGES - Sản phẩm
    // ============================
    products: {
        cuaNhom55: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
        cuaNhom93: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
        vachKinhCuongLuc: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=400&fit=crop',
        vachKinhSpider: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
        curtainWall: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=600&h=400&fit=crop',
        unitizedSystem: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop',
        maiKinhCoDinh: 'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=600&h=400&fit=crop',
        maiKinhTuDong: 'https://images.unsplash.com/photo-1495195134817-aeb325a55b65?w=600&h=400&fit=crop',
    },

    // ============================
    // SOLUTION IMAGES - Giải pháp
    // ============================
    solutions: {
        vanPhong: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop',
        thuongMai: 'https://images.unsplash.com/photo-1567449303078-57ad995bd17f?w=800&h=600&fit=crop',
        khachSan: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
        congNghiep: 'https://images.unsplash.com/photo-1565183928294-7063f23ce0f8?w=800&h=600&fit=crop',
    },

    // ============================
    // ABOUT IMAGES - Giới thiệu
    // ============================
    about: {
        factory: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1000&h=600&fit=crop',
        team: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&h=600&fit=crop',
        office: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1000&h=600&fit=crop',
    },

    // ============================
    // PLACEHOLDERS
    // ============================
    placeholder: {
        product: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
        project: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
        person: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
    },
};

/**
 * Partners - Đối tác
 */
export const partners = [
    'Vingroup',
    'Sun Group',
    'Novaland',
    'Capitaland',
    'Gamuda Land',
    'FLC Group',
];

/**
 * Project Data - Dự án tiêu biểu
 */
export const projectsData = [
    {
        id: 1,
        title: 'Landmark 81',
        category: 'Cao ốc văn phòng',
        location: 'TP. Hồ Chí Minh',
        scope: 'Mặt dựng curtain wall 50,000m²',
        year: '2023',
        image: placeholderImages.projects.landmark81,
        highlights: ['Tòa nhà cao nhất Việt Nam', 'Hệ curtain wall tiêu chuẩn quốc tế', 'Chịu gió cấp 12'],
    },
    {
        id: 2,
        title: 'Vincom Center Bà Triệu',
        category: 'Trung tâm thương mại',
        location: 'Hà Nội',
        scope: 'Vách kính & cửa nhôm 25,000m²',
        year: '2022',
        image: placeholderImages.projects.vincom,
        highlights: ['TTTM hàng đầu miền Bắc', 'Vách kính spider', 'Mái kính atrium'],
    },
    {
        id: 3,
        title: 'JW Marriott Phú Quốc',
        category: 'Khách sạn & Resort',
        location: 'Phú Quốc',
        scope: 'Giải pháp nhôm kính cao cấp 15,000m²',
        year: '2023',
        image: placeholderImages.projects.marriott,
        highlights: ['Resort 5 sao', 'Cửa sổ 3 lớp kính cách âm', 'Chống ăn mòn biển'],
    },
    {
        id: 4,
        title: 'Samsung HCMC CE Complex',
        category: 'Nhà máy công nghiệp',
        location: 'TP. Hồ Chí Minh',
        scope: 'Cửa nhôm công nghiệp 30,000m²',
        year: '2022',
        image: placeholderImages.projects.samsung,
        highlights: ['Nhà máy sản xuất điện tử', 'Cửa nhôm chịu lực cao', 'Tiêu chuẩn Samsung'],
    },
    {
        id: 5,
        title: 'Vinhomes Central Park',
        category: 'Cao ốc văn phòng',
        location: 'TP. Hồ Chí Minh',
        scope: 'Mặt dựng & vách kính 80,000m²',
        year: '2021',
        image: placeholderImages.projects.vinhomes,
        highlights: ['Khu đô thị cao cấp', 'Đồng bộ toàn dự án', 'Kính Low-E cách nhiệt'],
    },
    {
        id: 6,
        title: 'AEON Mall Long Biên',
        category: 'Trung tâm thương mại',
        location: 'Hà Nội',
        scope: 'Mái kính & vách kính 20,000m²',
        year: '2021',
        image: placeholderImages.projects.aeon,
        highlights: ['TTTM Nhật Bản', 'Mái kính atrium lớn', 'Tiêu chuẩn AEON'],
    },
];

/**
 * Products Data - Sản phẩm
 */
export const productsData = [
    {
        id: 1,
        name: 'Cửa nhôm hệ Xingfa 55',
        category: 'cua-nhom',
        categoryName: 'Cửa nhôm',
        description: 'Hệ cửa nhôm cao cấp với độ dày 1.4mm, khả năng cách âm 32dB, phù hợp căn hộ và văn phòng.',
        specs: ['Độ dày: 1.4mm', 'Kính: 2 lớp 5mm', 'Cách âm: 32dB', 'Màu sắc: 20+'],
        image: placeholderImages.products.cuaNhom55,
        featured: true,
    },
    {
        id: 2,
        name: 'Cửa nhôm hệ 93',
        category: 'cua-nhom',
        categoryName: 'Cửa nhôm',
        description: 'Hệ cửa nhôm cao cấp nhất với độ dày 1.8mm, kính 3 lớp, cách âm vượt trội 38dB.',
        specs: ['Độ dày: 1.8mm', 'Kính: 3 lớp', 'Cách âm: 38dB', 'Chống mưa: Cấp 5'],
        image: placeholderImages.products.cuaNhom93,
        featured: true,
    },
    {
        id: 3,
        name: 'Vách kính cường lực',
        category: 'vach-kinh',
        categoryName: 'Vách kính',
        description: 'Vách kính cường lực 10-12mm an toàn cao, độ trong suốt tuyệt vời.',
        specs: ['Độ dày: 10-12mm', 'Tiêu chuẩn: EN 12150', 'An toàn: Cao', 'Phụ kiện: Inox 304'],
        image: placeholderImages.products.vachKinhCuongLuc,
        featured: true,
    },
    {
        id: 4,
        name: 'Vách kính Spider',
        category: 'vach-kinh',
        categoryName: 'Vách kính',
        description: 'Hệ vách kính spider với thiết kế không khung, tạo không gian thông thoáng.',
        specs: ['Kính: 12mm', 'Phụ kiện: Inox 304', 'Spider: 4 chấu', 'Thiết kế: Không khung'],
        image: placeholderImages.products.vachKinhSpider,
        featured: false,
    },
    {
        id: 5,
        name: 'Curtain Wall tiêu chuẩn',
        category: 'mat-dung',
        categoryName: 'Mặt dựng',
        description: 'Hệ mặt dựng curtain wall chịu gió cấp 12, kín nước 100%, tuổi thọ 30+ năm.',
        specs: ['Chịu gió: Cấp 12', 'Kín nước: 100%', 'Tuổi thọ: 30+ năm', 'Tiêu chuẩn: EN 13830'],
        image: placeholderImages.products.curtainWall,
        featured: true,
    },
    {
        id: 6,
        name: 'Unitized System',
        category: 'mat-dung',
        categoryName: 'Mặt dựng',
        description: 'Hệ mặt dựng module hóa, lắp đặt nhanh, chất lượng đồng nhất.',
        specs: ['Module: 1.5m x 3.6m', 'Lắp đặt: Nhanh', 'Chất lượng: Đồng nhất', 'Sản xuất: Nhà máy'],
        image: placeholderImages.products.unitizedSystem,
        featured: false,
    },
    {
        id: 7,
        name: 'Mái kính cố định',
        category: 'mai-kinh',
        categoryName: 'Mái kính',
        description: 'Mái kính cố định với kính Low-E chống nóng, hệ thoát nước hiệu quả.',
        specs: ['Kính: Low-E', 'Chống UV: Có', 'Thoát nước: Tốt', 'Kết cấu: Nhôm định hình'],
        image: placeholderImages.products.maiKinhCoDinh,
        featured: false,
    },
    {
        id: 8,
        name: 'Mái kính tự động',
        category: 'mai-kinh',
        categoryName: 'Mái kính',
        description: 'Mái kính tự động điều khiển từ xa, cảm biến mưa thông minh.',
        specs: ['Điều khiển: Remote', 'Cảm biến: Mưa', 'Motor: Đức', 'Bảo hành: 5 năm'],
        image: placeholderImages.products.maiKinhTuDong,
        featured: true,
    },
];

// Product categories
export const productCategories = [
    { id: 'all', name: 'Tất cả sản phẩm' },
    { id: 'cua-nhom', name: 'Cửa nhôm' },
    { id: 'vach-kinh', name: 'Vách kính' },
    { id: 'mat-dung', name: 'Mặt dựng' },
    { id: 'mai-kinh', name: 'Mái kính' },
];

// Project categories
export const projectCategories = [
    { id: 'all', name: 'Tất cả' },
    { id: 'van-phong', name: 'Cao ốc văn phòng' },
    { id: 'thuong-mai', name: 'Trung tâm thương mại' },
    { id: 'khach-san', name: 'Khách sạn & Resort' },
    { id: 'cong-nghiep', name: 'Nhà máy công nghiệp' },
];
