import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
title: {
    default: "Smile Neon Club | VR та дитячі свята Обухів",
    template: "%s | Smile Neon Club" 
  },
  description: "Найкращий VR-клуб в Обухові. Простір для дитячих днів народжень, ігрові симулятори та неон, VR Обухів, аніматор Обухів, день народення Обухів, ігри Обухів, аерохокей Обухів, квест Обухів, свято, корпоратив. Смайл. Smile Neon Club.",
  verification: {
    google: "XzspQdjk_xyYsAiCYV66nlnmXBrsCQh8-HmkqihijTU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uk"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header
         />

        <main className="pt-20 flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
