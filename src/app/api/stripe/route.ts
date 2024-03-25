import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

async function POST(req: NextRequest) {
    const body = await req.text();
    const signature = req.headers.get('Stripe-Signature') ?? '';
    let event: Stripe.Event;
    
    try {
        event = Stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_KEY!);
    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 400 });
    }

    switch (event.type) {
        case 'checkout.session.completed':
            const completedSession = event.data.object as Stripe.Checkout.Session & {
                metadata: {
                    credits: string;
                    user: string;
                }
            }

            const credits = completedSession.metadata.credits;
            const user = completedSession.metadata.user;

            const prisma = new PrismaClient();
            await prisma.user.update({
                where: {
                    id: user
                },
                data: {
                    credits: {
                        increment: parseInt(credits)
                    }
                }
            });
    }
    return NextResponse.json(null, { status: 200 });
}

export { POST };