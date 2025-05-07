// components/Header.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FadeIn, SlideUp, ScaleIn } from "@/components/ui/motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  // Handle scroll event for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "Industries", href: "#industries" },
    { name: "How It Works", href: "#process" },
    { name: "Contact", href: "#contact" },
    { name: "Test Page", href: "/test" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "py-2 bg-card/80 backdrop-blur-xl border-b border-white/5 shadow-lg"
          : "py-4 bg-transparent"
      }`}
    >
      {/* Decorative header accent line */}
      {isScrolled && (
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      )}
      
      <FadeIn className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center group">
              <motion.div
                className="mr-2 w-8 h-8 rounded-xl bg-gradient-main flex items-center justify-center text-white font-bold text-lg shadow-glow overflow-hidden"
                initial={{ rotate: -10 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                whileHover={{ scale: 1.05, rotate: -5 }}
              >
                CF
              </motion.div>
              <motion.span 
                className="text-xl sm:text-2xl font-bold relative overflow-hidden"
                whileHover="hover"
              >
                <span className="text-foreground">Convo</span>
                <motion.span 
                  className="text-primary relative"
                  variants={{
                    hover: {
                      color: ["#FF4D8D", "#8A2BE2", "#00FFFF", "#FF4D8D"],
                      transition: { duration: 1, repeat: Infinity, ease: "linear" }
                    }
                  }}
                >
                  Flow
                </motion.span>
              </motion.span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2 lg:space-x-6">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onHoverStart={() => setActiveItem(item.name)}
                onHoverEnd={() => setActiveItem(null)}
                className="relative px-2 py-1"
              >
                <Link
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors text-sm lg:text-base font-medium"
                >
                  {item.name}
                </Link>
                {/* Animated underline on hover */}
                <AnimatePresence>
                  {activeItem === item.name && (
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 1 }}
                      exit={{ scaleX: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
            
            {/* Phone number with visual treatment */}
            <motion.div
              className="hidden lg:flex items-center ml-2 mr-3 text-sm border-l border-white/10 pl-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              whileHover={{ opacity: 1 }}
            >
              <span className="flex items-center text-muted-foreground hover:text-primary transition-all duration-300 ease-in-out">
                <Phone className="h-3 w-3 mr-2 text-primary" />
                <a href="tel:+971554960783">055 496 0783</a>
              </span>
            </motion.div>
            
            <ScaleIn delay={0.4}>
              <Button asChild variant="glow" size="sm" className="sm:px-6">
                <Link href="#demo" className="flex items-center">
                  Get a Demo
                  <motion.div
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    className="ml-1"
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.div>
                </Link>
              </Button>
            </ScaleIn>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground p-2 focus:outline-none relative"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Decorative ring around the menu button */}
              <motion.div 
                className="absolute inset-0 rounded-full"
                animate={isMenuOpen ? {
                  boxShadow: "0 0 0 2px rgba(255, 77, 141, 0.5)"
                } : {
                  boxShadow: "0 0 0 0px rgba(255, 77, 141, 0)"
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </div>
        </div>
      </FadeIn>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden glass-card border-t border-white/10 overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="container mx-auto px-4 py-6">
              <nav className="flex flex-col space-y-5">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: index * 0.08,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className="border-b border-white/5 pb-2"
                  >
                    <Link
                      href={item.href}
                      className="text-foreground group flex items-center py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <motion.span 
                        className="w-1.5 h-1.5 rounded-full bg-primary mr-3 opacity-70"
                        whileHover={{ scale: 1.5 }}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2
                        }}
                      />
                      <span className="text-lg font-medium group-hover:text-primary transition-colors">
                        {item.name}
                      </span>
                    </Link>
                  </motion.div>
                ))}
                
                {/* Phone number for mobile */}
                <motion.a
                  href="tel:+971554960783"
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: navItems.length * 0.08,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="flex items-center text-muted-foreground py-2"
                >
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 text-primary">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>055 496 0783</span>
                </motion.a>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="pt-2"
                >
                  <Button asChild variant="gradient" className="w-full py-6 rounded-xl mt-2">
                    <Link
                      href="#demo"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center justify-center text-base"
                    >
                      Get a Demo Call
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                        className="ml-2"
                      >
                        →
                      </motion.span>
                    </Link>
                  </Button>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
