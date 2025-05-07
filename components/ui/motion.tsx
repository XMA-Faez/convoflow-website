import { motion, MotionProps } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedContainerProps extends MotionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const FadeIn = ({ 
  children, 
  className = '', 
  delay = 0,
  ...props 
}: AnimatedContainerProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const SlideUp = ({ 
  children, 
  className = '', 
  delay = 0,
  ...props 
}: AnimatedContainerProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const SlideIn = ({ 
  children, 
  className = '', 
  delay = 0,
  ...props 
}: AnimatedContainerProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ 
        duration: 0.5, 
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const Stagger = ({ 
  children, 
  className = '', 
  delay = 0,
  ...props 
}: AnimatedContainerProps) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.15,
            delayChildren: delay,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ 
  children, 
  className = '', 
  ...props 
}: AnimatedContainerProps) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1]
          }
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const ScaleIn = ({ 
  children, 
  className = '', 
  delay = 0,
  ...props 
}: AnimatedContainerProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.5, 
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};