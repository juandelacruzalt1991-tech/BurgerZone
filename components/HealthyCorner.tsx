"use client";

import { motion } from "framer-motion";
import { Dumbbell, Leaf } from "lucide-react";

export default function HealthyCorner() {
  return (
    <section id="healthy" className="py-20 bg-[#f4fbf9] relative overflow-hidden">
      {/* Decorative leaf */}
      <div className="absolute -right-10 top-10 text-teal-primary/10 rotate-45 transform scale-[3]">
        <Leaf size={120} />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-teal-primary/20 aspect-square rounded-full flex items-center justify-center p-8 relative z-10"
            >
              <div className="w-full h-full bg-teal-primary text-white rounded-full flex items-center justify-center overflow-hidden relative shadow-2xl">
                 <div className="text-center p-8 relative z-10">
                   <Dumbbell className="w-16 h-16 mx-auto mb-4 text-yellow-accent" />
                   <h4 className="font-heading font-black text-3xl mb-2">Gym Meal</h4>
                   <p className="font-medium">Grilled Chicken Breast + Juice + Salad</p>
                   <p className="font-black text-yellow-accent text-2xl mt-4">AED 17.00</p>
                 </div>
                 {/* Decorative circles */}
                 <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-8 translate-x-8"></div>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-3 mb-4">
              <Leaf className="w-8 h-8 text-teal-primary" />
              <h2 className="text-teal-primary font-bold tracking-wider uppercase text-sm">Eat Well, Feel Well</h2>
            </div>
            <h3 className="font-heading font-black text-4xl md:text-5xl text-charcoal mb-6">
              The <span className="text-teal-primary">Healthy</span> Spot
            </h3>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-lg">
              Maintaining your diet shouldn't mean sacrificing flavor. Discover our selection of fresh salads and protein-packed meals designed to keep you energized.
            </p>

            <div className="grid gap-4">
              {[
                { name: "Chicken Salad", arabic: "سلطة دجاج", price: "15.00" },
                { name: "Green Salad", arabic: "سلطة خضراء", price: "8.00" },
                { name: "Avocado Smoothie", arabic: "سموذي أفوكادو", price: "10.00" }
              ].map((item, i) => (
                <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-teal-50 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-gray-900">{item.name}</h4>
                    <p className="text-sm text-gray-500 font-arabic" dir="rtl">{item.arabic}</p>
                  </div>
                  <div className="font-bold text-teal-dark">AED {item.price}</div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <a href="#menu" className="inline-flex items-center justify-center px-6 py-3 border-2 border-teal-primary text-teal-primary font-bold rounded-full hover:bg-teal-primary hover:text-white transition-colors">
                View All Healthy Options
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
