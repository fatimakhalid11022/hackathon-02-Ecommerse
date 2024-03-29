import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/componentsbyme/Header";
import Footer from "@/componentsbyme/footer";
import Baseline from "@/componentsbyme/baseline";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Commerce App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header />
        {children}
        <Footer/>
    <Baseline/>
    </body>
    </html>
  );
}
