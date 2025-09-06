import React from 'react';

export const BackgroundCircles = () => (
  <div className="absolute top-1/2 left-1/2 w-[65.875rem] aspect-square border border-white/10 rounded-full -translate-x-1/2 -translate-y-1/2">
    <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
    <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
    <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
  </div>
);

export const BottomLine = () => (
  <div className="hidden absolute top-[55.25rem] left-10 right-10 h-0.25 bg-gradient-to-r from-transparent via-white/20 to-transparent lg:block" />
);

export const Gradient = () => (
  <div className="absolute top-0 -left-[10rem] w-[56.625rem] h-[56.625rem] opacity-50 mix-blend-color-dodge pointer-events-none">
    <div className="absolute top-1/2 left-1/2 w-[58.85rem] h-[58.85rem] bg-gradient-conic from-blue-500 via-purple-500 to-cyan-500 rounded-full -translate-x-3/4 -translate-y-1/2"></div>
  </div>
);