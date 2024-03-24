import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Banknote, LogOut, Zap } from "lucide-react";
import { auth } from "@/auth";

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

  return (
    <html lang="en" data-theme="surveyspark" className="scroll-smooth">
      <body className={poppins.className}>
        <div className="navbar bg-base-100 max-w-7xl mx-auto py-4 px-8">
          <Link href={"/"} className="navbar-start font-bold gap-2 text-lg">
            <img src="/logo.svg" alt="SurveySpark" className="h-8 w-8" />
            SurveySpark
          </Link>
          <div className="navbar-end gap-4">
            {session?.user ? 
              <>
                <p className="flex gap-1 items-center text-lg text-primary font-bold">
                  <Banknote />
                  50 Credits
                </p>
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                      <img alt="Tailwind CSS Navbar component" src={session.user.image ?? ""} />
                    </div>
                  </div>
                  <ul tabIndex={0} className="menu menu-sm dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52">
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
