"use client";

import { useState, useEffect } from "react";
import { Clock, Truck, MapPin } from "lucide-react";

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
    <div className="bg-teal-primary text-white shadow-md relative z-20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          <div className="flex items-center gap-3 bg-teal-dark px-4 py-2 rounded-lg border border-teal-deepest">
            <div className={`w-3 h-3 rounded-full animate-pulse ${isOpen ? "bg-green-400" : "bg-red-500"}`}></div>
            <span className="font-bold text-sm uppercase tracking-wider">{isOpen ? "Open Now" : "Closed Currently"}</span>
            <span className="text-white/70 text-xs hidden sm:inline">• 10 AM – 1 AM</span>
          </div>

          <div className="flex items-center gap-2 text-sm sm:text-base font-semibold">
            <Truck className="w-5 h-5 text-yellow-accent" />
            <span>FREE Home / Office Delivery</span>
          </div>

          <div className="flex items-center gap-2 text-sm sm:text-base font-medium text-white/80">
            <MapPin className="w-5 h-5 text-yellow-accent" />
            <span className="hidden sm:inline">Shabiya 10, MBZ City, Abu Dhabi</span>
            <span className="sm:hidden">MBZ City, Abu Dhabi</span>
          </div>

        </div>
      </div>
    </div>
  );
}
