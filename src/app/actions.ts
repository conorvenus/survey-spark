'use server';

import { auth } from "@/auth";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

async function checkout(credits: number) {
    const session = await auth();

    if (!session?.user) {
        return;
    }

    const prices: Record<number, string> = {
        50: process.env.BASIC_PLAN!
    }

    const price = prices[credits];

    if (!price) {
        return;
    }

    return stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        metadata: {
            user: session.user.id!,
            credits
        },
        line_items: [{
            price,
            quantity: 1
        }],
        mode: 'payment',
        success_url: `http://localhost:3000`,
        cancel_url: `http://localhost:3000`
    });
}

export { checkout };