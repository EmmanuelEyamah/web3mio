import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/ui/Header";
import { Footer } from "./components/ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web3mio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* bg-[#32325D] */}
      <body className={`${inter.className} bg-[#1D1B1B]`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
