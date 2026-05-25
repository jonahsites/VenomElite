import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  variant?: 'primary' | 'secondary' | 'dark' | 'venom';
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function FlowButton({ 
  text = "Modern Button", 
  variant = "venom",
  className = "",
  ...props 
}: FlowButtonProps) {
  // Base classes that match the slick transition animation the user specified
  const baseClasses = "group relative flex items-center justify-center gap-1 overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:rounded-[12px] active:scale-[0.95] cursor-pointer text-xs uppercase tracking-wider font-mono font-bold italic";
  
  // Custom styled variants matching our premium athletic color scheme
  const variantClasses = {
    venom: "rounded-[100px] border-[1.5px] border-venom/30 bg-transparent px-8 py-3.5 text-venom hover:border-transparent hover:text-black",
    dark: "rounded-[100px] border-[1.5px] border-white/10 bg-black/40 px-8 py-3.5 text-white hover:border-transparent hover:text-[#050505]",
    secondary: "rounded-[100px] border-[1.5px] border-[#333333]/40 bg-transparent px-8 py-3 text-[#111111] hover:border-transparent hover:text-white",
    primary: "rounded-[100px] border-[1.5px] border-white/15 bg-transparent px-8 py-3.5 text-white hover:border-transparent hover:text-[#050505]"
  };

  const selectedVariant = variantClasses[variant] || variantClasses.venom;
  
  // Keep the animated background circle styled per variant
  const circleColor = variant === 'venom' ? 'bg-venom' : 'bg-white';
  const arrowColor = variant === 'venom' 
    ? 'stroke-venom group-hover:stroke-black' 
    : 'stroke-white group-hover:stroke-black';

  return (
    <button 
      className={`${baseClasses} ${selectedVariant} ${className}`}
      {...props}
    >
      {/* Left arrow (arr-2) */}
      <ArrowRight 
        className={`absolute w-4 h-4 left-[-25%] fill-none z-[9] group-hover:left-4 transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] ${arrowColor}`} 
      />

      {/* Text */}
      <span className="relative z-[1] -translate-x-3 group-hover:translate-x-3 transition-all duration-[800ms] ease-out">
        {text}
      </span>

      {/* Animated Circle Expanding Background */}
      <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 ${circleColor} rounded-[50%] opacity-0 group-hover:w-[260px] group-hover:h-[260px] group-hover:opacity-100 transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)]`}></span>

      {/* Right arrow (arr-1) */}
      <ArrowRight 
        className={`absolute w-4 h-4 right-4 fill-none z-[9] group-hover:right-[-25%] transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] ${arrowColor}`} 
      />
    </button>
  );
}
