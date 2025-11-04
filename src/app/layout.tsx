import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/ui/Header";

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
      <body className={`bg-background text-foreground font-sans antialiased min-h-[1000vh]`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
