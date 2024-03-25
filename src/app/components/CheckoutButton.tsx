"use client";

import { Zap } from 'lucide-react';
import { checkout } from '../actions';
import { getStripe } from '@/stripe-singleton';

export default function CheckoutButton({
    credits
}: {
    credits: number
}) {
    return (
        <button onClick={async () => {
            const session = await checkout(credits);
            const stripe = await getStripe();
            await stripe?.redirectToCheckout({
                sessionId: session?.id as string
            });
        }} className="btn btn-primary w-full">
            <Zap />
            Get SurveySpark
        </button>
    )
}