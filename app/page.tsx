import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBanner from "@/components/TrustBanner";
import FeaturedSection from "@/components/FeaturedSection";
import MenuSection from "@/components/MenuSection";
import HealthyCorner from "@/components/HealthyCorner";
import KidsZone from "@/components/KidsZone";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

import { getMenuData } from "@/lib/menuDb";

export default async function Home() {
  const menuItems = getMenuData();

  return (
    <main className="min-h-screen bg-off-white">
      <Navbar />
      <HeroSection />
      <TrustBanner />
      
      {/* Featured Items - Charcoal & Mandi Spotlight */}
      <FeaturedSection />
      
      {/* Interactive Menu Grid */}
      <MenuSection initialItems={menuItems} />
      
      {/* Specialty Sections */}
      <HealthyCorner />
      <KidsZone />
      
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
