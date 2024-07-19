import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/ui/Header";
import { Footer } from "./components/ui/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getServerSession } from "next-auth";

// import "@uploadthing/react/styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web3mio",
  description: "A porfolio website by web3mio",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en">
      {/* 32325D, 515175, E9ECEF, 3C3F43 */}
      <body className={`${inter.className} bg-[#32325D] overflow-x-hidden`}>
        <ToastContainer position="bottom-left" />
        <Header session={session} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
