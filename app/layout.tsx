import type { Metadata, Viewport } from "next";
import { Lexend_Deca } from "next/font/google";
import "./globals.css";
import { Header } from "@/ui/header/Header";
import { SpeedInsights } from "@vercel/speed-insights/next"


const LexendDeca = Lexend_Deca({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Couch Talk Counseling and Coaching",
  description: "Mental health counseling and coaching - Heal and grow through counseling, coaching, and groups. Meet Alicia Wimsatt, your new counselor, coach, and guide on your growth journey.",
};

export const viewport: Viewport = {
  themeColor: 'rgb(47, 47, 47)',
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={LexendDeca.className}>
        <Header />
        <SpeedInsights />
        {children}
      </body>
    </html>
  );
}
