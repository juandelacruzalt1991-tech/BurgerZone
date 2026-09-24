"use client";

import { useState } from "react";
import { Category, MenuItem } from "@/data/menu";
import CategoryFilter from "./CategoryFilter";
import MenuCard from "./MenuCard";
import { Search, Filter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MenuSection({ initialItems }: { initialItems: MenuItem[] }) {
  const [selectedCategory, setSelectedCategory] = useState<Category | "All">("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = initialItems.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.arabicName.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="menu" className="py-20 bg-off-white min-h-screen">
      <div className="container mx-auto px-4 md:px-6 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-3"
            >
              <div className="h-px w-8 bg-teal-primary"></div>
              <h2 className="text-teal-primary font-bold tracking-[0.2em] uppercase text-xs">Exquisite Selection</h2>
            </motion.div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-heading font-black text-5xl md:text-6xl text-charcoal"
            >
              The <span className="text-teal-dark">Flavor</span> Menu
            </motion.h3>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-2"
          >
            <div className="relative w-full md:w-80 group">
              <input
                type="text"
                placeholder="Search flavors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200/50 focus:outline-none focus:ring-2 focus:ring-teal-primary/20 focus:border-teal-primary bg-white transition-all shadow-sm group-hover:shadow-md"
              />
              <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 group-focus-within:text-teal-primary transition-colors" />
            </div>
            {filteredItems.length > 0 && (
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-2">
                Showing {filteredItems.length} delicacies
              </span>
            )}
          </motion.div>
        </div>
      </div>

      <CategoryFilter 
        selectedCategory={selectedCategory} 
        onSelectCategory={setSelectedCategory} 
      />

      <div className="container mx-auto px-4 md:px-6 mt-12">
        <AnimatePresence mode="popLayout">
          {filteredItems.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              key="no-results"
              className="flex flex-col items-center justify-center py-32 text-gray-400 bg-white/50 rounded-3xl border-2 border-dashed border-gray-200"
            >
              <div className="bg-gray-100 p-6 rounded-full mb-6">
                <Filter className="w-12 h-12 text-gray-300" />
              </div>
              <p className="text-xl font-heading font-bold text-gray-600 mb-2">No flavors found</p>
              <p className="text-sm text-gray-400 mb-6">Try adjusting your filters or search query.</p>
              <button 
                onClick={() => {setSearchQuery(""); setSelectedCategory("All");}}
                className="bg-teal-primary text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-teal-500/20 hover:bg-teal-dark transition-all active:scale-95"
              >
                Clear all filters
              </button>
            </motion.div>
          ) : (
            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <MenuCard item={item} index={index} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
