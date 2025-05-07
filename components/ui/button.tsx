import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

// Enhanced button styles for modern design
const buttonStyles = {
  base: "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none relative overflow-hidden",
  
  variants: {
    default: "bg-primary text-white shadow-primary/20 hover:shadow-primary/40 hover:bg-primary/90 hover:translate-y-[-2px]",
    destructive: "bg-[#9F1239] text-white shadow-md hover:opacity-90 hover:shadow-lg hover:translate-y-[-2px]",
    outline: "border border-border bg-card/50 shadow-sm hover:border-primary/30 hover:text-primary hover:shadow-primary/20 backdrop-blur-sm",
    secondary: "bg-secondary text-white shadow-secondary/20 hover:opacity-90 hover:shadow-secondary/40 hover:translate-y-[-2px]",
    accent: "bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 hover:shadow-accent/20",
    ghost: "hover:bg-card hover:text-primary",
    link: "text-primary hover:underline underline-offset-4 hover:text-primary/80",
    gradient: "bg-gradient-main text-white shadow-lg hover:shadow-primary/30 hover:translate-y-[-2px]",
    glow: "bg-primary text-white shadow-glow animate-border-glow hover:translate-y-[-2px] hover:shadow-glow-lg",
    'outline-glow': "border border-primary/30 bg-pink-950/50 text-white shadow-primary/20 hover:border-primary/50 hover:shadow-glow hover:text-primary",
    'neo': "neo-brutalism text-white",
    glass: "glass-card text-white hover:bg-card/70",
  },
  
  sizes: {
    default: "h-10 px-5 py-2.5",
    sm: "h-9 rounded-lg px-4 py-2 text-xs",
    lg: "h-12 rounded-xl px-8 py-3 text-base",
    xl: "h-14 rounded-xl px-10 py-4 text-lg",
    icon: "h-10 w-10",
  }
};

const buttonVariants = cva(
  buttonStyles.base,
  {
    variants: {
      variant: {
        default: buttonStyles.variants.default,
        destructive: buttonStyles.variants.destructive,
        outline: buttonStyles.variants.outline,
        secondary: buttonStyles.variants.secondary,
        accent: buttonStyles.variants.accent,
        ghost: buttonStyles.variants.ghost,
        link: buttonStyles.variants.link,
        gradient: buttonStyles.variants.gradient,
        glow: buttonStyles.variants.glow,
        "outline-glow": buttonStyles.variants["outline-glow"],
        neo: buttonStyles.variants.neo,
        glass: buttonStyles.variants.glass,
      },
      size: {
        default: buttonStyles.sizes.default,
        sm: buttonStyles.sizes.sm,
        lg: buttonStyles.sizes.lg,
        xl: buttonStyles.sizes.xl,
        icon: buttonStyles.sizes.icon,
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
