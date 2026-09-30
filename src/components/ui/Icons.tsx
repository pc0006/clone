import React from 'react';

export const LogoIcon = ({ className = "w-8 h-8 text-[#FF385C]" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 1.57C7.8 1.57 1.14 8.23 1.14 16.43c0 4.1 1.63 7.82 4.26 10.51 2.69 2.76 6.3 4.35 10.15 4.5l.45.02.45-.02c3.85-.15 7.46-1.74 10.15-4.5 2.63-2.69 4.26-6.4 4.26-10.51C30.86 8.23 24.2 1.57 16 1.57zm0 2.29c6.95 0 12.57 5.62 12.57 12.57 0 3.39-1.34 6.46-3.5 8.68-2.22 2.28-5.2 3.59-8.42 3.73l-.65.02-.65-.02c-3.22-.14-6.2-1.45-8.42-3.73-2.16-2.22-3.5-5.29-3.5-8.68 0-6.95 5.62-12.57 12.57-12.57zm0 6c-3.62 0-6.57 2.95-6.57 6.57 0 2.45 1.45 4.5 3.5 5.72v.85h6.14v-.85c2.05-1.22 3.5-3.27 3.5-5.72 0-3.62-2.95-6.57-6.57-6.57zm0 2.29c2.37 0 4.29 1.92 4.29 4.29 0 1.53-.8 2.87-2.02 3.63L17.5 21h-3l-.77-.79C12.5 19.45 11.71 18.11 11.71 16.43c0-2.37 1.92-4.29 4.29-4.29z"/>
  </svg>
);

export const SearchIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"></path>
  </svg>
);

export const GlobeIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="14"></circle>
    <path d="M16 2c-4.4 0-8 6.3-8 14s3.6 14 8 14 8-6.3 8-14S20.4 2 16 2z"></path>
    <path d="M2 16h28"></path>
  </svg>
);

export const MenuIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 16h28M2 24h28M2 8h28"></path>
  </svg>
);

export const UserIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 16c3.3 0 6-2.7 6-6s-2.7-6-6-6-6 2.7-6 6 2.7 6 6 6zM16 18c-5.5 0-11 2.7-11 8v2h22v-2c0-5.3-5.5-8-11-8z"></path>
  </svg>
);

export const ShareIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 2v20M9 9l7-7 7 7M22 17v8H10v-8"></path>
  </svg>
);

export const HeartIcon = ({ className = "w-4 h-4", filled = false }) => (
  <svg className={className} fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 28c-1-1-12-8.4-12-16 0-3.9 3.1-7 7-7 3.3 0 5.4 2.1 5 2.1s1.7-2.1 5-2.1c3.9 0 7 3.1 7 7 0 7.6-11 15-12 16z"></path>
  </svg>
);
