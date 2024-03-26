import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Banknote, Home, LogOut, NotebookPen, Zap } from "lucide-react";
import { auth } from "@/auth";
import { PrismaClient } from "@prisma/client";
import Navbar from "./components/Navbar";

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
  return (
    <html lang="en" data-theme="surveyspark" className="scroll-smooth">
      <body className={poppins.className}>
        <Navbar />
        <div className="max-w-7xl mx-auto px-8">
          {children}
        </div>
      </body>
    </html>
  );
}
