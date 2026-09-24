"use client";

import { useState, useEffect } from "react";
import { Clock, Truck, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function TrustBanner() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    // Check if currently open based on UAE time (GMT+4)
    // Hours: 10:00 AM to 1:00 AM
    const checkOpenStatus = () => {
      const uaeTime = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Dubai" }));
      const hours = uaeTime.getHours();
      
      // Open from 10 (10 AM) until 1 AM (0)
      if (hours >= 10 || hours === 0) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    checkOpenStatus();
    // Recheck every minute
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-teal-primary text-white shadow-md relative z-20 overflow-hidden"
    >
      {/* Decorative background element */}
      <motion.div 
        animate={{ 
          x: [-100, 100],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
      />

      <div className="container mx-auto px-4 py-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-3 bg-teal-dark px-5 py-2.5 rounded-2xl border border-teal-deepest shadow-inner group"
          >
            <div className={`w-3.5 h-3.5 rounded-full ${isOpen ? "bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)]" : "bg-red-500"} ${isOpen && "animate-pulse"}`}></div>
            <div className="flex flex-col">
              <span className="font-heading font-black text-sm uppercase tracking-wider">{isOpen ? "Open Now" : "Closed Currently"}</span>
              <span className="text-white/60 text-[10px] font-bold">10:00 AM – 01:00 AM</span>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 text-sm sm:text-base font-bold bg-white/5 py-2 px-4 rounded-xl border border-white/10"
          >
            <div className="bg-yellow-accent p-2 rounded-lg text-teal-deepest shadow-lg">
              <Truck className="w-5 h-5 animate-bounce-slow" />
            </div>
            <div className="flex flex-col">
              <span className="text-yellow-accent text-[10px] uppercase tracking-widest leading-none mb-1">Service</span>
              <span>FREE Home & Office Delivery</span>
            </div>
          </motion.div>

          <motion.a 
            href="#location"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 text-sm sm:text-base font-medium text-white/90 group"
          >
            <div className="bg-teal-deepest p-2 rounded-lg group-hover:bg-yellow-accent group-hover:text-teal-deepest transition-colors duration-300">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-white/40 text-[10px] uppercase tracking-widest leading-none mb-1">Our Location</span>
              <span className="group-hover:text-white transition-colors">Shabiya 10, MBZ City, Abu Dhabi</span>
            </div>
          </motion.a>

        </div>
      </div>
    </motion.div>
  );
}
