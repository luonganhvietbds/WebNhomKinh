import { NextRequest, NextResponse } from 'next/server';

interface BookingFormData {
    name: string;
    company: string;
    email: string;
    phone: string;
    preferredDate: string;
    preferredTime: string;
    meetingType: 'online' | 'offline';
    notes?: string;
}

export async function POST(request: NextRequest) {
    try {
        const body: BookingFormData = await request.json();

        // Validate required fields
        const requiredFields = ['name', 'company', 'email', 'phone', 'preferredDate', 'preferredTime', 'meetingType'];
        for (const field of requiredFields) {
            if (!body[field as keyof BookingFormData]) {
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

        // Validate meeting type
        if (!['online', 'offline'].includes(body.meetingType)) {
            return NextResponse.json(
                { error: 'Invalid meeting type' },
                { status: 400 }
            );
        }

        // In production, you would:
        // 1. Check calendar availability
        // 2. Create calendar event
        // 3. Save to database
        // 4. Send confirmation emails
        // 5. Create CRM activity

        console.log('[Booking Form] New booking:', {
            name: body.name,
            company: body.company,
            email: body.email,
            phone: body.phone,
            preferredDate: body.preferredDate,
            preferredTime: body.preferredTime,
            meetingType: body.meetingType,
            timestamp: new Date().toISOString(),
        });

        // Simulate processing delay
        await new Promise((resolve) => setTimeout(resolve, 500));

        return NextResponse.json({
            success: true,
            message: 'Đặt lịch thành công! Chúng tôi sẽ xác nhận lịch hẹn qua email và điện thoại.',
            bookingId: `BOOK-${Date.now()}`,
            confirmedDate: body.preferredDate,
            confirmedTime: body.preferredTime,
        });
    } catch (error) {
        console.error('[API/Booking] Error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
