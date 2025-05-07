"use client";

import React, { forwardRef, useState } from "react";
import { AlertCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  variant?: "default" | "outlined" | "filled";
  required?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      label,
      error,
      icon,
      variant = "default",
      required = false,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setIsFocused(true);
      props.onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setIsFocused(false);
      props.onBlur?.(e);
    };

    const variantStyles = {
      default:
        "bg-card/60 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-primary/50 focus:shadow-glow transition-all",
      outlined:
        "bg-transparent backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-primary/50 focus:shadow-glow transition-all",
      filled:
        "bg-[#1e1e32]/70 backdrop-blur-sm border border-transparent rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-primary/50 focus:shadow-glow transition-all",
    };

    return (
      <div className="relative space-y-1.5">
        {label && (
          <label
            htmlFor={props.id}
            className="block text-sm font-medium text-white/90 mb-2 flex items-center"
          >
            <span>{label}</span>
            {required && <span className="ml-1 text-primary">*</span>}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div className="absolute left-4 top-4 text-white/50">
              {icon}
            </div>
          )}
          <textarea
            className={cn(
              variantStyles[variant],
              icon ? "pl-10" : "pl-4",
              error ? "border-destructive" : "",
              "w-full min-h-[80px] resize-y",
              className
            )}
            ref={ref}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...props}
          />
        </div>
        <AnimatePresence>
          {error && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-1.5 text-xs text-destructive flex items-center"
            >
              <AlertCircle className="h-3 w-3 mr-1" />
              {error}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };