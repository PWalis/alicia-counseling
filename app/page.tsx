import Image from "next/image";
import { Hero } from "@/ui/hero/Hero";
import { Quotes } from "@/ui/quotes/Quotes";
import { AboutMe } from "@/ui/aboutme/AboutMe";
import { ClinicalApproach } from "@/ui/clinicalApproach/ClinicalApproach";
import { Services } from "@/ui/services/Services";
import { Pricing } from "@/ui/pricing/Pricing";
import { FAQ } from "@/ui/faq/FAQ";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Quotes />
      <AboutMe />
      <ClinicalApproach />
      <Services />
      <Pricing />
      <FAQ />
    </main>
  );
}
