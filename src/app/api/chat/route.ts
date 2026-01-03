import { NextRequest, NextResponse } from 'next/server';
import { chat, ChatMessage } from '@/lib/ai';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { messages, userMessage } = body as {
            messages: ChatMessage[];
            userMessage: string;
        };

        if (!userMessage || typeof userMessage !== 'string') {
            return NextResponse.json(
                { error: 'Invalid message' },
                { status: 400 }
            );
        }

        const response = await chat(messages || [], userMessage);

        return NextResponse.json({
            success: true,
            message: response,
        });
    } catch (error) {
        console.error('[API/Chat] Error:', error);
        return NextResponse.json(
            {
                error: 'Internal server error',
                message: 'Xin lỗi, hệ thống đang bận. Vui lòng thử lại sau.'
            },
            { status: 500 }
        );
    }
}
