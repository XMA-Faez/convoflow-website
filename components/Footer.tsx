// components/Footer.tsx
"use client";

import React from "react";
import Link from "next/link";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Instagram, 
  ExternalLink, 
  ArrowUp,
  MessageCircle,
  ChevronRight,
  CheckCircle,
  Heart,
  CornerRightUp
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ScaleIn, FadeIn, SlideUp } from "@/components/ui/motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const [email, setEmail] = React.useState("");
  const [subscribed, setSubscribed] = React.useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-background text-foreground border-t border-white/10 pt-24 pb-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent opacity-30" />
        <div className="absolute -right-24 -bottom-24 w-80 h-80 blur-3xl rounded-full bg-primary/5 mix-blend-screen" />
        <div className="absolute -left-40 top-40 w-96 h-96 blur-3xl rounded-full bg-secondary/5 mix-blend-screen" />
        <motion.div 
          className="absolute top-10 left-1/4 h-2 w-2 rounded-full bg-primary/40"
          animate={{ 
            y: [0, 100, 0],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-20 right-1/3 h-1 w-1 rounded-full bg-secondary/40"
          animate={{ 
            y: [0, 60, 0],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-40 right-1/4 h-1.5 w-1.5 rounded-full bg-accent/40"
          animate={{ 
            y: [0, -80, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      {/* Wave pattern overlay at the top */}
      <div className="absolute top-0 left-0 right-0 h-20 overflow-hidden">
        <svg className="absolute bottom-0 fill-card/20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
      
      {/* Scroll to top button */}
      <div className="absolute right-8 -top-6 z-10">
        <motion.button
          onClick={scrollToTop}
          className="glass-card shadow-primary/20 border border-white/10 rounded-xl p-3 text-foreground hover:text-primary transition-all duration-300"
          whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(255, 77, 141, 0.3)" }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ArrowUp className="h-5 w-5" />
          <motion.span 
            className="absolute inset-0 rounded-xl border border-primary/40"
            animate={{ 
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.button>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Footer header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent pb-2">
            Transform Your Business with AI Calling
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Elevate your communication strategy with ConvoFlow's innovative AI voice solutions
          </p>
        </motion.div>
      
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Logo and description */}
          <motion.div 
            className="col-span-1 lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center group mb-5">
              <div className="mr-2 w-10 h-10 rounded-xl bg-gradient-main flex items-center justify-center text-white font-bold text-lg shadow-glow">
                CF
              </div>
              <motion.span 
                className="text-2xl font-bold"
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
            <p className="text-muted-foreground mb-6 leading-relaxed">
              AI-powered calling solutions for UAE businesses. Transform your
              sales process with human-like, UAE-based AI calling agents.
            </p>
            <div className="flex space-x-3">
              {/* Social media icons with animations */}
              {[
                { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn", color: "bg-[#0077B5]/10 hover:bg-[#0077B5]/20" },
                { href: "https://twitter.com", icon: Twitter, label: "Twitter", color: "bg-[#1DA1F2]/10 hover:bg-[#1DA1F2]/20" },
                { href: "https://instagram.com", icon: Instagram, label: "Instagram", color: "bg-gradient-to-br from-[#833AB4]/10 via-[#FD1D1D]/10 to-[#FCAF45]/10 hover:from-[#833AB4]/20 hover:via-[#FD1D1D]/20 hover:to-[#FCAF45]/20" }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`h-10 w-10 flex items-center justify-center rounded-lg glass-card border border-white/10 hover:border-primary/30 transition-all duration-300 group`}
                  whileHover={{ y: -3, rotate: -5 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <social.icon className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </div>
            
            {/* Trust badge */}
            <motion.div
              className="mt-8 flex items-center space-x-1.5 text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <Heart className="h-3 w-3 text-primary mr-1" />
              <span>Trusted by UAE's top businesses</span>
            </motion.div>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-5 text-foreground flex items-center">
              <span className="w-1 h-5 bg-gradient-to-b from-primary to-secondary rounded-full mr-2"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { href: "#features", label: "Features", icon: ChevronRight },
                { href: "#industries", label: "Industries", icon: ChevronRight },
                { href: "#process", label: "How It Works", icon: ChevronRight },
                { href: "#contact", label: "Contact", icon: ChevronRight },
                { href: "#hero", label: "Get a Demo", icon: ChevronRight }
              ].map((link, index) => (
                <motion.li 
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + 0.05 * index }}
                >
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-all duration-300 flex items-center group"
                  >
                    <span className="h-8 w-0 group-hover:w-1 overflow-hidden rounded-full bg-primary mr-0 group-hover:mr-2 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-5 text-foreground flex items-center">
              <span className="w-1 h-5 bg-gradient-to-b from-secondary to-accent rounded-full mr-2"></span>
              Legal
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/privacy-policy", label: "Privacy Policy", icon: ChevronRight },
                { href: "/terms-conditions", label: "Terms & Conditions", icon: ChevronRight },
                { href: "/cookies", label: "Cookie Policy", icon: ChevronRight }
              ].map((link, index) => (
                <motion.li 
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + 0.05 * index }}
                >
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-all duration-300 flex items-center group"
                  >
                    <span className="h-8 w-0 group-hover:w-1 overflow-hidden rounded-full bg-primary mr-0 group-hover:mr-2 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
            
            {/* Support badge */}
            <motion.div
              className="mt-8 bg-card/30 backdrop-blur-sm border border-white/5 rounded-lg p-3 flex items-center gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ y: -2, boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="h-8 w-8 bg-gradient-to-br from-primary to-secondary opacity-90 rounded-lg flex items-center justify-center">
                <MessageCircle className="h-4 w-4 text-white" />
              </div>
              <div>
                <h4 className="text-sm font-medium">Need Help?</h4>
                <p className="text-xs text-muted-foreground">Our team is available 24/7</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-5 text-foreground flex items-center">
              <span className="w-1 h-5 bg-gradient-to-b from-accent to-primary rounded-full mr-2"></span>
              Contact
            </h3>
            <ul className="space-y-4">
              {[
                { href: "tel:+971554960783", icon: Phone, text: "055 496 0783" },
                { href: "mailto:info@convoflow.ae", icon: Mail, text: "info@convoflow.ae" }
              ].map((item, index) => (
                <motion.li 
                  key={item.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + 0.05 * index }}
                >
                  <a
                    href={item.href}
                    className="flex items-center group text-muted-foreground hover:text-primary transition-all duration-300"
                  >
                    <div className="h-8 w-8 rounded-lg glass-card border border-white/10 flex items-center justify-center mr-3 text-primary group-hover:border-primary/30 transition-all">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {item.text}
                    </span>
                  </a>
                </motion.li>
              ))}
              
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <a
                  href="https://maps.google.com/?q=JBC+2+-+Jumeirah+Lake+Towers+-+Dubai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start group text-muted-foreground hover:text-primary transition-all duration-300"
                >
                  <div className="h-8 w-8 rounded-lg glass-card border border-white/10 flex items-center justify-center mr-3 text-primary flex-shrink-0 mt-0.5 group-hover:border-primary/30 transition-all">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="flex items-center group-hover:translate-x-1 transition-transform duration-300">
                      JBC 2 - Jumeirah Lake Towers
                      <ExternalLink className="h-3 w-3 ml-1 opacity-50" />
                    </span>
                    <span className="text-xs text-muted-foreground opacity-70 mt-0.5">Dubai, UAE</span>
                  </div>
                </a>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Newsletter subscription */}
        <motion.div 
          className="w-full mb-16 p-8 rounded-xl glass-card border border-white/10 relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Background gradient */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -right-24 -bottom-24 w-80 h-80 blur-3xl rounded-full bg-primary/5 mix-blend-screen" />
            <div className="absolute -left-20 -top-20 w-60 h-60 blur-3xl rounded-full bg-secondary/5 mix-blend-screen" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-foreground flex items-center">
                <CornerRightUp className="mr-2 h-5 w-5 text-primary" /> 
                Stay Updated
              </h3>
              <p className="text-muted-foreground">
                Subscribe to our newsletter for the latest updates and AI innovations in the UAE market
              </p>
            </div>
            <div>
              <AnimatePresence mode="wait">
                {subscribed ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl p-4 flex items-center gap-3 text-primary"
                  >
                    <CheckCircle className="h-5 w-5 text-primary" />
                    Thank you for subscribing!
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    className="flex flex-col sm:flex-row gap-3"
                    onSubmit={handleSubscribe}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="relative flex-1">
                      <input 
                        type="email" 
                        placeholder="Your email address" 
                        className="w-full bg-card/50 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary/30 focus:shadow-glow transition-all"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground opacity-50" />
                    </div>
                    <Button type="submit" variant="gradient" className="py-3 px-6">
                      Subscribe
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div 
          className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} ConvoFlow.ae. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { href: "/privacy-policy", label: "Privacy" },
              { href: "/terms-conditions", label: "Terms" },
              { href: "/cookies", label: "Cookies" }
            ].map((link, index) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors text-sm relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
