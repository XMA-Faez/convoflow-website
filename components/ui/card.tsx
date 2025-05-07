"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    variant?: "default" | "glass" | "gradient" | "bordered" | "glow" | "neo" | "minimal" | "hover";
    isHoverable?: boolean;
    isAnimated?: boolean;
    animationDelay?: number;
  }
>(({ className, variant = "default", isHoverable = false, isAnimated = false, animationDelay = 0, ...props }, ref) => {
  const variantStyles = {
    default: "rounded-xl border border-border/50 bg-card shadow-md transition-all duration-300",
    glass: "rounded-xl border border-white/10 glass-card transition-all duration-300 glass-card-hover",
    gradient: "rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5 shadow-lg transition-all duration-300 hover:shadow-primary/20 hover:border-primary/30",
    bordered: "rounded-xl border-2 border-primary/30 bg-card shadow-md transition-all duration-300 hover:border-primary/50 hover:shadow-primary/20",
    glow: "rounded-xl border border-primary/30 bg-card glow-border glow-border-hover transition-all duration-300",
    neo: "rounded-xl neo-brutalism transition-all duration-300",
    minimal: "rounded-xl bg-card/50 transition-all duration-300 hover:bg-card hover:shadow-sm",
    hover: "rounded-xl border border-border/50 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/20",
  };

  // Conditionally apply motion component or regular div
  const Component = isAnimated ? motion.div : "div";
  
  // Motion props applied only if isAnimated is true
  const motionProps = isAnimated ? {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.5, delay: animationDelay }
  } : {};
  
  // Hover animation props
  const hoverProps = isHoverable ? {
    whileHover: { y: -5, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)" },
    whileTap: { y: -2 }
  } : {};

  return (
    <Component
      ref={ref}
      className={cn(
        variantStyles[variant],
        className
      )}
      {...motionProps}
      {...hoverProps}
      {...props}
    />
  );
});
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    withBorder?: boolean;
    centered?: boolean;
  }
>(({ className, withBorder = false, centered = false, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col space-y-1.5 p-6",
      withBorder && "border-b border-border/30 pb-4",
      centered && "items-center text-center",
      className
    )}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement> & {
    gradient?: boolean;
    size?: "default" | "lg" | "xl";
    withAccent?: boolean;
  }
>(({ className, gradient = false, size = "default", withAccent = false, ...props }, ref) => {
  const sizeClasses = {
    default: "text-lg font-semibold",
    lg: "text-xl font-bold",
    xl: "text-2xl font-bold"
  };
  
  return (
    <h3
      ref={ref}
      className={cn(
        sizeClasses[size],
        "leading-tight tracking-tight",
        gradient && "text-transparent bg-clip-text bg-gradient-main",
        withAccent && "border-l-4 border-primary pl-3",
        className
      )}
      {...props}
    />
  );
});
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement> & {
    size?: "default" | "lg";
    muted?: boolean;
  }
>(({ className, size = "default", muted = true, ...props }, ref) => {
  const sizeClasses = {
    default: "text-sm",
    lg: "text-base"
  };

  return (
    <p
      ref={ref}
      className={cn(
        sizeClasses[size],
        muted ? "text-muted-foreground" : "text-foreground/80",
        "leading-relaxed",
        className
      )}
      {...props}
    />
  );
});
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    padded?: boolean | "sm" | "lg";
    withBorder?: boolean;
  }
>(({ className, padded = true, withBorder = false, ...props }, ref) => {
  const paddingClasses = {
    true: "p-6 pt-0",
    false: "px-0 pt-0",
    sm: "p-4 pt-0",
    lg: "p-8 pt-0"
  };

  return (
    <div 
      ref={ref} 
      className={cn(
        paddingClasses[padded.toString() as keyof typeof paddingClasses], 
        withBorder && "border-t border-border/20 mt-4 pt-4", 
        className
      )} 
      {...props} 
    />
  );
});
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    withBorder?: boolean;
    centered?: boolean;
    padded?: boolean | "sm" | "lg";
  }
>(({ className, withBorder = false, centered = false, padded = true, ...props }, ref) => {
  const paddingClasses = {
    true: "p-6 pt-0",
    false: "px-0 pt-0",
    sm: "p-4 pt-0",
    lg: "p-8 pt-0"
  };
  
  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center", 
        paddingClasses[padded.toString() as keyof typeof paddingClasses],
        withBorder && "border-t border-border/30 mt-4 pt-4",
        centered && "justify-center",
        className
      )}
      {...props}
    />
  );
});
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };