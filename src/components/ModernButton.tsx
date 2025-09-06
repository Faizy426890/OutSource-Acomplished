import React from 'react';

interface ModernButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'medium' | 'large';
  icon?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const ModernButton: React.FC<ModernButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  icon,
  onClick,
  disabled = false,
  className = '',
}) => {
  const baseClasses = 'group relative inline-flex items-center justify-center font-bold transition-all duration-500 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 overflow-hidden';
  
  const sizeClasses = {
    medium: 'px-8 py-4 text-base rounded-full',
    large: 'px-12 py-5 text-lg rounded-full',
  };

  const variantClasses = {
    primary: `
      bg-gradient-to-r from-white  to-white text-black border-2 border-transparent
      hover:from-gray-50 hover:via-white hover:to-gray-50
      hover:shadow-2xl hover:shadow-white/40
      focus:ring-white/60
      before:absolute before:inset-0 before:rounded-full 
      before:bg-gradient-to-r before:from-blue-400 before:via-purple-500 before:to-cyan-400 
      before:p-[3px] before:opacity-0 hover:before:opacity-100 
      before:transition-all before:duration-500 before:-z-10
      after:absolute after:inset-0 after:rounded-full
      after:bg-gradient-to-r after:from-blue-500/20 after:via-purple-500/20 after:to-cyan-500/20
      after:blur-xl after:opacity-0 hover:after:opacity-100
      after:transition-all after:duration-500 after:-z-20
      shadow-lg shadow-white/20
    `,
    secondary: `
      bg-gradient-to-r from-slate-900 via-black to-slate-900 text-white 
      border-2 border-white/30 backdrop-blur-sm
      hover:from-black hover:via-gray-900 hover:to-black
      hover:border-white/50 hover:shadow-2xl hover:shadow-black/60
      focus:ring-white/40
      relative overflow-hidden
      before:absolute before:inset-0 before:rounded-full
      before:bg-gradient-to-r before:from-blue-500/10 before:via-purple-500/10 before:to-cyan-500/10
      before:translate-x-[-200%] hover:before:translate-x-[200%] 
      before:transition-transform before:duration-1000 before:skew-x-12
      after:absolute after:inset-0 after:rounded-full
      after:bg-gradient-to-r after:from-white/5 after:via-white/10 after:to-white/5
      after:opacity-0 hover:after:opacity-100
      after:transition-all after:duration-500
      shadow-lg shadow-black/30
    `,
  };

  const disabledClasses = 'opacity-50 cursor-not-allowed hover:scale-100 active:scale-100';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseClasses}
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${disabled ? disabledClasses : ''}
        ${className}
      `}
    >
      {/* Animated shine effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
      
      {/* Button content */}
      <span className="relative z-10 flex items-center font-bold tracking-wide">
        {children}
        {icon && (
          <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
            {icon}
          </span>
        )}
      </span>
      
      {/* Pulsing glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 via-purple-500/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500"></div>
    </button>
  );
};

export default ModernButton;