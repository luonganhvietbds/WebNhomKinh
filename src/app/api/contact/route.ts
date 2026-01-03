import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
    name: string;
    company: string;
    email: string;
    phone: string;
    projectType: string;
    projectStage: string;
    message: string;
}

export async function POST(request: NextRequest) {
    try {
        const body: ContactFormData = await request.json();

        // Validate required fields
        const requiredFields = ['name', 'company', 'email', 'phone', 'projectType', 'projectStage', 'message'];
        for (const field of requiredFields) {
            if (!body[field as keyof ContactFormData]) {
                return NextResponse.json(
                    { error: `Missing required field: ${field}` },
                    { status: 400 }
                );
            }
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(body.email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            );
        }

        // In production, you would:
        // 1. Save to database (Firebase Firestore)
        // 2. Send notification email
        // 3. Create CRM lead
        // 4. Send confirmation email to customer

        console.log('[Contact Form] New submission:', {
            name: body.name,
            company: body.company,
            email: body.email,
            phone: body.phone,
            projectType: body.projectType,
            projectStage: body.projectStage,
            timestamp: new Date().toISOString(),
        });

        // Simulate processing delay
        await new Promise((resolve) => setTimeout(resolve, 500));

        return NextResponse.json({
            success: true,
            message: 'Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong vòng 2 giờ làm việc.',
            leadId: `LEAD-${Date.now()}`,
        });
    } catch (error) {
        console.error('[API/Contact] Error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
