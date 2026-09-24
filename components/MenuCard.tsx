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
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.4) }}
      className="bg-white rounded-3xl p-5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100/50 hover:shadow-[0_20px_40px_-15px_rgba(26,171,160,0.15)] transition-all duration-500 group flex flex-col h-full relative"
    >
      <div className="relative mb-5 overflow-hidden rounded-2xl bg-gray-50 aspect-[4/3] flex items-center justify-center">
        <motion.div 
          className={`w-full h-full flex items-center justify-center transition-all duration-700 group-hover:scale-110 ${colorClass}`}
        >
          <span className="font-heading font-black text-6xl opacity-20 select-none group-hover:opacity-40 transition-opacity duration-500">
            {item.name.charAt(0)}
          </span>
        </motion.div>
        
        {item.badge && (
          <motion.div 
            animate={{ 
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute top-3 right-3 bg-yellow-accent text-teal-deepest text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md z-10 border border-white/20"
          >
            {item.badge}
          </motion.div>
        )}
      </div>

      <div className="flex-1 flex flex-col">
        <div className="flex justify-between items-start gap-2 mb-1">
          <h3 className="font-heading font-bold text-lg text-gray-900 leading-tight group-hover:text-teal-primary transition-colors duration-300">
            {item.name}
          </h3>
        </div>
        <p className="text-sm font-medium text-gray-400 mb-4 font-arabic opacity-80" dir="rtl">
          {item.arabicName}
        </p>
        
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-0.5">Price</span>
            <div className="flex items-center gap-1 font-heading font-black text-xl text-teal-deepest">
              <span className="text-[10px] font-bold text-teal-primary/50">AED</span>
              {displayPrice}
            </div>
          </div>
          <motion.button 
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            className="bg-teal-primary/10 hover:bg-yellow-accent text-teal-deepest p-3 rounded-2xl transition-colors duration-300 shadow-sm"
          >
            <Plus className="w-5 h-5 stroke-[3]" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
