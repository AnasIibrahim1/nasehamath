import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/ui/Header";
import HeaderV2 from "@/components/ui/Header-v2";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Naseehamath - تعليم الرياضيات بسهولة",
  description: "منصة عربية لتعلم الرياضيات بأسلوب مبسط وتمارين تفاعلية.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`bg-background text-foreground font-sans antialiased`}>
        <HeaderV2 />
        {/* <Header /> */}
        <main>
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
