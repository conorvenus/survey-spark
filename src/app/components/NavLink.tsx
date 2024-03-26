"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavLink({
    children,
    href
}: {
    children: React.ReactNode
    href: string
}) {
    const pathname = usePathname()

    return (
        <Link href={href} className={`flex font-bold items-center gap-2 relative ${pathname === href && 'text-primary after:absolute after:w-full after:h-1 after:-bottom-3 after:bg-primary after:rounded-full'}`}>{children}</Link>
    )
}