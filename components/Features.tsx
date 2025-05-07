// components/Features.tsx
"use client";

import React from "react";
import {
  Phone,
  MessageSquare,
  Globe,
  Zap,
  Users,
  Radio,
  Check,
  LucideIcon,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

// Feature Card Component
interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: string[];
  index: number;
  isPrimary?: boolean;
}

const FeatureCard = ({ icon: Icon, title, description, benefits, index, isPrimary }: FeatureCardProps) => {
  const baseDelay = 0.1 + (index * 0.1);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: baseDelay }}
    >
      <Card 
        variant={isPrimary ? "gradient" : "glass"} 
        isHoverable={true}
        className={`h-full transition-all duration-500 ${isPrimary ? 'z-10 scale-105' : ''}`}
      >
        <CardHeader>
          <div className="flex items-start gap-4">
            <motion.div 
              className={`rounded-xl ${isPrimary ? 'bg-gradient-main' : 'bg-card border border-white/10'} p-3 shadow-lg`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Icon className="h-5 w-5 text-white" />
            </motion.div>
            <div>
              <CardTitle 
                gradient={isPrimary} 
                size={isPrimary ? "lg" : "default"}
              >
                {title}
              </CardTitle>
              <motion.div 
                className={`h-0.5 w-0 mt-2 ${isPrimary ? 'bg-gradient-main' : 'bg-primary'}`}
                initial={{ width: 0 }}
                whileInView={{ width: "40%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: baseDelay + 0.2 }}
              />
            </div>
          </div>
        </CardHeader>
        
        <CardContent>
          <CardDescription 
            className="mb-4"
            size={isPrimary ? "lg" : "default"}
            muted={!isPrimary}
          >
            {description}
          </CardDescription>
          
          <ul className="space-y-2">
            {benefits.map((benefit, i) => (
              <motion.li 
                key={i}
                className="flex items-start gap-2 text-sm"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: baseDelay + 0.2 + (i * 0.1) }}
              >
                <Check className={`h-4 w-4 mt-0.5 ${isPrimary ? 'text-white' : 'text-primary'}`} />
                <span className={isPrimary ? 'text-white' : 'text-muted-foreground'}>
                  {benefit}
                </span>
              </motion.li>
            ))}
          </ul>
        </CardContent>
        
        <CardFooter className="pt-3">
          <Button 
            asChild 
            variant={isPrimary ? "default" : "outline"}
            size="sm"
            className={`group ${isPrimary ? 'w-full justify-center' : ''}`}
          >
            <Link href="#contact">
              <span>{isPrimary ? 'Get Started' : 'Learn More'}</span>
              <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

// Feature data with benefits
const FEATURES = [
  {
    icon: Phone,
    title: "UAE Phone Numbers",
    description:
      "Local presence with UAE numbers increases answer rates and builds immediate trust with prospects.",
    benefits: [
      "Calls from local UAE area codes",
      "Higher response rates than international numbers",
      "Improved customer trust from first contact"
    ],
    isPrimary: false
  },
  {
    icon: MessageSquare,
    title: "Natural Voice Technology",
    description:
      "Our AI agents sound remarkably human with natural speech patterns and conversational intelligence.",
    benefits: [
      "Indistinguishable from human callers",
      "Natural conversation flow with pauses and intonation",
      "Personalized voice styles to match your brand"
    ],
    isPrimary: false
  },
  {
    icon: Globe,
    title: "75+ Languages",
    description:
      "Communicate with clients in their preferred language, including Arabic, English, Hindi, and Russian.",
    benefits: [
      "Native-level fluency in all major languages",
      "Cultural nuances and regional dialects",
      "Seamless language switching during calls"
    ],
    isPrimary: false
  },
  {
    icon: Zap,
    title: "200 Simultaneous Calls",
    description:
      "Scale your outreach instantly with the ability to handle hundreds of conversations simultaneously.",
    benefits: [
      "Make a week's worth of calls in hours",
      "No capacity limitations during peak times",
      "Predictable pricing even at high volumes"
    ],
    isPrimary: false
  },
  {
    icon: Users,
    title: "Voice Cloning",
    description:
      "Clone your own voice or create a custom voice that represents your brand perfectly.",
    benefits: [
      "Use your top performer's voice for all calls",
      "Consistent brand representation",
      "Quick turnaround on new voice creation"
    ],
    isPrimary: false
  },
  {
    icon: Radio,
    title: "WhatsApp Integration",
    description:
      "Seamless follow-up through WhatsApp after calls to maintain engagement with prospects.",
    benefits: [
      "Automatic follow-up messages after calls",
      "Send documents and media to prospects",
      "Continue conversations on preferred channels"
    ],
    isPrimary: false
  },
];

// Stats data
const STATS = [
  { value: "300%", label: "More Conversations", color: "primary" },
  { value: "80%", label: "Less Wasted Time", color: "secondary" },
  { value: "45%", label: "Higher Booking Rate", color: "accent" },
  { value: "24/7", label: "Availability", color: "white" },
];

export default function Features() {
  return (
    <section id="features" className="pt-32 pb-32 relative overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 top-[-2px]" style={{
        background: "linear-gradient(to bottom, #053345 0%, rgba(19,12,37,0.9) 20%, rgba(15,10,30,0.95) 100%)"
      }} />
      
      {/* Subtle texture */}
      <div className="absolute inset-0 bg-grid opacity-3" />
      
      {/* Subtle radial glow effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full radial-gradient opacity-10" 
           style={{background: "radial-gradient(circle, rgba(0,255,255,0.1) 0%, transparent 70%)"}} />
      
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full radial-gradient opacity-8"
           style={{background: "radial-gradient(circle, rgba(138,43,226,0.08) 0%, transparent 70%)"}} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mb-20 max-w-3xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 mr-1.5" />
            Cutting-Edge Features
          </motion.div>
          
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Meet Your New{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-main">AI Sales Team</span>
              <motion.div 
                className="absolute -bottom-1 left-0 w-full h-[3px]"
                style={{ background: "linear-gradient(90deg, #FF4D8D, #8A2BE2)" }}
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }} 
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            UAE's most advanced AI calling system that delivers human-like conversations, 
            scales your outreach, and converts more leads than traditional sales teams.
          </motion.p>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="glass-card rounded-xl border border-white/10 shadow-lg p-5 grid grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto"
          >
            {STATS.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center relative"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 20, 
                  delay: 0.3 + index * 0.1 
                }}
              >
                <div className={`text-${stat.color} font-bold text-3xl mb-1 animate-pulse-slow`}>
                  {stat.value}
                </div>
                <div className="text-sm text-white/80">{stat.label}</div>
                
                {/* Decorative line below */}
                <motion.div 
                  className={`h-0.5 w-12 mx-auto mt-2 bg-${stat.color}/40`}
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {FEATURES.map((feature, index) => (
            <FeatureCard 
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              benefits={feature.benefits}
              index={index}
              isPrimary={feature.isPrimary}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          className="mt-20 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="glass-card p-8 rounded-2xl border border-white/10 shadow-lg">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-glow">
              Ready to Transform Your Sales Process?
            </h3>
            <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
              Get a personalized demo of our AI calling solution and see how it can help your business convert more leads.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                variant="gradient" 
                size="lg" 
                className="px-8 shadow-lg"
              >
                <Link href="#demo" className="flex items-center">
                  <Sparkles className="mr-2 h-4 w-4" />
                  <span>Get a Demo Call</span>
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline-glow" 
                size="lg"
                className="group"
              >
                <Link href="#contact" className="flex items-center">
                  <span>Schedule Consultation</span>
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
