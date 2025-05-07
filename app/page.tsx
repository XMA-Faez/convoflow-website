// app/page.tsx
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Industries from "@/components/Industries";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ConvoFlow - AI Calling Solutions for UAE Businesses",
  description:
    "Transform your sales process with AI-powered calling agents. Increase response rates, qualify leads, and book more meetings with natural-sounding UAE-based AI.",
  keywords:
    "AI sales, UAE calling agents, voice AI, lead qualification, sales automation",
  authors: [{ name: "ConvoFlow.ae" }],
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://convoflow.ae",
    title: "ConvoFlow - AI Calling Solutions for UAE Businesses",
    description: "Transform your sales process with AI-powered calling agents",
    siteName: "ConvoFlow",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ConvoFlow",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        {/* We're using the Industries component for now, but we also have 
            a test page available at /test for industry-specific demo calls */}
        <Industries />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
