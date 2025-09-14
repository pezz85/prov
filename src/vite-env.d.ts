/// <reference types="vite/client" />

// Type declarations for image files
type ImageModule = {
  default: string;
};

declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.gif';
declare module '*.webp';
declare module '*.svg';
declare module '*.ico';
declare module '*.bmp';
