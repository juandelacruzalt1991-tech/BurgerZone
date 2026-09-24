"use client";

import { motion } from "framer-motion";
import { Bike, ShoppingBag, UtensilsCrossed, PhoneCall, ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-teal-deepest">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: 'url("/images/menu/Burger Zone Shabiya 10 Menu_Page_01.jpg")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-teal-deepest via-teal-dark/90 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-teal-deepest via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 py-12 md:py-24">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-yellow-accent font-bold tracking-wider mb-2 uppercase text-sm md:text-base selection:bg-teal-primary selection:text-white">
              MBZ City, Abu Dhabi
            </h2>
            <h1 className="font-heading font-black text-6xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tight mb-6 select-none">
              <span className="block burger-zone-title">Burger</span>
              <span className="block burger-zone-title -mt-2 md:-mt-4">Zone</span>
            </h1>
            <p className="text-xl md:text-2xl text-off-white font-medium mb-2 w-max">
              Grill & Cafeteria
            </p>
            <p className="text-gray-300 text-base md:text-lg mb-10 max-w-lg leading-relaxed">
              Fresh & Tasty — Sandwiches & Juices, Exclusive Charcoal! Discover our extensive menu with over 190+ delicious items crafted for every craving.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <a 
              href="tel:+97126663635"
              className="bg-yellow-accent hover:bg-yellow-warm text-charcoal font-bold py-4 px-8 rounded-full transition-transform hover:-translate-y-1 hover:shadow-xl flex items-center justify-center gap-3 text-lg"
            >
              <Bike className="w-6 h-6" />
              Order Delivery
            </a>
            <a 
              href="#menu"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-bold py-4 px-8 rounded-full transition-all flex items-center justify-center gap-3 text-lg"
            >
              <UtensilsCrossed className="w-6 h-6" />
              View Menu
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-6 md:gap-10"
          >
            <div className="flex items-center gap-2 text-white/90 font-medium">
              <div className="bg-teal-primary p-2.5 rounded-xl text-yellow-accent shadow-inner">
                <Bike className="w-5 h-5" />
              </div>
              <span>Delivery</span>
            </div>
            <div className="flex items-center gap-2 text-white/90 font-medium">
              <div className="bg-teal-primary p-2.5 rounded-xl text-yellow-accent shadow-inner">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <span>Takeaway</span>
            </div>
            <div className="flex items-center gap-2 text-white/90 font-medium">
              <div className="bg-teal-primary p-2.5 rounded-xl text-yellow-accent shadow-inner">
                <UtensilsCrossed className="w-5 h-5" />
              </div>
              <span>Dine In</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce z-10 hidden md:block">
        <a href="#menu" className="text-white/70 hover:text-yellow-accent bg-black/20 p-3 rounded-full backdrop-blur-sm transition-colors">
          <ArrowDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
}
