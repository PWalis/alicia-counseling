import type { Metadata } from "next";
import { Lexend_Deca } from "next/font/google";
import "./globals.css";
import { Header } from "@/ui/header/Header"

const LexendDeca = Lexend_Deca({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Couch Talk Counseling and Coaching",
  description: "Mental health counseling and coaching",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={LexendDeca.className}>
        <Header /> 
        {children}<p className="fixed bottom-0 pl-3 text-center bg-white z-50 w-full text-gray-600 py-1">In case of emergency please call 988</p></body>
    </html>
  );
}
