// components/Industries.tsx
"use client";

import React, { useState } from 'react';
import { 
  Building, 
  Heart, 
  Briefcase, 
  ChevronRight, 
  CheckCircle, 
  PhoneCall, 
  Sparkles, 
  Globe,
  MessageSquare,
  BarChart4,
  ArrowRight,
  Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { SlideUp, FadeIn } from '@/components/ui/motion';
import Link from 'next/link';

const industryIcons = {
  realEstate: Building,
  healthcare: Heart,
  recruitment: Briefcase,
};

// Enhanced industry data with more details and metrics
const industries = [
  {
    id: "real-estate",
    icon: Building,
    title: "Real Estate",
    subtitle: "Sell More Properties, Faster",
    description: "Never miss a high-value property inquiry again. Our AI agents qualify buyers and schedule viewings 24/7.",
    benefits: [
      "Answer 100% of property inquiries within seconds",
      "Qualify buyers based on budget and requirements",
      "Schedule viewings directly into your calendar",
      "Transfer hot leads instantly to your agents"
    ],
    metrics: [
      { value: "3x", label: "More Leads Engaged", color: "primary" },
      { value: "65%", label: "Faster Response Time", color: "secondary" },
      { value: "40%", label: "More Showings Booked", color: "accent" }
    ],
    caseStudy: {
      company: "Dubai Property Group",
      result: "Increased monthly qualified leads by 215% and doubled conversion rates"
    },
    features: [
      { icon: PhoneCall, title: "24/7 Inquiry Handling" },
      { icon: Globe, title: "Multi-language Support" },
      { icon: MessageSquare, title: "WhatsApp Integration" }
    ],
    testimonial: {
      quote: "Our agents now focus only on qualified buyers, increasing our sales velocity while reducing costs.",
      author: "Mohammed A., Sales Director",
      company: "Leading Dubai Real Estate Agency"
    },
    cta: "Boost Your Property Sales"
  },
  {
    id: "healthcare",
    icon: Heart,
    title: "Healthcare",
    subtitle: "Streamline Patient Scheduling",
    description: "Patient scheduling made effortless. Our medical AI assistants book appointments, gather initial information, and reduce no-shows.",
    benefits: [
      "Book appointments without wait times",
      "Send appointment reminders via WhatsApp",
      "Gather initial symptom information",
      "Reduce no-shows by 75%"
    ],
    metrics: [
      { value: "40%", label: "Fewer No-Shows", color: "primary" },
      { value: "85%", label: "Automated Rebookings", color: "secondary" },
      { value: "24/7", label: "Appointment Booking", color: "accent" }
    ],
    caseStudy: {
      company: "MedLife Clinics",
      result: "Reduced administrative costs by 30% while increasing appointment capacity"
    },
    features: [
      { icon: PhoneCall, title: "Intelligent Scheduling" },
      { icon: MessageSquare, title: "Pre-appointment Data Collection" },
      { icon: BarChart4, title: "Capacity Optimization" }
    ],
    testimonial: {
      quote: "Our reception staff now spend more time caring for patients instead of answering routine calls.",
      author: "Dr. Sarah K.",
      company: "Medical Director, Abu Dhabi Health Network"
    },
    cta: "Streamline Your Patient Flow"
  },
  {
    id: "recruitment",
    icon: Briefcase,
    title: "Recruitment",
    subtitle: "Scale Your Candidate Outreach",
    description: "Screen more candidates in less time. Our AI recruiters assess qualifications, answer common questions, and schedule interviews.",
    benefits: [
      "Pre-screen hundreds of candidates daily", 
      "Assess qualifications based on your requirements",
      "Schedule interviews only with qualified candidates",
      "Provide detailed candidate summaries with scores"
    ],
    metrics: [
      { value: "85%", label: "Reduction in Screening Time", color: "primary" },
      { value: "4x", label: "More Candidates Evaluated", color: "secondary" },
      { value: "60%", label: "Higher Quality Hires", color: "accent" }
    ],
    caseStudy: {
      company: "Talent Seekers UAE",
      result: "Doubled placement rate while reducing screening costs by 45%"
    },
    features: [
      { icon: Zap, title: "High-Volume Processing" },
      { icon: CheckCircle, title: "Custom Qualification Rules" },
      { icon: BarChart4, title: "Advanced Analytics" }
    ],
    testimonial: {
      quote: "We've completely transformed our recruitment process. Our recruiters now only speak with pre-qualified candidates.",
      author: "Fatima R.",
      company: "Head of Talent Acquisition, Global Tech Firm"
    },
    cta: "Upgrade Your Recruitment"
  }
];

export default function Industries() {
  const [activeTab, setActiveTab] = useState("real-estate");
  
  // Helper to get the active industry
  const getActiveIndustry = () => {
    return industries.find(ind => ind.id === activeTab);
  };
  
  return (
    <section id="industries" className="py-24 md:py-32 relative overflow-hidden bg-gradient-dark">
      {/* Background elements */}
      <div className="absolute inset-0 bg-mesh-1 opacity-50" />
      <div className="absolute inset-0 bg-dots opacity-10" />
      
      <motion.div 
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl bg-primary/5 opacity-40"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      <motion.div 
        className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-3xl bg-secondary/5 opacity-30"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-secondary/10 text-secondary border border-secondary/20 backdrop-blur-sm mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 mr-1.5" />
            Industry-Specific Solutions
          </motion.div>
          
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Tailored for <span className="text-transparent bg-clip-text bg-gradient-main relative">
              Your Industry
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
            See how ConvoFlow's AI calling solutions adapt to your specific business needs and solve your industry's unique challenges.
          </motion.p>
        </div>
        
        {/* Industry tab indicators */}
        <div className="mb-12 md:mb-20">
          {/* Mobile dropdown with enhanced styling */}
          <div className="lg:hidden w-full max-w-md mx-auto">
            <select 
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
              className="w-full h-14 bg-card/60 backdrop-blur-sm border border-white/10 rounded-xl pl-4 pr-10 py-3 text-foreground focus:outline-none focus:ring-2 focus:border-primary/30 focus:ring-primary/20 shadow-lg appearance-none"
              style={{backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23FF4D8D' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 1rem center", backgroundSize: "1.5em 1.5em"}}
            >
              {industries.map(industry => (
                <option 
                  key={industry.id} 
                  value={industry.id}
                >
                  {industry.title} - {industry.subtitle}
                </option>
              ))}
            </select>
          </div>
          
          {/* Desktop tabs with enhanced styling */}
          <motion.div 
            className="hidden lg:flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {industries.map((industry, index) => {
              const isActive = activeTab === industry.id;
              
              return (
                <motion.div
                  key={industry.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                  className="relative mx-1 sm:mx-2"
                >
                  <Button
                    onClick={() => setActiveTab(industry.id)}
                    variant={isActive ? "gradient" : "outline-glow"}
                    size="lg"
                    className={`relative transition-all duration-300 px-4 sm:px-6 ${isActive ? 'shadow-primary/20' : ''}`}
                  >
                    <div className="flex items-center">
                      <industry.icon className={`w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2 ${isActive ? 'text-white' : 'text-white/80'}`} />
                      <span className="text-sm sm:text-base">{industry.title}</span>
                    </div>
                  </Button>
                  
                  {/* Active indicator line */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeIndustryTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-main rounded-full mx-2 mt-2"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
        
        {/* Content for selected industry - Enhanced layout */}
        <AnimatePresence mode="wait">
          {industries.map(industry => {
            if (activeTab !== industry.id) return null;
            
            return (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start"
              >
                {/* Content - Left side */}
                <motion.div className="lg:col-span-5 relative mb-10 lg:mb-0">
                  {/* Header with icon and title */}
                  <motion.div 
                    className="flex items-center mb-6 md:mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Icon with animated gradient background */}
                    <motion.div 
                      className="h-14 w-14 md:h-16 md:w-16 rounded-xl bg-gradient-main p-3 md:p-3.5 mr-4 md:mr-5 shadow-lg relative overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {/* Animated gradient overlay */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-tr from-primary/50 to-secondary/50 opacity-80"
                        animate={{ 
                          background: [
                            "linear-gradient(to top right, rgba(255,77,141,0.5), rgba(138,43,226,0.5))", 
                            "linear-gradient(to bottom right, rgba(255,77,141,0.5), rgba(138,43,226,0.5))",
                            "linear-gradient(to top right, rgba(255,77,141,0.5), rgba(138,43,226,0.5))"
                          ]
                        }}
                        transition={{ duration: 8, repeat: Infinity }}
                      />
                      
                      <industry.icon className="h-full w-full text-white relative z-10" />
                    </motion.div>
                    
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground">{industry.title}</h3>
                      <p className="text-secondary mt-1 text-base md:text-lg">{industry.subtitle}</p>
                    </div>
                  </motion.div>
                  
                  {/* Description */}
                  <motion.p 
                    className="text-white/90 mb-6 md:mb-8 text-base md:text-lg leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    {industry.description}
                  </motion.p>
                  
                  {/* Metrics row */}
                  <motion.div
                    className="grid grid-cols-3 gap-2 sm:gap-3 mb-6 md:mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {industry.metrics.map((metric, i) => (
                      <Card 
                        key={metric.label} 
                        variant="glass"
                        className="p-2 sm:p-3 text-center relative"
                      >
                        {/* Animated dot indicator */}
                        <motion.div 
                          className={`absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-${metric.color}`}
                          animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                        />
                        
                        <motion.div 
                          className={`text-${metric.color} font-bold text-xl sm:text-2xl animate-pulse-slow`}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: 0.3 + (i * 0.1) }}
                        >
                          {metric.value}
                        </motion.div>
                        <div className="text-xs text-white/70 mt-0.5 sm:mt-1">{metric.label}</div>
                      </Card>
                    ))}
                  </motion.div>
                  
                  {/* Benefits list */}
                  <motion.div 
                    className="space-y-3 md:space-y-4 mb-8 md:mb-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <h4 className="text-base md:text-lg font-semibold text-white mb-2">Key Benefits</h4>
                    <Card variant="glass" className="p-4 md:p-5">
                      {industry.benefits.map((benefit, i) => (
                        <motion.div 
                          key={benefit} 
                          className="flex items-start mb-3 md:mb-4 last:mb-0"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                        >
                          <div className="rounded-full bg-gradient-main p-1 text-white mr-3 flex-shrink-0 mt-0.5 shadow-glow">
                            <CheckCircle className="h-4 w-4" />
                          </div>
                          <span className="text-white">{benefit}</span>
                        </motion.div>
                      ))}
                    </Card>
                  </motion.div>
                  
                  {/* Testimonial */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mb-6 md:mb-8"
                  >
                    <Card variant="bordered" className="p-4 md:p-5 relative">
                      {/* Quote icon */}
                      <div className="absolute -top-3 -left-3 bg-gradient-main rounded-full p-2 shadow-lg">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 11L8 17H5L7 11V7H10V11ZM18 11L16 17H13L15 11V7H18V11Z" fill="white" />
                        </svg>
                      </div>
                      
                      <p className="text-white/90 italic mb-3 pl-3">{industry.testimonial.quote}</p>
                      <div className="flex justify-end">
                        <div className="text-right">
                          <p className="text-white font-medium">{industry.testimonial.author}</p>
                          <p className="text-white/70 text-sm">{industry.testimonial.company}</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                  
                  {/* CTA Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-8 md:mt-10"
                  >
                    <Button 
                      asChild 
                      variant="glow" 
                      size="lg" 
                      className="w-full justify-center group"
                    >
                      <Link href="#contact">
                        <span>{industry.cta}</span>
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </motion.div>
                </motion.div>
                
                {/* Right side with image and features */}
                <div className="lg:col-span-7 overflow-hidden">
                  {/* Main visualization */}
                  <motion.div 
                    className="relative mb-8 md:mb-10"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {/* Decorative elements - Top */}
                    <motion.div 
                      className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full opacity-70 blur-xl z-0"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.7, 0.5],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    />
                    
                    {/* Image with effect wrapper */}
                    <motion.div
                      className="relative z-10 rounded-2xl overflow-hidden shadow-2xl glow-border"
                      whileHover={{ 
                        y: -10,
                        transition: { duration: 0.4, type: "spring", stiffness: 300, damping: 15 }
                      }}
                    >
                      {/* Feature badge - Top right */}
                      <motion.div
                        className="absolute top-4 right-4 z-20 flex space-x-2"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.4 }}
                      >
                        <div className="px-3 py-1 rounded-full text-xs font-medium glass-card border border-white/10 text-white shadow-lg backdrop-blur-md">
                          {industry.features[0].title}
                        </div>
                        <div className="px-3 py-1 rounded-full text-xs font-medium bg-primary/80 text-white shadow-lg">
                          {industry.features[1].title}
                        </div>
                      </motion.div>
                      
                      {/* Main image */}
                      <div className="relative">
                        <img 
                          src={`/images/${industry.id}.webp`} 
                          alt={`${industry.title} AI calling solution`}
                          className="w-full h-auto object-cover aspect-video"
                        />
                        
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
                        
                        {/* Stats overlay at bottom */}
                        <div className="absolute bottom-0 left-0 right-0 p-5">
                          <div className="glass-card rounded-xl border border-white/10 shadow-lg p-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-1">
                                <div className="text-sm text-white/70">Success Rate</div>
                                <div className="font-bold text-xl text-white">
                                  {industry.id === "real-estate" ? "92%" : industry.id === "healthcare" ? "88%" : "95%"}
                                </div>
                              </div>
                              <div className="space-y-1">
                                <div className="text-sm text-white/70">Cost Savings</div>
                                <div className="font-bold text-xl text-white">
                                  {industry.id === "real-estate" ? "45%" : industry.id === "healthcare" ? "35%" : "40%"}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                    
                    {/* Case Study label */}
                    <motion.div 
                      className="absolute -right-6 top-1/4 rotate-90 origin-left"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8, duration: 0.6 }}
                    >
                      <div className="flex items-center bg-card/80 backdrop-blur-sm shadow-lg rounded-full py-1 px-3 border border-white/10">
                        <div className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse-slow" />
                        <span className="text-xs font-medium text-white">Case Study</span>
                      </div>
                    </motion.div>
                  </motion.div>
                  
                  {/* Feature boxes */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 mb-6">
                      {industry.features.map((feature, i) => (
                        <motion.div
                          key={feature.title}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.6 + (i * 0.1) }}
                        >
                          <Card 
                            variant={i === 1 ? "gradient" : "glass"} 
                            className="p-3 md:p-4 h-full"
                          >
                            <div className="flex items-center">
                              <div className={`rounded-full ${i === 1 ? 'bg-white/20' : 'bg-primary/20'} p-2 mr-3`}>
                                <feature.icon className={`h-5 w-5 ${i === 1 ? 'text-white' : 'text-primary'}`} />
                              </div>
                              <div className={`font-medium ${i === 1 ? 'text-white' : 'text-foreground'}`}>
                                {feature.title}
                              </div>
                            </div>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Case study results */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                    >
                      <Card variant="bordered" className="p-5">
                        <div className="text-xs text-primary font-semibold tracking-wider uppercase mb-2">
                          Case Study: {industry.caseStudy.company}
                        </div>
                        <div className="text-white font-medium flex items-center">
                          <Zap className="h-4 w-4 mr-2 text-primary" />
                          Result: {industry.caseStudy.result}
                        </div>
                      </Card>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
}
