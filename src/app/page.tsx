import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { TitleSection } from '@/components/listing/TitleSection';
import { listingData } from '@/data/listing';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      
      {/* 1120px max-width is standard for Airbnb listing pages */}
      <main className="flex-1 max-w-[1120px] w-full mx-auto px-6 lg:px-10 pb-6">
        <TitleSection 
          title={listingData.title} 
          location={listingData.location} 
        />
        
        {/* Placeholder for Hero Gallery */}
        <div className="w-full h-[400px] bg-gray-200 rounded-xl mt-4 mb-12 flex items-center justify-center">
          <span className="text-gray-500 font-medium">Hero Image Gallery Placeholder</span>
        </div>

        {/* Placeholder for Details & Booking */}
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4 text-[#222222]">Hosted by {listingData.host.name}</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">{listingData.description}</p>
            <div className="text-gray-500 italic">More implementation coming soon...</div>
          </div>
          <div className="w-full lg:w-[33%] hidden lg:block">
            <div className="sticky top-28 p-6 border border-gray-200 rounded-xl shadow-[0_6px_16px_rgba(0,0,0,0.12)]">
              <div className="text-[22px] font-semibold mb-4 text-[#222222]">${listingData.pricePerNight} <span className="text-base font-normal">night</span></div>
              <div className="bg-gray-100 h-12 w-full rounded-lg mb-4 flex items-center justify-center text-sm text-gray-500">Booking Widget Placeholder</div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
