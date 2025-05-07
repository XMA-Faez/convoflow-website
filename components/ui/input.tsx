"use client";

import React, { forwardRef, useState } from "react";
import { CheckCircle, AlertCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  showValidIcon?: boolean;
  isValid?: boolean;
  variant?: "default" | "outlined" | "filled";
  required?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      label,
      error,
      icon,
      showValidIcon = true,
      isValid = false,
      variant = "default",
      required = false,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(!!props.value);

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      props.onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      props.onBlur?.(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setHasValue(!!e.target.value);
      props.onChange?.(e);
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
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50">
              {icon}
            </div>
          )}
          <input
            type={type}
            className={cn(
              variantStyles[variant],
              icon ? "pl-10" : "pl-4",
              error ? "border-destructive" : "",
              className
            )}
            ref={ref}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            {...props}
          />
          <AnimatePresence>
            {hasValue && isValid && showValidIcon && !error && (
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

Input.displayName = "Input";

export { Input };