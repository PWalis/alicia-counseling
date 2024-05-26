import Image from "next/image";
import { Hero } from "@/ui/hero/Hero";
import { Quotes } from "@/ui/quotes/Quotes";
import { AboutMe } from "@/ui/aboutme/AboutMe";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Quotes />
      <AboutMe />
    </main>
  );
}
