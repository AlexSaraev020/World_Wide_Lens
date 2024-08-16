import type { Metadata } from "next";
import { Newsreader } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
const newsreader = Newsreader({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "World Wide Lens",
  description: "Stay informated in every second of your life!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {




  return (
    <html lang="en">
      <body className={'min-h-screen flex flex-col grayscale ' + newsreader.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
