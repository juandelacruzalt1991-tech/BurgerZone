"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button after scrolling down 300px
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          href="https://wa.me/971585263635"
          target="_blank"
          rel="noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center group"
          aria-label="Chat on WhatsApp"
        >
          <div className="absolute inset-0 bg-white rounded-full scale-0 group-hover:scale-100 opacity-20 transition-transform origin-center"></div>
          <MessageCircle className="w-8 h-8 pointer-events-none" />
          
          {/* Tooltip on hover */}
          <span className="absolute right-full mr-4 bg-white text-charcoal font-semibold text-sm px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Order via WhatsApp
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
