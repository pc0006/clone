import React from 'react';
import Link from 'next/link';
import { LogoIcon, SearchIcon, GlobeIcon, MenuIcon, UserIcon } from '@/components/ui/Icons';

export const Header = () => {
  return (
    <header className="border-b border-gray-200 bg-white">
      {/* Max width matching Airbnb's typical ~1120px + padding */}
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-10 min-h-[80px] flex items-center justify-between py-4 sm:py-0">
        
        {/* Logo Area (Hidden on very small mobile) */}
        <div className="hidden md:flex flex-1 items-center">
          <Link href="/" className="flex items-center gap-2 text-[#FF385C] hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-[#222222] rounded-md">
            <LogoIcon className="w-8 h-8" />
            <span className="hidden lg:block text-[#FF385C] font-bold text-xl tracking-tight">airbnb</span>
          </Link>
        </div>
        
        {/* Center Search Bar */}
        <div className="flex-1 md:flex-initial flex items-center border border-gray-300 rounded-full shadow-[0_3px_10px_rgba(0,0,0,0.1)] md:shadow-sm hover:shadow-md transition-shadow cursor-pointer divide-x divide-gray-300 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-gray-300 w-full md:w-auto">
          <button className="flex-1 md:flex-none px-4 py-2 text-sm font-semibold text-[#222222] hover:bg-gray-100 rounded-l-full transition-colors h-12 flex items-center justify-center md:justify-start focus:outline-none">
            Anywhere
          </button>
          <button className="hidden sm:flex px-4 py-2 text-sm font-semibold text-[#222222] hover:bg-gray-100 transition-colors h-12 items-center focus:outline-none">
            Any week
          </button>
          <button className="pl-4 pr-2 py-2 text-sm text-gray-500 hover:bg-gray-100 rounded-r-full transition-colors h-12 flex items-center justify-center md:justify-start gap-3 focus:outline-none">
            <span className="hidden sm:block">Add guests</span>
            <span className="sm:hidden text-[#222222] font-semibold">Any week</span>
            <div className="bg-[#FF385C] text-white p-2 rounded-full">
              <SearchIcon className="w-[14px] h-[14px]" />
            </div>
          </button>
        </div>

        {/* Right Controls (Hidden on mobile) */}
        <div className="hidden md:flex flex-1 items-center justify-end gap-1">
          <a href="#" className="hidden lg:block text-sm font-semibold text-[#222222] hover:bg-gray-100 px-4 py-3 rounded-full cursor-pointer transition-colors focus:outline-none focus:bg-gray-100">
            Airbnb your home
          </a>
          <button className="flex items-center justify-center w-11 h-11 text-[#222222] hover:bg-gray-100 rounded-full transition-colors focus:outline-none focus:bg-gray-100 mr-1" aria-label="Language and region">
            <GlobeIcon className="w-[18px] h-[18px]" />
          </button>
          <button className="flex items-center gap-3 border border-gray-300 rounded-full p-1.5 pl-3 hover:shadow-md transition-shadow cursor-pointer bg-white focus:outline-none focus:ring-2 focus:ring-[#222222]">
            <MenuIcon className="w-4 h-4 text-[#222222]" />
            <div className="text-gray-500 overflow-hidden rounded-full">
              <UserIcon className="w-[30px] h-[30px]" />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};
