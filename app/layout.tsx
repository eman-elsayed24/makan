import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({
  weight: ["300", "400", "500", "700", "800"],
  subsets: ["arabic", "latin"],
  variable: "--font-tajawal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "مكان | MAKAN",
  description: "منصة حجز المساحات المشتركة والمكاتب الذكية في السعودية",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ar" dir="rtl" className={`${tajawal.variable} antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
