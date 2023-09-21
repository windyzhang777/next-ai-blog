import Navbar from "app/(shared)/Navbar";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Footer from "./(shared)/Footer";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Blog",
  description: "Blog built in Nextjs that uses AI auto generated content",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={openSans.className}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
