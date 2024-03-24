import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Zap } from "lucide-react";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title: "SurveySpark",
  description: "⚡ Let your ideas spark the perfect survey!",
  icons: {
    icon: "/favicon.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="surveyspark" className="scroll-smooth">
      <body className={poppins.className}>
        <div className="navbar bg-base-100 max-w-7xl mx-auto py-4 px-8">
          <Link href={"/"} className="navbar-start font-bold gap-2 text-lg">
            <img src="/logo.svg" alt="SurveySpark" className="h-8 w-8" />
            SurveySpark
          </Link>
          <div className="navbar-end">
            <button className="btn btn-primary">
              <Zap />
              Get SurveySpark
            </button>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-8">
          {children}
        </div>
      </body>
    </html>
  );
}
