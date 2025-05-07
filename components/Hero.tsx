// src/components/hero/Hero.tsx
"use client";

import React, { useState, useOptimistic } from "react";
import { useFormStatus } from "react-dom";
import { getDemoCall } from "@/actions/getDemoCall";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FadeIn, SlideUp, ScaleIn, Stagger, StaggerItem } from "@/components/ui/motion";
import { PhoneIcon, Sparkles, Star, ChevronRight, ExternalLink } from "lucide-react";

// Form submit button with loading state
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      variant="gradient"
      size="lg"
      className="w-full sm:w-auto relative overflow-hidden group"
      disabled={pending}
    >
      <span className="absolute inset-0 bg-gradient-main opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {pending ? (
        <>
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Getting a Call...
        </>
      ) : (
        <span className="flex items-center relative z-10">
          <Sparkles className="w-4 h-4 mr-2" />
          Get a Demo Call Now
        </span>
      )}
    </Button>
  );
}

// Hero section component
export default function Hero() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [formError, setFormError] = useState("");
  const [optimisticState, addOptimistic] = useOptimistic(
    { success: false, message: "" },
    (state, newState) => ({ ...state, ...newState }),
  );

  // Form validation
  const validatePhoneNumber = (number: string) => {
    const phoneRegex = /^\+?[0-9]{10,15}$/;
    if (!phoneRegex.test(number.replace(/[\s-]/g, ""))) {
      return "Please enter a valid phone number";
    }
    return "";
  };

  // Handle form submission
  async function handleSubmit(formData: FormData) {
    const phone = formData.get("phone") as string;
    const error = validatePhoneNumber(phone);

    if (error) {
      setFormError(error);
      return;
    }

    setFormError("");

    // Add optimistic UI update before the actual action completes
    addOptimistic({ success: true, message: "Processing your call..." });

    try {
      const result = await getDemoCall(phone);

      if (result.success) {
        addOptimistic({
          success: true,
          message: "Our AI will call you shortly!",
        });
        // Reset form
        setPhoneNumber("");
      } else {
        addOptimistic({
          success: false,
          message: result.error || "Something went wrong",
        });
      }
    } catch (err) {
      addOptimistic({
        success: false,
        message: "Failed to schedule your call. Please try again.",
      });
    }
  }

  // Floating elements animation variants
  const floatingElements = [
    { icon: Star, color: "#FF4D8D", size: 20, delay: 0, x: -3, y: -5 },
    { icon: Star, color: "#8A2BE2", size: 16, delay: 0.5, x: 5, y: -3 },
    { icon: Sparkles, color: "#00FFFF", size: 18, delay: 0.8, x: -4, y: 4 },
    { icon: Star, color: "#FF4D8D", size: 14, delay: 1.3, x: 6, y: 3 },
  ];

  return (
    <section id="hero" className="pt-32 pb-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Static gradient background */}
      <div className="absolute inset-0 bg-hero-gradient" />
      
      {/* Static radial gradient overlay */}
      <div className="absolute inset-0 bg-hero-radial" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-70" />
      
      {/* Radial gradient glow */}
      <div className="absolute inset-0 bg-gradient-dark-glow" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      
      {/* Simple background fade for clean transition */}
      <div className="absolute bottom-[-1px] inset-x-0 h-52 bg-gradient-to-t from-cyan-950 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                UAE's Leading AI Calling Platform
              </span>
            </motion.div>

            <SlideUp delay={0.2}>
              <div className="max-w-2xl relative">
                {/* Floating elements */}
                {floatingElements.map((element, index) => (
                  <motion.div
                    key={index}
                    className="absolute" 
                    style={{ 
                      color: element.color,
                      top: `${Math.random() * 100}%`,
                      left: `${30 + Math.random() * 70}%`,
                    }}
                    animate={{ 
                      y: [element.y, -element.y, element.y],
                      x: [element.x, -element.x, element.x],
                      opacity: [0.7, 1, 0.7],
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, 0, -5, 0],
                    }}
                    transition={{ 
                      duration: 3 + Math.random() * 2,
                      delay: element.delay,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  >
                    <element.icon size={element.size} />
                  </motion.div>
                ))}

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight text-balance">
                  <span className="relative">
                    <span className="text-white">Transform Your </span>
                    <span className="relative inline-block text-glow text-primary">
                      Sales Process
                      <motion.div 
                        className="absolute -bottom-1 left-0 w-full h-[3px]"
                        style={{ background: "linear-gradient(90deg, #FF4D8D, #8A2BE2)" }}
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }} 
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </span>
                  </span>
                  <br />
                  <span className="relative">
                    with <span className="relative z-10 text-transparent bg-clip-text bg-gradient-main">AI-Powered</span> Calling
                  </span>
                </h1>
                
                <motion.p 
                  className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <span className="text-white font-medium">Book more meetings and qualify more leads</span> with 
                  our natural-sounding UAE-based AI calling agents that handle 
                  <span className="text-primary"> 200+ calls simultaneously</span>.
                </motion.p>

                {/* Call to action buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
                >
                  {optimisticState.success ? (
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="glass-card p-6 rounded-xl border border-primary/30 shadow-glow"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="rounded-full bg-primary/20 p-3 animate-pulse-slow">
                          <PhoneIcon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="text-foreground font-medium">{optimisticState.message}</p>
                          <p className="text-sm text-muted-foreground mt-1">We'll connect you with our AI agent shortly</p>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.form 
                      action={handleSubmit} 
                      className="w-full sm:max-w-lg relative"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-1 relative">
                          <div className="absolute z-10 left-4 top-1/2 -translate-y-1/2 text-primary">
                            <PhoneIcon className="h-5 w-5" />
                          </div>
                          <label htmlFor="phone" className="sr-only">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            placeholder="+971 55 123 4567"
                            className="w-full h-12 bg-card/60 backdrop-blur-sm border border-white/10 rounded-xl pl-12 pr-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all shadow-lg"
                            required
                          />
                          {formError && (
                            <motion.p 
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }} 
                              className="mt-2 text-sm text-destructive"
                            >
                              {formError}
                            </motion.p>
                          )}
                        </div>
                        <SubmitButton />
                      </div>
                    </motion.form>
                  )}
                </motion.div>

                <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                  {/* <motion.div */}
                  {/*   initial={{ opacity: 0, y: 20 }} */}
                  {/*   animate={{ opacity: 1, y: 0 }} */}
                  {/*   transition={{ delay: 0.7 }} */}
                  {/* > */}
                  {/*   <Button  */}
                  {/*     asChild  */}
                  {/*     variant="outline-glow"  */}
                  {/*     size="lg" */}
                  {/*     className="group w-full sm:w-auto" */}
                  {/*   > */}
                  {/*     <Link href="#contact" className="flex items-center"> */}
                  {/*       <span>Schedule Consultation</span> */}
                  {/*       <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /> */}
                  {/*     </Link> */}
                  {/*   </Button> */}
                  {/* </motion.div> */}

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex items-center space-x-2"
                  >
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((num) => (
                        <div 
                          key={num}
                          className="w-8 h-8 rounded-full bg-primary/20 border-2 border-card flex items-center justify-center text-xs font-medium text-white"
                        >
                          {num}
                        </div>
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">Trusted by <span className="text-white font-medium">300+</span> UAE companies</span>
                  </motion.div>
                </div>
              </div>
            </SlideUp>
          </div>

          {/* Right side with dashboard and stats */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative z-10"
            >
              {/* Decorative elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-main rounded-lg opacity-60 blur-lg" />
              <div className="absolute -bottom-10 -right-6 w-24 h-24 bg-gradient-to-tr from-primary/40 to-secondary/40 rounded-full opacity-70 blur-xl" />
              
              <motion.div 
                className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 glow-border"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Dashboard image */}
                <div className="relative">
                  <img
                    src="/images/dashboard.webp"
                    alt="AI Calling Dashboard"
                    className="w-full h-auto rounded-xl"
                    width={600}
                    height={400}
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  
                  {/* Animated pulse */}
                  <motion.div
                    className="absolute top-6 right-6 w-3 h-3 bg-primary rounded-full"
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </div>

                {/* Feature badges overlay */}
                <div className="absolute top-4 left-4 flex space-x-2">
                  <div className="px-3 py-1 rounded-full text-xs font-medium bg-card/80 backdrop-blur-sm border border-white/10 text-white shadow-lg">
                    UAE Numbers
                  </div>
                  <div className="px-3 py-1 rounded-full text-xs font-medium bg-primary/90 text-white shadow-lg">
                    AI Technology
                  </div>
                </div>
              </motion.div>

              {/* Stats overlay */}
              <motion.div 
                className="absolute -bottom-8 left-6 right-6 z-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <Stagger className="glass-card p-5 rounded-xl border border-white/10 shadow-lg grid grid-cols-3 gap-4">
                  <StaggerItem className="text-center">
                    <div className="text-primary font-bold text-2xl animate-pulse-slow">300%</div>
                    <div className="text-xs text-white/80">
                      More Conversations
                    </div>
                  </StaggerItem>
                  <StaggerItem className="text-center relative">
                    <div className="text-secondary font-bold text-2xl animate-pulse-slow">80%</div>
                    <div className="text-xs text-white/80">Less Wasted Time</div>
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-secondary rounded-full" />
                  </StaggerItem>
                  <StaggerItem className="text-center">
                    <div className="text-accent font-bold text-2xl animate-pulse-slow">45%</div>
                    <div className="text-xs text-white/80">
                      Higher Booking Rate
                    </div>
                  </StaggerItem>
                </Stagger>
              </motion.div>
              
              {/* Floating client logos */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 1.3 }}
                className="absolute -right-4 top-1/4 bg-card/80 backdrop-blur-sm shadow-lg rounded-lg p-2 border border-white/10"
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                >
                  <div className="w-12 h-12 rounded-md bg-secondary/20 flex items-center justify-center text-white font-bold">
                    C1
                  </div>
                </motion.div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 1.5 }}
                className="absolute -left-6 top-2/3 bg-card/80 backdrop-blur-sm shadow-lg rounded-lg p-2 border border-white/10"
              >
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
                >
                  <div className="w-12 h-12 rounded-md bg-primary/20 flex items-center justify-center text-white font-bold">
                    C2
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Social proof bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="mt-16 pt-8 border-t border-white/5"
        >
          <div className="flex flex-wrap justify-between items-center gap-6">
            <div className="text-sm text-white font-medium">
              Trusted by industry leaders
            </div>
            <div className="flex flex-wrap gap-8 justify-center items-center opacity-60">
              {['Company 1', 'Company 2', 'Company 3', 'Company 4'].map((company, i) => (
                <div key={i} className="text-sm font-medium text-muted-foreground">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
