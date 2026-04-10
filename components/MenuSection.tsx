"use client";

import { useState } from "react";
import { Category, MENU_ITEMS } from "@/data/menu";
import CategoryFilter from "./CategoryFilter";
import MenuCard from "./MenuCard";
import { Search } from "lucide-react";

export default function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState<Category | "All">("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.arabicName.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="menu" className="py-16 bg-off-white min-h-screen">
      <div className="container mx-auto px-4 md:px-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-teal-primary font-bold tracking-wider mb-2 uppercase text-sm">Discover</h2>
            <h3 className="font-heading font-black text-4xl md:text-5xl text-charcoal">
              Our <span className="text-teal-dark">Menu</span>
            </h3>
          </div>
          
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Search dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-primary focus:border-transparent bg-white transition-all shadow-sm"
            />
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>
        </div>
      </div>

      <CategoryFilter 
        selectedCategory={selectedCategory} 
        onSelectCategory={setSelectedCategory} 
      />

      <div className="container mx-auto px-4 md:px-6">
        {filteredItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-gray-400">
            <Search className="w-16 h-16 mb-4 opacity-50" />
            <p className="text-lg font-medium">No items found.</p>
            <button 
              onClick={() => {setSearchQuery(""); setSelectedCategory("All");}}
              className="mt-4 text-teal-primary hover:underline font-medium"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <MenuCard key={item.id} item={item} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
