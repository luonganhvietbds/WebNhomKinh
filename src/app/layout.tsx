import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/layout";
import { AIChatbot } from "@/components/chat";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: "AluGlass - Giải pháp nhôm kính công trình quy mô lớn",
  description: "Đối tác kỹ thuật hàng đầu trong lĩnh vực nhôm kính cho công trình quy mô lớn. Cung cấp giải pháp cửa nhôm, vách kính, mặt dựng curtain wall cho cao ốc, trung tâm thương mại, khách sạn.",
  keywords: ["nhôm kính", "curtain wall", "vách kính", "cửa nhôm", "công trình", "B2B", "nhà thầu"],
  authors: [{ name: "AluGlass" }],
  openGraph: {
    title: "AluGlass - Giải pháp nhôm kính công trình quy mô lớn",
    description: "Đối tác kỹ thuật hàng đầu trong lĩnh vực nhôm kính cho công trình quy mô lớn",
    type: "website",
    locale: "vi_VN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <AIChatbot />
      </body>
    </html>
  );
}

