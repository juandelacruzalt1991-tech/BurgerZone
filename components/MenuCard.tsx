"use client";

import { MenuItem } from "@/data/menu";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

interface MenuCardProps {
  item: MenuItem;
  index: number;
}

export default function MenuCard({ item, index }: MenuCardProps) {
  // Extract main price if it's a multi-price item (e.g., "15/22/42")
  const displayPrice = item.price.includes("/") ? `From ${item.price.split("/")[0]}` : item.price;
  
  // Assign a somewhat random but deterministic pastel background color for the icon placeholder based on item ID
  const colors = [
    "bg-teal-50 text-teal-600",
    "bg-blue-50 text-blue-600",
    "bg-yellow-50 text-yellow-600",
    "bg-orange-50 text-orange-600",
    "bg-red-50 text-red-600",
    "bg-purple-50 text-purple-600",
  ];
  const colorClass = colors[parseInt(item.id.replace(/\D/g, "")) % colors.length || 0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.5) }} // Cap delay for large lists
      className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
    >
      <div className="relative mb-4 overflow-hidden rounded-xl bg-gray-100 aspect-[4/3] flex items-center justify-center">
        <div className={`w-full h-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110 ${colorClass}`}>
          {/* Using a placeholder SVG pattern / food emoji based on category would be ideal, using a prominent font character for now */}
          <span className="font-heading font-black text-6xl opacity-30 select-none">
            {item.name.charAt(0)}
          </span>
        </div>
        
        {item.badge && (
          <div className="absolute top-3 right-3 bg-yellow-accent text-teal-deepest text-xs font-bold px-2.5 py-1 rounded-full shadow-sm z-10">
            {item.badge}
          </div>
        )}
      </div>

      <div className="flex-1 flex flex-col">
        <div className="flex justify-between items-start gap-2 mb-1">
          <h3 className="font-bold text-gray-900 leading-tight group-hover:text-teal-primary transition-colors">
            {item.name}
          </h3>
        </div>
        <p className="text-sm font-medium text-gray-500 mb-3 font-arabic" dir="rtl">
          {item.arabicName}
        </p>
        
        <div className="mt-auto flex items-center justify-between pt-2 border-t border-gray-50">
          <div className="flex items-center gap-1 font-bold text-lg text-teal-dark">
            <span className="text-xs font-normal text-gray-400">AED</span>
            {displayPrice}
          </div>
          <button className="bg-off-white hover:bg-yellow-accent text-teal-dark p-2 rounded-full transition-colors active:scale-95">
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
