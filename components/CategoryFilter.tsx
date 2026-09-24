"use client";

import { useRef } from "react";
import { Category, CATEGORIES } from "@/data/menu";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CategoryFilterProps {
  selectedCategory: Category | "All";
  onSelectCategory: (category: Category | "All") => void;
}

export default function CategoryFilter({ selectedCategory, onSelectCategory }: CategoryFilterProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full sticky top-[68px] z-30 transition-all duration-300 group/nav">
      <div className="absolute inset-0 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm"></div>
      
      <div className="container mx-auto px-4 relative z-10 py-4">
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto hide-scrollbar gap-3 pb-1 scroll-smooth px-2 sm:px-0"
        >
          <button
            onClick={() => onSelectCategory("All")}
            className={`relative whitespace-nowrap px-6 py-2.5 rounded-full font-heading font-bold text-sm transition-colors duration-300 flex-shrink-0 ${
              selectedCategory === "All" ? "text-white" : "text-gray-500 hover:text-charcoal bg-gray-100/50"
            }`}
          >
            {selectedCategory === "All" && (
              <motion.div 
                layoutId="activeCategory"
                className="absolute inset-0 bg-teal-primary rounded-full shadow-lg shadow-teal-500/20"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">All Items</span>
          </button>
          
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={`relative whitespace-nowrap px-6 py-2.5 rounded-full font-heading font-bold text-sm transition-colors duration-300 flex-shrink-0 ${
                selectedCategory === category ? "text-white" : "text-gray-500 hover:text-charcoal bg-gray-100/50"
              }`}
            >
              {selectedCategory === category && (
                <motion.div 
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-teal-primary rounded-full shadow-lg shadow-teal-500/20"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          ))}
          {/* Spacer to prevent aggressive cutoff at the end */}
          <div className="min-w-[20px] flex-shrink-0"></div>
        </div>
        
        {/* Navigation Buttons for the Filter */}
        <button 
          onClick={() => scroll("left")}
          className="absolute left-1 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-md border border-gray-100 text-teal-primary opacity-0 group-hover/nav:opacity-100 transition-opacity z-20 hover:bg-gray-50"
          aria-label="Scroll Categories Left"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button 
          onClick={() => scroll("right")}
          className="absolute right-1 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-md border border-gray-100 text-teal-primary opacity-0 group-hover/nav:opacity-100 transition-opacity z-20 hover:bg-gray-50"
          aria-label="Scroll Categories Right"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      
      {/* Edge Fades - Left purely relative to container bounds to give gradient hint */}
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-10"></div>
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10"></div>
    </div>
  );
}
