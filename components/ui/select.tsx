"use client";

import React, { forwardRef, useState } from "react";
import { CheckCircle, AlertCircle, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  showValidIcon?: boolean;
  isValid?: boolean;
  variant?: "default" | "outlined" | "filled";
  required?: boolean;
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className,
      label,
      error,
      icon,
      showValidIcon = true,
      isValid = false,
      variant = "default",
      required = false,
      options,
      value,
      onChange,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = (e: React.FocusEvent<HTMLSelectElement>) => {
      setIsFocused(true);
      props.onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLSelectElement>) => {
      setIsFocused(false);
      props.onBlur?.(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      onChange?.(e.target.value);
    };

    const variantStyles = {
      default:
        "bg-card/60 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-primary/50 focus:shadow-glow transition-all appearance-none",
      outlined:
        "bg-transparent backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-primary/50 focus:shadow-glow transition-all appearance-none",
      filled:
        "bg-[#1e1e32]/70 backdrop-blur-sm border border-transparent rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-primary/50 focus:shadow-glow transition-all appearance-none",
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
          <select
            className={cn(
              variantStyles[variant],
              icon ? "pl-10" : "pl-4",
              error ? "border-destructive" : "",
              "w-full h-12",
              className
            )}
            ref={ref}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            value={value}
            {...props}
          >
            <option value="" className="bg-card text-white/50">
              {props.placeholder || "Select an option"}
            </option>
            {options.map((option) => (
              <option key={option.value} value={option.value} className="bg-card">
                {option.label}
              </option>
            ))}
          </select>
          
          {/* Custom select arrow */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
            <ChevronDown className="h-5 w-5" />
          </div>
          
          <AnimatePresence>
            {value && isValid && showValidIcon && !error && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="absolute right-12 top-1/2 -translate-y-1/2 text-primary"
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

Select.displayName = "Select";

export { Select };