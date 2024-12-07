import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Heading from "@/components/Heading";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Exclusive",
  description: "Figma Template to nextjs", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Heading />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
