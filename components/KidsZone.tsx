"use client";

import { Baby, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function KidsZone() {
  const kidsMeals = [
    { title: "Kids Strips", arabic: "ستريبس أطفال", price: "10.00", color: "bg-pink-100 border-pink-200 text-pink-700" },
    { title: "Kids Burger", arabic: "برجر أطفال", price: "9.00", color: "bg-blue-100 border-blue-200 text-blue-700" },
    { title: "Kids Mix", arabic: "مشكل أطفال", price: "12.00", color: "bg-purple-100 border-purple-200 text-purple-700" },
    { title: "Kids Fried Chicken", arabic: "دجاج بروست أطفال", price: "10.00", color: "bg-orange-100 border-orange-200 text-orange-700" },
  ];

  return (
    <section id="kids" className="py-20 bg-yellow-accent/10 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Star className="text-yellow-warm fill-yellow-warm w-6 h-6 animate-pulse" />
            <h2 className="text-teal-primary font-bold tracking-wider uppercase text-sm">Fun & Yummy</h2>
            <Star className="text-yellow-warm fill-yellow-warm w-6 h-6 animate-pulse" />
          </div>
          <h3 className="font-heading font-black text-4xl md:text-5xl text-charcoal flex items-center justify-center gap-4">
            Kids <span className="bg-yellow-accent px-4 py-1 rounded-2xl rotate-3 inline-block">Zone</span>
            <Baby className="w-10 h-10 text-teal-dark" />
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {kidsMeals.map((meal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, rotate: -5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 3 }}
              className={`rounded-3xl p-6 border-4 shadow-lg text-center flex flex-col ${meal.color}`}
            >
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden border-2 border-inherit">
                 <span className="font-heading font-black text-4xl">{meal.title.charAt(5)}</span>
              </div>
              <h4 className="font-black text-xl mb-1">{meal.title}</h4>
              <p className="font-bold mb-4 font-arabic" dir="rtl">{meal.arabic}</p>
              <div className="mt-auto bg-white/50 py-2 rounded-xl border border-white font-black text-xl">
                AED {meal.price}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
