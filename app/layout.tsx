// app/layout.tsx
import './globals.css';
import '@fontsource-variable/inter';
import type { Metadata } from 'next';

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased bg-background text-foreground min-h-screen relative overflow-x-hidden bg-mesh-1">
        {/* Global page background elements */}
        <div className="fixed inset-0 -z-10 pointer-events-none bg-gradient-mesh opacity-30" />
        <div className="fixed -bottom-[30%] -right-[30%] -z-10 w-[600px] h-[600px] rounded-full blur-3xl bg-primary/10 opacity-40" />
        <div className="fixed -top-[30%] -left-[30%] -z-10 w-[600px] h-[600px] rounded-full blur-3xl bg-secondary/10 opacity-40" />
        
        {children}
        
        {/* Add a subtle gradient overlay at the bottom for a modern look */}
        <div className="fixed bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent -z-10 pointer-events-none" />
      </body>
    </html>
  );
}
