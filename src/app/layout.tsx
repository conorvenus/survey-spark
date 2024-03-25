import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Banknote, Home, LogOut, NotebookPen, Zap } from "lucide-react";
import { auth } from "@/auth";
import { PrismaClient } from "@prisma/client";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title: "SurveySpark",
  description: "⚡ Let your ideas spark the perfect survey!",
  icons: {
    icon: "/favicon.svg",
  }
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  let user;

  if (session?.user) {
    const prisma = new PrismaClient();
    user = await prisma.user.findUnique({
      where: {
        id: session?.user?.id,
      },
      select: {
        credits: true,
      },
    });
  }

  return (
    <html lang="en" data-theme="surveyspark" className="scroll-smooth">
      <body className={poppins.className}>
        <div className="navbar bg-base-100 max-w-7xl mx-auto py-4 px-8">
          <Link href={"/"} className="navbar-start font-bold gap-2 text-lg">
            <img src="/logo.svg" alt="SurveySpark" className="h-8 w-8" />
            <span className="md:block hidden">SurveySpark</span>
          </Link>
          {session?.user && (
            <div className="navbar-center gap-6 md:gap-12 font-medium">
              <Link href={"/"} className="text-primary flex font-bold items-center gap-2 relative after:absolute after:w-full after:h-1 after:-bottom-3 after:bg-primary after:rounded-full"><Home className="w-5 h-5" /> Home</Link>
              <Link href={"/surveys"} className="flex items-center gap-2"><NotebookPen className="w-5 h-5" /> Surveys</Link>
            </div>
          )}
          <div className="navbar-end gap-2 md:gap-4">
            {session?.user ? 
              <>
                <p className="gap-1 items-center text-lg text-primary font-bold md:flex hidden">
                  <Banknote />
                  {user?.credits} Credits
                </p>
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                      <img alt="Tailwind CSS Navbar component" src={session.user.image ?? ""} />
                    </div>
                  </div>
                  <ul tabIndex={0} className="menu menu-sm dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                      <p className="flex gap-1 items-center text-lg text-primary font-bold md:hidden">
                        <Banknote />
                        {user?.credits} Credits
                      </p>
                    </li>
                    <li>
                      <Link href={"/api/auth/signout"} className="btn btn-primary">
                        <LogOut />
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              </> : 
              <>
                <Link href={"/api/auth/signin"} className="btn btn-primary">
                  <Zap />
                  Get SurveySpark
                </Link>
              </>
            }
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-8">
          {children}
        </div>
      </body>
    </html>
  );
}
