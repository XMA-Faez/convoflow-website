// components/Contact.tsx
"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  AlertCircle,
  Calendar,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  ArrowRight,
  ChevronRight,
  Sparkles,
  Clock,
  Building,
  Lock,
  Star,
  MessageSquare,
  Send,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SlideUp, FadeIn } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";

// Simple validation functions
const validateEmail = (email: string) => {
  return /\S+@\S+\.\S+/.test(email);
};

const validatePhone = (phone: string) => {
  // UAE phone number validation (simplified)
  return /^(\+971|00971|0)?(?:[567]\d{8}|5[0-9]{7})$/.test(
    phone.replace(/[\s-]/g, ""),
  );
};

export default function Contact() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<{
    success: boolean;
    message: string;
    submitted: boolean;
  }>({
    success: false,
    message: "",
    submitted: false,
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear errors when field is edited
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const errors: { [key: string]: string } = {};

    if (!formState.firstName.trim())
      errors.firstName = "First name is required";
    if (!formState.lastName.trim()) errors.lastName = "Last name is required";

    if (!formState.email.trim()) {
      errors.email = "Email is required";
    } else if (!validateEmail(formState.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!formState.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!validatePhone(formState.phone)) {
      errors.phone = "Please enter a valid UAE phone number";
    }

    if (!formState.company.trim()) errors.company = "Company name is required";
    if (!formState.industry) errors.industry = "Please select your industry";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // In a real implementation, this would be an API call
      // For demo purposes, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setFormStatus({
        success: true,
        message: "Thank you! We'll be in touch with you shortly.",
        submitted: true,
      });

      // Reset form
      setFormState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        industry: "",
        message: "",
      });
    } catch (error) {
      setFormStatus({
        success: false,
        message: "Something went wrong. Please try again later.",
        submitted: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Benefits list
  const benefits = [
    "100x Your Outreach",
    "AI-powered sales automation",
    "24/7 lead qualification",
    "Seamless CRM integration",
    "Multi-language support",
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-mesh-2">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      <div className="absolute inset-0 bg-dots opacity-10" />
      
      <motion.div 
        className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full blur-3xl bg-primary/10 opacity-30"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] rounded-full blur-3xl bg-secondary/10 opacity-30"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 mr-1.5" />
            Get Started Today
          </motion.div>
          
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Ready to <span className="text-transparent bg-clip-text bg-gradient-main relative">
              Transform
              <motion.div 
                className="absolute -bottom-1 left-0 w-full h-[3px]"
                style={{ background: "linear-gradient(90deg, #FF4D8D, #8A2BE2)" }}
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }} 
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </span> Your Sales Process?
          </motion.h2>
          
          <motion.p 
            className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Schedule a comprehensive introduction to see exactly how ConvoFlow
            can help your business grow with AI-powered calling agents
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start max-w-6xl mx-auto">
          {/* Contact form - Wider on desktop */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card variant="glass" className="border-white/10 shadow-xl overflow-hidden relative backdrop-blur-md bg-[#1a1a2d]/70">
              {/* Decorative gradient lines */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-main" />
              <div className="absolute -top-[100px] -right-[100px] w-[200px] h-[200px] rounded-full blur-3xl bg-primary/10 opacity-40" />
              
              <CardHeader className="pt-8 px-8">
                <div className="flex items-center mb-2">
                  <div className="rounded-full bg-gradient-main p-2 shadow-glow">
                    <Calendar className="h-4 w-4 text-white" />
                  </div>
                  <CardTitle className="ml-3 text-xl font-bold">Schedule Your Introduction</CardTitle>
                </div>
                <CardDescription className="text-white/70">
                  Fill out the form below to schedule a personalized introduction to ConvoFlow
                </CardDescription>
              </CardHeader>
              
              <CardContent className="p-8 pt-6">
                <AnimatePresence mode="wait">
                  {formStatus.submitted ? (
                    <motion.div 
                      className="py-8 px-4 text-center"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5 }}
                    >
                      {formStatus.success ? (
                        <div className="flex flex-col items-center">
                          <motion.div
                            className="relative"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                          >
                            <div className="absolute -inset-4 rounded-full animate-pulse-slow bg-primary/20 blur-md" />
                            <div className="relative bg-gradient-main rounded-full p-4 shadow-glow">
                              <CheckCircle2 className="w-12 h-12 text-white" />
                            </div>
                          </motion.div>
                          
                          <motion.h3 
                            className="text-2xl font-bold text-foreground mt-6 mb-3"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                          >
                            Thank You!
                          </motion.h3>
                          
                          <motion.p 
                            className="text-white/80 max-w-md mx-auto mb-2"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                          >
                            {formStatus.message}
                          </motion.p>
                          
                          <motion.p
                            className="text-sm text-white/60 mb-8"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.45 }}
                          >
                            Our team will contact you within 24 hours to confirm your appointment
                          </motion.p>
                          
                          <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                          >
                            <Button 
                              onClick={() => setFormStatus((prev) => ({ ...prev, submitted: false }))}
                              variant="outline-glow"
                              size="lg"
                              className="mt-2"
                            >
                              Submit Another Inquiry
                            </Button>
                          </motion.div>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center">
                          <motion.div
                            className="relative"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                          >
                            <div className="absolute -inset-4 rounded-full animate-pulse-slow bg-destructive/20 blur-md" />
                            <div className="relative bg-destructive rounded-full p-4 shadow-lg">
                              <AlertCircle className="w-12 h-12 text-white" />
                            </div>
                          </motion.div>
                          
                          <motion.h3 
                            className="text-2xl font-bold text-foreground mt-6 mb-3"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                          >
                            Something Went Wrong
                          </motion.h3>
                          
                          <motion.p 
                            className="text-white/80 max-w-md mx-auto mb-8"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                          >
                            {formStatus.message}
                          </motion.p>
                          
                          <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                          >
                            <Button
                              onClick={() => setFormStatus((prev) => ({ ...prev, submitted: false }))}
                              variant="outline"
                              size="lg"
                              className="mt-2"
                            >
                              Try Again
                            </Button>
                          </motion.div>
                        </div>
                      )}
                    </motion.div>
                  ) : (
                    <motion.form 
                      onSubmit={handleSubmit} 
                      className="space-y-7"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {/* Form fields with modern styling */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="relative">
                          <label
                            htmlFor="firstName"
                            className="block text-sm font-medium text-white/90 mb-2 flex items-center"
                          >
                            <span>First Name</span> 
                            <span className="ml-1 text-primary">*</span>
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              id="firstName"
                              name="firstName"
                              value={formState.firstName}
                              onChange={handleChange}
                              className={`w-full h-12 bg-[#1e1e32]/70 backdrop-blur-sm border ${
                                formErrors.firstName
                                  ? "border-destructive"
                                  : "border-white/10"
                              } rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-primary/50 focus:shadow-glow transition-all`}
                              placeholder="John"
                            />
                            <AnimatePresence>
                              {formState.firstName && (
                                <motion.div 
                                  initial={{ opacity: 0, scale: 0.5 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  exit={{ opacity: 0, scale: 0.5 }}
                                  className="absolute right-3 top-1/2 -translate-y-1/2 text-primary"
                                >
                                  <CheckCircle className="h-4 w-4" />
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                          <AnimatePresence>
                            {formErrors.firstName && (
                              <motion.p 
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="mt-1.5 text-xs text-destructive"
                              >
                                {formErrors.firstName}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </div>
                        
                        <div className="relative">
                          <label
                            htmlFor="lastName"
                            className="block text-sm font-medium text-white/90 mb-2 flex items-center"
                          >
                            <span>Last Name</span>
                            <span className="ml-1 text-primary">*</span>
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              id="lastName"
                              name="lastName"
                              value={formState.lastName}
                              onChange={handleChange}
                              className={`w-full h-12 bg-[#1e1e32]/70 backdrop-blur-sm border ${
                                formErrors.lastName
                                  ? "border-destructive"
                                  : "border-white/10"
                              } rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-primary/50 focus:shadow-glow transition-all`}
                              placeholder="Doe"
                            />
                            <AnimatePresence>
                              {formState.lastName && (
                                <motion.div 
                                  initial={{ opacity: 0, scale: 0.5 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  exit={{ opacity: 0, scale: 0.5 }}
                                  className="absolute right-3 top-1/2 -translate-y-1/2 text-primary"
                                >
                                  <CheckCircle className="h-4 w-4" />
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                          <AnimatePresence>
                            {formErrors.lastName && (
                              <motion.p 
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="mt-1.5 text-xs text-destructive"
                              >
                                {formErrors.lastName}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="relative">
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-white/90 mb-2 flex items-center"
                          >
                            <span>Email</span>
                            <span className="ml-1 text-primary">*</span>
                          </label>
                          <div className="relative">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50">
                              <Mail className="h-4 w-4" />
                            </div>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formState.email}
                              onChange={handleChange}
                              className={`w-full h-12 bg-[#1e1e32]/70 backdrop-blur-sm border ${
                                formErrors.email ? "border-destructive" : "border-white/10"
                              } rounded-xl pl-10 pr-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-primary/50 focus:shadow-glow transition-all`}
                              placeholder="john@company.com"
                            />
                            <AnimatePresence>
                              {formState.email && !formErrors.email && (
                                <motion.div 
                                  initial={{ opacity: 0, scale: 0.5 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  exit={{ opacity: 0, scale: 0.5 }}
                                  className="absolute right-3 top-1/2 -translate-y-1/2 text-primary"
                                >
                                  <CheckCircle className="h-4 w-4" />
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                          <AnimatePresence>
                            {formErrors.email && (
                              <motion.p 
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="mt-1.5 text-xs text-destructive"
                              >
                                {formErrors.email}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </div>
                        
                        <div className="relative">
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-white/90 mb-2 flex items-center"
                          >
                            <span>Phone Number</span>
                            <span className="ml-1 text-primary">*</span>
                          </label>
                          <div className="relative">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50">
                              <Phone className="h-4 w-4" />
                            </div>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formState.phone}
                              onChange={handleChange}
                              className={`w-full h-12 bg-[#1e1e32]/70 backdrop-blur-sm border ${
                                formErrors.phone ? "border-destructive" : "border-white/10"
                              } rounded-xl pl-10 pr-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-primary/50 focus:shadow-glow transition-all`}
                              placeholder="+971 55 123 4567"
                            />
                            <AnimatePresence>
                              {formState.phone && !formErrors.phone && (
                                <motion.div 
                                  initial={{ opacity: 0, scale: 0.5 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  exit={{ opacity: 0, scale: 0.5 }}
                                  className="absolute right-3 top-1/2 -translate-y-1/2 text-primary"
                                >
                                  <CheckCircle className="h-4 w-4" />
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                          <AnimatePresence>
                            {formErrors.phone && (
                              <motion.p 
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="mt-1.5 text-xs text-destructive"
                              >
                                {formErrors.phone}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="relative">
                          <label
                            htmlFor="company"
                            className="block text-sm font-medium text-white/90 mb-2 flex items-center"
                          >
                            <span>Company</span>
                            <span className="ml-1 text-primary">*</span>
                          </label>
                          <div className="relative">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50">
                              <Building className="h-4 w-4" />
                            </div>
                            <input
                              type="text"
                              id="company"
                              name="company"
                              value={formState.company}
                              onChange={handleChange}
                              className={`w-full h-12 bg-[#1e1e32]/70 backdrop-blur-sm border ${
                                formErrors.company
                                  ? "border-destructive"
                                  : "border-white/10"
                              } rounded-xl pl-10 pr-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-primary/50 focus:shadow-glow transition-all`}
                              placeholder="Your Company"
                            />
                            <AnimatePresence>
                              {formState.company && !formErrors.company && (
                                <motion.div 
                                  initial={{ opacity: 0, scale: 0.5 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  exit={{ opacity: 0, scale: 0.5 }}
                                  className="absolute right-3 top-1/2 -translate-y-1/2 text-primary"
                                >
                                  <CheckCircle className="h-4 w-4" />
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                          <AnimatePresence>
                            {formErrors.company && (
                              <motion.p 
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="mt-1.5 text-xs text-destructive"
                              >
                                {formErrors.company}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </div>
                        
                        <div className="relative">
                          <label
                            htmlFor="industry"
                            className="block text-sm font-medium text-white/90 mb-2 flex items-center"
                          >
                            <span>Industry</span>
                            <span className="ml-1 text-primary">*</span>
                          </label>
                          <div className="relative">
                            <select
                              id="industry"
                              name="industry"
                              value={formState.industry}
                              onChange={handleChange}
                              className={`w-full h-12 bg-[#1e1e32]/70 backdrop-blur-sm border appearance-none ${
                                formErrors.industry
                                  ? "border-destructive"
                                  : "border-white/10"
                              } rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-primary/50 focus:shadow-glow transition-all`}
                              style={{
                                backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "right 1rem center",
                                backgroundSize: "1.5em 1.5em"
                              }}
                            >
                              <option value="" className="bg-card text-white/50">
                                Select your industry
                              </option>
                              <option value="Real Estate" className="bg-card">
                                Real Estate
                              </option>
                              <option value="Healthcare" className="bg-card">
                                Healthcare
                              </option>
                              <option value="Recruitment" className="bg-card">
                                Recruitment
                              </option>
                              <option value="Hospitality" className="bg-card">
                                Hospitality
                              </option>
                              <option value="Business Setup" className="bg-card">
                                Business Setup
                              </option>
                              <option value="Other" className="bg-card">
                                Other
                              </option>
                            </select>
                            <AnimatePresence>
                              {formState.industry && (
                                <motion.div 
                                  initial={{ opacity: 0, scale: 0.5 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  exit={{ opacity: 0, scale: 0.5 }}
                                  className="absolute right-10 top-1/2 -translate-y-1/2 text-primary"
                                >
                                  <CheckCircle className="h-4 w-4" />
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                          <AnimatePresence>
                            {formErrors.industry && (
                              <motion.p 
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="mt-1.5 text-xs text-destructive"
                              >
                                {formErrors.industry}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>

                      <div className="relative">
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-white/90 mb-2 flex items-center"
                        >
                          <span>Message</span>
                          <span className="ml-1 text-white/40 text-xs">(Optional)</span>
                        </label>
                        <div className="relative">
                          <div className="absolute left-4 top-4 text-white/50">
                            <MessageSquare className="h-4 w-4" />
                          </div>
                          <textarea
                            id="message"
                            name="message"
                            value={formState.message}
                            onChange={handleChange}
                            rows={4}
                            className="w-full bg-[#1e1e32]/70 backdrop-blur-sm border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-primary/50 focus:shadow-glow transition-all"
                            placeholder="Tell us about your requirements..."
                          />
                        </div>
                      </div>

                      {/* Security notice */}
                      <div className="flex items-center text-xs text-white/50 gap-2 mb-1">
                        <Lock className="h-3 w-3" />
                        <span>Your information is secure and will not be shared with third parties.</span>
                      </div>

                      <Button
                        type="submit"
                        variant="glow"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full mt-4 group py-6"
                      >
                        {isSubmitting ? (
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
                            Processing Your Request...
                          </>
                        ) : (
                          <span className="flex items-center">
                            <Calendar className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                            Schedule Your Introduction
                            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                          </span>
                        )}
                      </Button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact information and benefits */}
          <SlideUp delay={0.3} className="space-y-8">
            {/* Benefits */}
            <Card className="border border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">
                  Why Choose ConvoFlow?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.li 
                      key={benefit} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                    >
                      <div className="mr-3 text-primary flex-shrink-0">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <span className="text-foreground">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Contact info */}
            <Card className="border border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <motion.a
                    href="tel:+971554960783"
                    className="flex items-center group hover:bg-card/80 p-2 rounded-lg transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 group-hover:bg-primary/20 transition-colors">
                      <Phone className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-foreground group-hover:text-primary transition-colors">
                      055 496 0783
                    </span>
                  </motion.a>
                  
                  <motion.a
                    href="mailto:info@convoflow.ae"
                    className="flex items-center group hover:bg-card/80 p-2 rounded-lg transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 group-hover:bg-primary/20 transition-colors">
                      <Mail className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-foreground group-hover:text-primary transition-colors">
                      info@convoflow.ae
                    </span>
                  </motion.a>
                  
                  <motion.a
                    href="https://maps.google.com/?q=JBC+2+-+Jumeirah+Lake+Towers+-+Dubai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center group hover:bg-card/80 p-2 rounded-lg transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 group-hover:bg-primary/20 transition-colors">
                      <MapPin className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-foreground group-hover:text-primary transition-colors">
                      JBC 2 - Jumeirah Lake Towers - Dubai
                    </span>
                  </motion.a>
                </div>
              </CardContent>
            </Card>
            
            {/* Decorative element */}
            <motion.div 
              className="hidden lg:block relative h-40 rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 rounded-xl" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, 2, 0, -2, 0]
                  }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="text-center"
                >
                  <h3 className="text-xl font-semibold text-foreground mb-2">Ready to get started?</h3>
                  <p className="text-muted-foreground mb-4">Join our growing list of satisfied clients</p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button asChild variant="outline" size="sm">
                      <a href="#hero" className="flex items-center gap-2">
                        Try a demo call
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </SlideUp>
        </div>
      </div>
    </section>
  );
}
