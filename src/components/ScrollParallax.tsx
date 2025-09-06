import React, { useEffect, useRef, useState } from 'react';

interface ScrollParallaxProps {
  children: React.ReactNode;
  isAbsolutelyPositioned?: boolean;
  strength?: number;
}

export const ScrollParallax: React.FC<ScrollParallaxProps> = ({
  children,
  isAbsolutelyPositioned = false,
  strength = 0.5,
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const scrolled = window.pageYOffset;
        const parallax = scrolled * strength;
        setOffset(parallax);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [strength]);

  return (
    <div
      ref={elementRef}
      style={{
        transform: `translateY(${offset}px)`,
        position: isAbsolutelyPositioned ? 'absolute' : 'relative',
      }}
    >
      {children}
    </div>
  );
};