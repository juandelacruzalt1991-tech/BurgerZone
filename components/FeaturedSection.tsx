"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Flame, ChevronLeft, ChevronRight } from "lucide-react";

export default function FeaturedSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const features = [
    {
      title: "Chicken Spicy Charcoal",
      arabic: "دجاج على الفحم حار",
      prices: "AED 15 / 22 / 42",
      badge: "Signature",
      bgClass: "from-orange-500 to-red-600",
    },
    {
      title: "Full Charcoal Mandi",
      arabic: "دجاج مندي على الفحم كامل",
      prices: "AED 43.00",
      badge: "Best Seller",
      bgClass: "from-teal-600 to-teal-800",
    },
    {
      title: "Dynamite Chicken",
      arabic: "دجاج على الفحم ديناميت",
      prices: "AED 16 / 22 / 42",
      badge: "Trending",
      bgClass: "from-amber-400 to-orange-500",
    }
  ];

  return (
    <section className="py-20 bg-charcoal text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl text-charcoal"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <Flame className="w-8 h-8 text-orange-500" />
          <h2 className="text-orange-500 font-bold tracking-wider uppercase text-sm">Fresh Off The Grill</h2>
        </div>
        <h3 className="font-heading font-black text-4xl md:text-5xl text-white mb-12">
          Charcoal & <span className="text-yellow-accent">Mandi Specials</span>
        </h3>

        {/* Horizontal sliding cards with Navigation Buttons */}
        <div className="relative group/slider overflow-visible">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto lg:grid lg:grid-cols-3 hide-scrollbar gap-8 pb-16 -mx-4 px-4 lg:mx-0 lg:px-0 scroll-smooth snap-x lg:snap-none"
          >
            {features.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: i * 0.15, type: "spring", bounce: 0.3 }}
                whileHover={{ y: -10 }}
                className={`min-w-[280px] md:min-w-[340px] lg:min-w-0 snap-start rounded-[32px] p-1 bg-gradient-to-br ${item.bgClass} shadow-2xl relative group cursor-pointer lg:w-full`}
              >
                <div className="bg-charcoal/95 backdrop-blur-xl h-full w-full rounded-[28px] p-8 flex flex-col items-center text-center justify-center relative overflow-hidden transition-colors duration-500 group-hover:bg-charcoal/80">
                  
                  {/* Abstract pattern inside card */}
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 to-transparent mix-blend-overlay transition-opacity duration-500 group-hover:opacity-40"></div>
                  
                  {/* Glowing orb behind icon */}
                  <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full blur-[40px] opacity-20 bg-gradient-to-br ${item.bgClass} group-hover:opacity-60 transition-opacity duration-700`}></div>

                  <motion.div 
                    className="absolute top-5 right-5 bg-yellow-accent text-teal-deepest text-[10px] uppercase tracking-widest font-black px-4 py-1.5 rounded-full z-10 shadow-lg shadow-yellow-accent/20"
                    whileHover={{ scale: 1.1 }}
                  >
                    {item.badge}
                  </motion.div>
                  
                  <motion.div 
                    className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 relative z-10 shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                    whileHover={{ rotate: [0, -10, 10, -10, 0], transition: { duration: 0.5 } }}
                  >
                    <Flame className={`w-10 h-10 ${i === 1 ? 'text-teal-400 drop-shadow-[0_0_10px_rgba(45,212,191,0.5)]' : 'text-orange-400 drop-shadow-[0_0_10px_rgba(251,146,60,0.5)]'}`} />
                  </motion.div>
                  
                  <h4 className="font-heading font-black text-3xl mb-2 text-white relative z-10 tracking-tight group-hover:text-yellow-accent transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="font-medium text-gray-400 mb-8 font-arabic opacity-80 relative z-10" dir="rtl">
                    {item.arabic}
                  </p>
                  
                  <div className="mt-auto relative z-10 flex flex-col items-center">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold mb-1">Starting from</span>
                    <div className="font-heading font-black text-2xl text-yellow-accent group-hover:drop-shadow-[0_0_8px_rgba(255,215,0,0.4)] transition-all duration-300">
                      {item.prices}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            {/* Spacer block strictly to ensure right-side padding applies inside the scrolling area */}
            <div className="min-w-[1px] lg:hidden flex-shrink-0"></div>
          </div>

          {/* Slider Navigation Buttons (Hidden on very large screens where grid applies) */}
          <button 
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 md:-ml-8 w-12 h-12 bg-charcoal text-yellow-accent rounded-full shadow-[0_0_20px_rgba(0,0,0,0.6)] border border-white/20 flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-all z-30 hover:bg-yellow-accent hover:text-teal-deepest"
            aria-label="Previous items"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 md:-mr-8 w-12 h-12 bg-charcoal text-yellow-accent rounded-full shadow-[0_0_20px_rgba(0,0,0,0.6)] border border-white/20 flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-all z-30 hover:bg-yellow-accent hover:text-teal-deepest"
            aria-label="Next items"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
