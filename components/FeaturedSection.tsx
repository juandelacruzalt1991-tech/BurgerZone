"use client";

import { motion } from "framer-motion";
import { Flame } from "lucide-react";

export default function FeaturedSection() {
  const features = [
    {
      title: "Chicken Spicy Charcoal",
      arabic: "دجاج على الفحم حار",
      prices: "AED 15 / 22 / 42",
      badge: "Signature",
      bgClass: "from-orange-500 to-red-600",
    },
    {
      title: "Full Charcoal Mandi",
      arabic: "دجاج مندي على الفحم كامل",
      prices: "AED 43.00",
      badge: "Best Seller",
      bgClass: "from-teal-600 to-teal-800",
    },
    {
      title: "Dynamite Chicken",
      arabic: "دجاج على الفحم ديناميت",
      prices: "AED 16 / 22 / 42",
      badge: "Trending",
      bgClass: "from-amber-400 to-orange-500",
    }
  ];

  return (
    <section className="py-20 bg-charcoal text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <Flame className="w-8 h-8 text-orange-500" />
          <h2 className="text-orange-500 font-bold tracking-wider uppercase text-sm">Fresh Off The Grill</h2>
        </div>
        <h3 className="font-heading font-black text-4xl md:text-5xl text-white mb-12">
          Charcoal & <span className="text-yellow-accent">Mandi Specials</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-3xl p-1 bg-gradient-to-br ${item.bgClass} shadow-2xl relative group`}
            >
              <div className="bg-charcoal/90 backdrop-blur-sm h-full w-full rounded-[23px] p-8 flex flex-col items-center text-center justify-center relative overflow-hidden">
                
                {/* Abstract pattern inside card */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent mix-blend-overlay"></div>
                
                <div className="absolute top-4 right-4 bg-yellow-accent text-charcoal text-xs font-bold px-3 py-1 rounded-full z-10">
                  {item.badge}
                </div>
                
                <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Flame className={`w-10 h-10 ${i === 1 ? 'text-teal-400' : 'text-orange-400'}`} />
                </div>
                
                <h4 className="font-bold text-2xl mb-1">{item.title}</h4>
                <p className="font-medium text-gray-400 mb-6 font-arabic" dir="rtl">{item.arabic}</p>
                <div className="mt-auto font-black text-xl text-yellow-accent">
                  {item.prices}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
