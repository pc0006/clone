import React from 'react';
import { ShareIcon, HeartIcon } from '@/components/ui/Icons';

interface TitleSectionProps {
  title: string;
  location: string;
}

export const TitleSection: React.FC<TitleSectionProps> = ({ title, location }) => {
  return (
    <div className="pt-6 pb-4">
      {/* Property Title */}
      <h1 className="text-[26px] leading-[30px] font-semibold text-[#222222] mb-1">
        {title}
      </h1>
      
      {/* Sub-header: Location and Actions */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mt-2">
        <div className="text-[15px] font-medium text-[#222222] underline cursor-pointer hover:text-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-[#222222] rounded-sm">
          {location}
        </div>
        
        {/* Share and Save Controls */}
        <div className="flex items-center gap-4 text-[14px] font-medium text-[#222222]">
          <button className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#222222]">
            <ShareIcon className="w-4 h-4" />
            <span className="underline">Share</span>
          </button>
          
          <button className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#222222]">
            <HeartIcon className="w-4 h-4" />
            <span className="underline">Save</span>
          </button>
        </div>
      </div>
    </div>
  );
};
