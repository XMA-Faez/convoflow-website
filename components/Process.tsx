// components/Process.tsx
"use client";

import React from "react";
import { 
  Settings,
  Phone, 
  UserCheck, 
  MessageSquare, 
  Zap, 
  Database, 
  Headset, 
  ArrowRight, 
  ChevronRight,
  Sparkles
} from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SlideUp, FadeIn } from "@/components/ui/motion";
import Link from "next/link";

// Enhanced process steps with more details
const processSteps = [
  {
    icon: Settings,
    title: "Easy Setup",
    subtitle: "Day 1",
    description:
      "Custom configuration with your UAE phone numbers, voice preferences, and qualification criteria.",
    details: [
      "Connect your phone numbers in minutes",
      "Select from multiple voice options",
      "Define your lead qualification parameters"
    ],
    color: "primary"
  },
  {
    icon: Phone,
    title: "AI Makes Calls",
    subtitle: "Days 2-3",
    description:
      "Our system handles outbound calls to your lead list or answers incoming inquiries 24/7.",
    details: [
      "Handle 200+ simultaneous conversations",
      "Use your customer data for personalization",
      "Route calls 24/7 without any downtime"
    ],
    color: "secondary"
  },
  {
    icon: UserCheck,
    title: "Scale Results",
    subtitle: "Day 4 Onwards",
    description:
      "Qualified leads are scheduled directly into your calendar or transferred live to your sales team.",
    details: [
      "Real-time live call transfers to your team",
      "Direct calendar integration for appointments",
      "Detailed reporting on all conversation outcomes"
    ],
    color: "accent"
  },
];

// Additional integration details
const integrations = [
  { name: "CRM", icon: Database, description: "Sync with your existing CRM system" },
  { name: "Calendar", icon: MessageSquare, description: "Automated appointment scheduling" },
  { name: "Phone Systems", icon: Headset, description: "Connect to your existing phone infrastructure" },
  { name: "Analytics", icon: Zap, description: "Track performance and ROI in real-time" }
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 relative overflow-hidden bg-gradient-dark">
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent border border-accent/20 backdrop-blur-sm mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 mr-1.5" />
            Implementation Process
          </motion.div>
          
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Simple Setup, {" "}
            <span className="text-transparent bg-clip-text bg-gradient-main relative">
              Powerful Results
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
            Fast implementation with no complex integrations required. Get up and running in days, not weeks.
          </motion.p>
        </div>

        {/* Modern mobile horizontal timeline for small screens */}
        <div className="lg:hidden mb-12 md:mb-20">
          <div className="relative px-4">
            {/* Timeline connection line - Mobile */}
            <div className="absolute top-0 left-8 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent opacity-30"/>
            
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="mb-10 sm:mb-16 last:mb-0 relative pl-16"
              >
                {/* Step number with animated circle */}
                {index === 0 ? (
                  <motion.div
                    className="absolute left-0 top-0 h-14 sm:h-16 w-14 sm:w-16 rounded-full bg-primary/10 backdrop-blur-sm border border-white/10 flex items-center justify-center z-10"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  >
                    <div className="h-8 sm:h-10 w-8 sm:w-10 rounded-full bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center text-white font-bold shadow-lg">
                      {index + 1}
                    </div>
                  </motion.div>
                ) : index === 1 ? (
                  <motion.div
                    className="absolute left-0 top-0 h-14 sm:h-16 w-14 sm:w-16 rounded-full bg-secondary/10 backdrop-blur-sm border border-white/10 flex items-center justify-center z-10"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  >
                    <div className="h-8 sm:h-10 w-8 sm:w-10 rounded-full bg-gradient-to-r from-secondary to-secondary/80 flex items-center justify-center text-white font-bold shadow-lg">
                      {index + 1}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    className="absolute left-0 top-0 h-14 sm:h-16 w-14 sm:w-16 rounded-full bg-accent/10 backdrop-blur-sm border border-white/10 flex items-center justify-center z-10"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  >
                    <div className="h-8 sm:h-10 w-8 sm:w-10 rounded-full bg-gradient-to-r from-accent to-accent/80 flex items-center justify-center text-white font-bold shadow-lg">
                      {index + 1}
                    </div>
                  </motion.div>
                )}
                
                {index === 0 ? (
                  <Card 
                    variant="glass" 
                    className="border border-white/10 hover:border-primary/50 transition-all duration-300"
                  >
                    <CardContent className="p-4 sm:p-5">
                      <div className="mb-4">
                        <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">
                          {step.subtitle}
                        </div>
                        <h3 className="text-lg sm:text-xl text-primary font-bold mb-2">
                          {step.title}
                        </h3>
                        <p className="text-white/80 text-sm sm:text-base">
                          {step.description}
                        </p>
                      </div>
                      
                      <div className="space-y-2 mt-4 pl-1">
                        {step.details.map((detail, i) => (
                          <motion.div 
                            key={i}
                            initial={{ opacity: 0, x: -5 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.3 + (i * 0.1) }}
                            className="flex items-start text-xs sm:text-sm"
                          >
                            <div className="mr-2 mt-0.5 text-primary/70">
                              <ChevronRight className="h-3 w-3" />
                            </div>
                            <span className="text-white/70">{detail}</span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ) : index === 1 ? (
                  <Card 
                    variant="glass" 
                    className="border border-white/10 hover:border-secondary/50 transition-all duration-300"
                  >
                    <CardContent className="p-4 sm:p-5">
                      <div className="mb-4">
                        <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">
                          {step.subtitle}
                        </div>
                        <h3 className="text-lg sm:text-xl text-secondary font-bold mb-2">
                          {step.title}
                        </h3>
                        <p className="text-white/80 text-sm sm:text-base">
                          {step.description}
                        </p>
                      </div>
                      
                      <div className="space-y-2 mt-4 pl-1">
                        {step.details.map((detail, i) => (
                          <motion.div 
                            key={i}
                            initial={{ opacity: 0, x: -5 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.3 + (i * 0.1) }}
                            className="flex items-start text-xs sm:text-sm"
                          >
                            <div className="mr-2 mt-0.5 text-secondary/70">
                              <ChevronRight className="h-3 w-3" />
                            </div>
                            <span className="text-white/70">{detail}</span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <Card 
                    variant="glass" 
                    className="border border-white/10 hover:border-accent/50 transition-all duration-300"
                  >
                    <CardContent className="p-4 sm:p-5">
                      <div className="mb-4">
                        <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">
                          {step.subtitle}
                        </div>
                        <h3 className="text-lg sm:text-xl text-accent font-bold mb-2">
                          {step.title}
                        </h3>
                        <p className="text-white/80 text-sm sm:text-base">
                          {step.description}
                        </p>
                      </div>
                      
                      <div className="space-y-2 mt-4 pl-1">
                        {step.details.map((detail, i) => (
                          <motion.div 
                            key={i}
                            initial={{ opacity: 0, x: -5 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.3 + (i * 0.1) }}
                            className="flex items-start text-xs sm:text-sm"
                          >
                            <div className="mr-2 mt-0.5 text-accent/70">
                              <ChevronRight className="h-3 w-3" />
                            </div>
                            <span className="text-white/70">{detail}</span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop timeline with connected steps */}
        <div className="hidden lg:block relative mb-32 lg:mb-40">
          <div className="relative w-full">
            {/* Continuous gradient line that runs through all circles */}
            <div className="absolute top-[20px] left-0 right-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-accent opacity-90 z-0"
              style={{ boxShadow: "0 0 15px rgba(255, 77, 141, 0.5)" }}
            />
            
            {/* Start dot */}
            <div className="absolute top-[15px] -left-2.5 size-5 rounded-full bg-primary shadow-sm shadow-primary/50 z-10" />
            
            {/* End dot */}
            <div className="absolute top-[15px] -right-2.5 size-5 rounded-full bg-accent shadow-sm shadow-accent/50 z-10" />
            
            <div className="grid grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* Step number circle */}
                  <motion.div
                    className={`mx-auto mb-10 h-24 w-24 rounded-full ${index === 0 ? 'bg-primary/20' : index === 1 ? 'bg-secondary/20' : 'bg-accent/20'} backdrop-blur-sm border border-white/10 flex items-center justify-center relative z-20`}
                    style={{ marginTop: "-30px" }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 20, 
                      delay: 0.3 + (index * 0.2) 
                    }}
                  >
                    {index === 0 ? (
                      <motion.div 
                        className="absolute inset-0 rounded-full opacity-50 blur-md bg-primary/20"
                        animate={{ 
                          scale: [1, 1.2, 1], 
                          opacity: [0.5, 0.3, 0.5] 
                        }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity, 
                          repeatType: "reverse" 
                        }}
                      />
                    ) : index === 1 ? (
                      <motion.div 
                        className="absolute inset-0 rounded-full opacity-50 blur-md bg-secondary/20"
                        animate={{ 
                          scale: [1, 1.2, 1], 
                          opacity: [0.5, 0.3, 0.5] 
                        }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity, 
                          repeatType: "reverse" 
                        }}
                      />
                    ) : (
                      <motion.div 
                        className="absolute inset-0 rounded-full opacity-50 blur-md bg-accent/20"
                        animate={{ 
                          scale: [1, 1.2, 1], 
                          opacity: [0.5, 0.3, 0.5] 
                        }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity, 
                          repeatType: "reverse" 
                        }}
                      />
                    )}
                    
                    {index === 0 ? (
                      <div className="relative h-14 w-14 rounded-full bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center text-white font-bold text-xl shadow-lg z-20">
                        {index + 1}
                      </div>
                    ) : index === 1 ? (
                      <div className="relative h-14 w-14 rounded-full bg-gradient-to-r from-secondary to-secondary/80 flex items-center justify-center text-white font-bold text-xl shadow-lg z-20">
                        {index + 1}
                      </div>
                    ) : (
                      <div className="relative h-14 w-14 rounded-full bg-gradient-to-r from-accent to-accent/80 flex items-center justify-center text-white font-bold text-xl shadow-lg z-20">
                        {index + 1}
                      </div>
                    )}
                  </motion.div>
                  
                  {/* Step content card */}
                  <motion.div
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                    className="h-full"
                  >
                    {index === 0 ? (
                      <Card 
                        variant="glass"
                        className="h-full border border-white/10 hover:border-primary/50 transition-all duration-300"
                      >
                        <CardContent className="p-5 lg:p-6">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">
                                {step.subtitle}
                              </div>
                              <h3 className="text-lg lg:text-xl text-primary font-bold">
                                {step.title}
                              </h3>
                            </div>
                            <div className="rounded-full p-2 bg-primary/20">
                              <step.icon className="h-5 w-5 text-primary" />
                            </div>
                          </div>
                          
                          <p className="text-white/80 text-sm lg:text-base mb-4 lg:mb-5">
                            {step.description}
                          </p>
                          
                          <div className="space-y-3 pl-1">
                            {step.details.map((detail, i) => (
                              <motion.div 
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 0.5 + (i * 0.1) }}
                                className="flex items-start text-xs sm:text-sm"
                              >
                                <div className="mr-2 mt-0.5 text-primary">
                                  <ChevronRight className="h-3 w-3" />
                                </div>
                                <span className="text-white/70">
                                  {detail}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ) : index === 1 ? (
                      <Card 
                        variant="glass"
                        className="h-full border border-white/10 hover:border-secondary/50 transition-all duration-300"
                      >
                        <CardContent className="p-5 lg:p-6">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">
                                {step.subtitle}
                              </div>
                              <h3 className="text-lg lg:text-xl text-secondary font-bold">
                                {step.title}
                              </h3>
                            </div>
                            <div className="rounded-full p-2 bg-secondary/20">
                              <step.icon className="h-5 w-5 text-secondary" />
                            </div>
                          </div>
                          
                          <p className="text-white/90 text-sm lg:text-base mb-4 lg:mb-5">
                            {step.description}
                          </p>
                          
                          <div className="space-y-3 pl-1">
                            {step.details.map((detail, i) => (
                              <motion.div 
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 0.5 + (i * 0.1) }}
                                className="flex items-start text-xs sm:text-sm"
                              >
                                <div className="mr-2 mt-0.5 text-secondary">
                                  <ChevronRight className="h-3 w-3" />
                                </div>
                                <span className="text-white/90">
                                  {detail}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ) : (
                      <Card 
                        variant="glass"
                        className="h-full border border-white/10 hover:border-accent/50 transition-all duration-300"
                      >
                        <CardContent className="p-5 lg:p-6">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">
                                {step.subtitle}
                              </div>
                              <h3 className="text-lg lg:text-xl text-accent font-bold">
                                {step.title}
                              </h3>
                            </div>
                            <div className="rounded-full p-2 bg-accent/20">
                              <step.icon className="h-5 w-5 text-accent" />
                            </div>
                          </div>
                          
                          <p className="text-white/80 text-sm lg:text-base mb-4 lg:mb-5">
                            {step.description}
                          </p>
                          
                          <div className="space-y-3 pl-1">
                            {step.details.map((detail, i) => (
                              <motion.div 
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 0.5 + (i * 0.1) }}
                                className="flex items-start text-xs sm:text-sm"
                              >
                                <div className="mr-2 mt-0.5 text-accent">
                                  <ChevronRight className="h-3 w-3" />
                                </div>
                                <span className="text-white/70">
                                  {detail}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Integrations section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-5xl mx-auto"
        >
          <Card variant="bordered" className="p-6 md:p-8 border-white/10">
            <div className="text-center mb-6 md:mb-8">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                Seamless Integrations
              </h3>
              <p className="text-white/70 text-sm md:text-base max-w-2xl mx-auto">
                ConvoFlow connects to your existing systems with minimal setup required
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
              {integrations.map((integration, i) => (
                <motion.div
                  key={integration.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + (i * 0.1) }}
                >
                  <Card 
                    variant="glass" 
                    className="p-3 md:p-4 h-full border border-white/10"
                  >
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/20 p-2.5 mt-1">
                        <integration.icon className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-white text-sm md:text-base">{integration.name}</div>
                        <div className="text-xs md:text-sm text-white/60 mt-1">{integration.description}</div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
        
        {/* CTA Section */}
        <motion.div
          className="mt-16 md:mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-5">
            Ready to get started?
          </h3>
          
          <Button 
            asChild 
            variant="glow" 
            size="lg" 
            className="px-8 inline-flex items-center group"
          >
            <Link href="#contact">
              <span>Book Your Demo Now</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
