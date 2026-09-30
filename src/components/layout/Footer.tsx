import React from 'react';

export const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 py-8">
      <div className="max-w-[1280px] mx-auto px-10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <div className="flex gap-4">
          <span>© 2024 Airbnb Clone, Inc.</span>
          <span className="hover:underline cursor-pointer">Terms</span>
          <span className="hover:underline cursor-pointer">Sitemap</span>
          <span className="hover:underline cursor-pointer">Privacy</span>
        </div>
        
        <div className="flex gap-4 font-semibold text-gray-900">
          <span className="hover:underline cursor-pointer">English (US)</span>
          <span className="hover:underline cursor-pointer">$ USD</span>
          <span className="hover:underline cursor-pointer">Support & resources</span>
        </div>
      </div>
    </footer>
  );
};
