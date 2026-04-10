"use client";

import { Category, CATEGORIES } from "@/data/menu";
import { motion } from "framer-motion";

interface CategoryFilterProps {
  selectedCategory: Category | "All";
  onSelectCategory: (category: Category | "All") => void;
}

export default function CategoryFilter({ selectedCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <div className="w-full relative bg-white sticky top-[68px] z-30 shadow-sm border-b border-gray-100 py-3 mb-8">
      <div className="container mx-auto px-4">
        <div className="flex overflow-x-auto hide-scrollbar gap-2 pb-1">
          <button
            onClick={() => onSelectCategory("All")}
            className={`whitespace-nowrap px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
              selectedCategory === "All"
                ? "bg-teal-primary text-white shadow-md shadow-teal-500/30"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            All Items
          </button>
          
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={`whitespace-nowrap px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-teal-primary text-white shadow-md shadow-teal-500/30"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      {/* Fade indicators for scrollability */}
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none hidden md:block"></div>
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent pointer-events-none hidden md:block"></div>
    </div>
  );
}
