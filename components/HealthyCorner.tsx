"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Dumbbell, Leaf, ChevronRight, ChevronLeft } from "lucide-react";

export default function HealthyCorner() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };
  return (
    <section id="healthy" className="py-24 bg-[#f4fbf9] relative overflow-hidden">
      {/* Animated Decorative leaves */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [45, 50, 45] }} 
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-10 top-20 text-teal-primary/10 transform scale-[3]"
      >
        <Leaf size={120} />
      </motion.div>
      <motion.div 
        animate={{ y: [0, 30, 0], rotate: [-20, -10, -20] }} 
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -left-20 bottom-10 text-teal-primary/5 transform scale-[4]"
      >
        <Leaf size={120} />
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-5/12 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", bounce: 0.4, duration: 1 }}
              className="relative z-10"
            >
              <div className="absolute inset-0 bg-teal-primary/20 rounded-[3rem] -rotate-6 scale-105 transform origin-center"></div>
              <div className="bg-gradient-to-br from-teal-500 to-teal-primary text-white rounded-[3rem] flex items-center justify-center overflow-hidden relative shadow-2xl p-10 aspect-[4/5]">
                 
                 {/* Decorative background elements inside the badge */}
                 <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl -translate-y-16 translate-x-16 pt-10"></div>
                 <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-accent/20 rounded-full blur-xl translate-y-12 -translate-x-12"></div>

                 <div className="text-center relative z-10 flex flex-col items-center">
                   <div className="bg-white/20 p-5 rounded-full backdrop-blur-md mb-6 border border-white/30 shadow-lg">
                     <Dumbbell className="w-12 h-12 text-yellow-accent" />
                   </div>
                   <h4 className="font-heading font-black text-4xl mb-3 drop-shadow-md">Gym Meal</h4>
                   <p className="font-medium text-white/90 text-lg mb-8 max-w-[200px] leading-snug">Grilled Chicken Breast + Juice + Salad</p>
                   
                   <div className="bg-white text-teal-deepest px-6 py-3 rounded-2xl font-black text-2xl shadow-xl hover:scale-105 transition-transform cursor-pointer">
                     <span className="text-sm font-bold text-teal-primary/60 mr-1">AED</span>17.00
                   </div>
                 </div>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-7/12">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-teal-primary/10 p-2 rounded-xl">
                  <Leaf className="w-6 h-6 text-teal-primary" />
                </div>
                <h2 className="text-teal-primary font-bold tracking-[0.2em] uppercase text-xs">Eat Well, Feel Well</h2>
              </div>
              <h3 className="font-heading font-black text-5xl md:text-6xl text-charcoal mb-6 leading-tight">
                The <span className="text-teal-primary relative">
                  Healthy
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-teal-primary/20 -z-10 rounded-full"></span>
                </span> Spot
              </h3>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed max-w-xl">
                Maintaining your diet shouldn't mean sacrificing flavor. Discover our selection of fresh salads and protein-packed meals designed to keep you energized.
              </p>

              {/* Horizontal sliding cards with Navigation Buttons */}
              <div className="relative group/slider overflow-visible">
                <div 
                  ref={scrollContainerRef}
                  className="flex overflow-x-auto hide-scrollbar gap-5 pb-16 -mx-4 px-4 scroll-smooth snap-x"
                >
                  {[
                    { name: "Chicken Salad", arabic: "سلطة دجاج", price: "15.00", icon: "🥗" },
                    { name: "Green Salad", arabic: "سلطة خضراء", price: "8.00", icon: "🥬" },
                    { name: "Avocado Smoothie", arabic: "سموذي أفوكادو", price: "10.00", icon: "🥑" },
                    { name: "Fruit Salad", arabic: "سلطة فواكه", price: "12.00", icon: "🍓" }
                  ].map((item, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(26,171,160,0.15)" }}
                      className="min-w-[260px] md:min-w-[280px] bg-white p-6 rounded-3xl shadow-sm border border-teal-50/50 flex flex-col snap-start cursor-pointer transition-all duration-300"
                    >
                      <div className="text-4xl mb-4 bg-teal-50 w-16 h-16 flex items-center justify-center rounded-2xl">{item.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-heading font-bold text-xl text-gray-900 mb-1">{item.name}</h4>
                        <p className="text-sm text-gray-400 font-arabic opacity-80 mb-4" dir="rtl">{item.arabic}</p>
                      </div>
                      <div className="font-black text-xl text-teal-primary flex items-end gap-1">
                        <span className="text-xs font-bold text-gray-400 pb-1">AED</span>{item.price}
                      </div>
                    </motion.div>
                  ))}
                  {/* Spacer block strictly to ensure right-side padding applies inside the scrolling area */}
                  <div className="min-w-[1px] flex-shrink-0"></div>
                </div>

                {/* Slider Navigation Buttons */}
                <button 
                  onClick={() => scroll("left")}
                  className="absolute left-0 top-1/2 -translate-y-1/2 md:-ml-6 w-12 h-12 bg-white text-teal-primary rounded-full shadow-xl border border-teal-50 flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-all z-30 hover:bg-teal-primary hover:text-white"
                  aria-label="Previous items"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={() => scroll("right")}
                  className="absolute right-0 top-1/2 -translate-y-1/2 md:-mr-6 w-12 h-12 bg-white text-teal-primary rounded-full shadow-xl border border-teal-50 flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-all z-30 hover:bg-teal-primary hover:text-white"
                  aria-label="Next items"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
              
              <motion.div 
                whileHover={{ x: 5 }}
                className="mt-6"
              >
                <a href="#menu" className="inline-flex items-center gap-2 font-bold text-teal-dark hover:text-teal-primary transition-colors group">
                  <span className="border-b-2 border-teal-primary/30 group-hover:border-teal-primary pb-1 transition-colors">Explore All Healthy Options</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
