import React from "react";
import AvatarGroup from "../reviews/AvatarGroup";
import { Check, Gift, Zap } from "lucide-react";
import Link from "next/link";

interface HeroProps {
    session: any;
}

export function Hero({session}: HeroProps) {
    return (
    <div className="hero h-screen pb-16">
        <div className="hero-content flex-col lg:flex-row-reverse gap-16 items-center justify-center">
            <div className="mockup-browser border border-base-300 flex-1">
                <div className="mockup-browser-toolbar">
                    <div className="input border border-base-300">
                        <p className="text-sm text-base-content pt-1">https://surveyspark.com</p>
                    </div>
                </div>
                <div className="flex justify-center px-4 py-32 border-t border-base-300">
                </div>
            </div>
            <div className="flex flex-col gap-6 flex-1">
                <h1 className="text-5xl font-bold">Let your ideas spark the perfect survey</h1>
                <p className="leading-6 text-lg">The AI powered survey generator with everything you need to get responses in minutes, <span className="relative text-secondary-content font-bold px-2 py-0.5">not hours.<span className="absolute bg-secondary rounded-md w-full h-full left-0 top-0 -z-10 -rotate-2"></span></span></p>
                <div className="flex flex-col my-4">
                    <div className="flex gap-4 items-center">
                        <Check className="text-primary" />
                        <span>Easy to use</span>
                    </div>
                    <div className="flex gap-4 items-center">
                        <Check className="text-primary" />
                        <span>Fast to ship</span>
                    </div>
                    <div className="flex gap-4 items-center">
                        <Check className="text-primary" />
                        <span>Open source</span>
                    </div>
                </div>
                <Link href={session?.user ? "/#pricing" : "/api/auth/signin"} className="btn btn-primary w-fit px-8">
                    <Zap />
                    Get SurveySpark
                </Link>
                <div className="flex items-center gap-2">
                    <Gift className="font-black text-primary" />
                    <p>
                        <span className="font-bold text-primary">50%</span> off all packages for the first 100 customers!
                    </p>
                </div>
                <AvatarGroup />
            </div>
        </div>
    </div>
    )
}
