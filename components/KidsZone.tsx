"use client";

import { useRef } from "react";
import { Baby, Star, Sparkles, PartyPopper, Smile, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function KidsZone() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const kidsMeals = [
    { 
      title: "Kids Strips", 
      arabic: "ستريبس أطفال", 
      price: "10.00", 
      color: "from-pink-100 to-pink-200 border-pink-300 text-pink-700",
      accent: "bg-pink-500",
      icon: <Sparkles className="w-10 h-10" />
    },
    { 
      title: "Kids Burger", 
      arabic: "برجر أطفال", 
      price: "9.00", 
      color: "from-blue-100 to-blue-200 border-blue-300 text-blue-700",
      accent: "bg-blue-500",
      icon: <Smile className="w-10 h-10" />
    },
    { 
      title: "Kids Mix", 
      arabic: "مشكل أطفال", 
      price: "12.00", 
      color: "from-purple-100 to-purple-200 border-purple-300 text-purple-700",
      accent: "bg-purple-500",
      icon: <PartyPopper className="w-10 h-10" />
    },
    { 
      title: "Kids Fried Chicken", 
      arabic: "دجاج بروست أطفال", 
      price: "10.00", 
      color: "from-orange-100 to-orange-200 border-orange-300 text-orange-700",
      accent: "bg-orange-500",
      icon: <Heart className="w-10 h-10" />
    },
  ];

  // Floating background elements generator
  const floatingElements = [
    { icon: <Star />, className: "top-10 left-[10%]", delay: 0 },
    { icon: <Sparkles />, className: "top-20 right-[15%]", delay: 1 },
    { icon: <Heart />, className: "bottom-20 left-[5%]", delay: 2 },
    { icon: <Star />, className: "bottom-10 right-[10%]", delay: 1.5 },
  ];

  return (
    <section id="kids" className="py-24 bg-yellow-accent/5 relative overflow-hidden">
      {/* Playful Floating Background Elements */}
      {floatingElements.map((el, i) => (
        <motion.div
          key={i}
          className={`absolute ${el.className} text-yellow-accent/20 hidden md:block`}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: el.delay,
            ease: "easeInOut"
          }}
        >
          {el.icon}
        </motion.div>
      ))}

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div 
            className="flex justify-center items-center gap-2 mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
          >
            <Star className="text-yellow-warm fill-yellow-warm w-6 h-6" />
            <h2 className="text-teal-primary font-bold tracking-wider uppercase text-sm">Fun & Yummy Bites</h2>
            <Star className="text-yellow-warm fill-yellow-warm w-6 h-6" />
          </motion.div>
          <motion.h3 
            className="font-heading font-black text-5xl md:text-6xl text-charcoal flex items-center justify-center gap-4 py-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
          >
            Kids 
            <motion.span 
              className="bg-yellow-accent px-6 py-3 rounded-2xl -rotate-3 inline-block shadow-lg shadow-yellow-accent/20 mx-1"
              animate={{ rotate: [-3, 3, -3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              Zone
            </motion.span>
            <Baby className="w-12 h-12 text-teal-dark ml-2" />
          </motion.h3>
        </div>

        {/* Interactive Slider Area */}
        <div className="relative group/slider overflow-visible">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto lg:grid lg:grid-cols-4 hide-scrollbar gap-8 pb-16 -mx-4 px-4 lg:mx-0 lg:px-0 scroll-smooth snap-x lg:snap-none"
          >
            {kidsMeals.map((meal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, delay: index * 0.1, bounce: 0.5 }}
                whileHover={{ y: -15, scale: 1.05 }}
                className={`min-w-[280px] md:min-w-[320px] lg:min-w-0 snap-start rounded-[40px] p-8 border-b-8 shadow-2xl bg-gradient-to-br flex flex-col items-center text-center cursor-pointer relative overflow-hidden group/card ${meal.color}`}
              >
                {/* Playful Circle Background */}
                <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-10 ${meal.accent} transition-transform duration-500 group-hover/card:scale-150`}></div>
                
                <motion.div 
                  className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center mb-6 relative z-10 shadow-xl border-4 border-white/50"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                >
                  <div className="transition-transform duration-300 group-hover/card:scale-125">
                    {meal.icon}
                  </div>
                </motion.div>
                
                <h4 className="font-heading font-black text-2xl mb-1 text-charcoal group-hover/card:text-teal-dark transition-colors">{meal.title}</h4>
                <p className="font-bold text-lg mb-6 font-arabic opacity-70" dir="rtl">{meal.arabic}</p>
                
                <div className="mt-auto w-full">
                  <div className="bg-white/80 backdrop-blur-sm py-3 px-6 rounded-2xl border-2 border-white shadow-inner font-heading font-black text-2xl text-charcoal flex items-baseline justify-center gap-1 group-hover/card:scale-110 transition-transform">
                    <span className="text-xs uppercase opacity-40">AED</span>
                    {meal.price}
                  </div>
                </div>
              </motion.div>
            ))}
            {/* End spacer for mobile scroll */}
            <div className="min-w-[20px] lg:hidden flex-shrink-0"></div>
          </div>

          {/* Navigation Controls (Mobile/Tablet Only) */}
          <button 
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 md:-ml-6 w-12 h-12 bg-white text-charcoal rounded-full shadow-2xl border border-gray-100 flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-all z-30 lg:hidden"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 md:-mr-6 w-12 h-12 bg-white text-charcoal rounded-full shadow-2xl border border-gray-100 flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-all z-30 lg:hidden"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
