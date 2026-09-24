"use client";

import { useState, useEffect } from "react";
import { Utensils, Heart, Baby, MapPin, Menu, X, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Our Menu", href: "#menu", icon: Utensils },
    { name: "Healthy Corner", href: "#healthy", icon: Heart },
    { name: "Kids Zone", href: "#kids", icon: Baby },
    { name: "Location", href: "#location", icon: MapPin },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-teal-dark shadow-lg py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="font-heading font-black text-2xl tracking-tight text-white flex items-center gap-2 group"
            >
              <span className="bg-yellow-accent text-teal-deepest px-2 py-1 rounded-md transform -skew-x-12 transition-transform group-hover:skew-x-0 duration-300">BURGER</span>
              <span className="group-hover:text-yellow-accent transition-colors duration-300">ZONE</span>
            </motion.a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ y: -2 }}
                  className="text-white hover:text-yellow-accent font-medium text-sm transition-colors flex items-center gap-1.5 relative group"
                >
                  <link.icon className="w-4 h-4 transition-transform group-hover:rotate-12" />
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-accent transition-all group-hover:w-full"></span>
                </motion.a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <motion.a 
                href="tel:+97126663635"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(255, 215, 0, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-accent hover:bg-yellow-warm text-charcoal font-bold py-2.5 px-6 rounded-full transition-colors flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                Order Now
              </motion.a>
            </div>

            {/* Mobile Menu Toggle */}
            <motion.button
              whileTap={{ scale: 0.8 }}
              className="md:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-50 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-teal-dark z-50 p-6 flex flex-col shadow-2xl md:hidden block"
            >
              <div className="flex justify-between items-center mb-10">
                <span className="font-heading font-black text-xl text-yellow-accent">MENU</span>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white bg-white/10 p-2 rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-white text-lg font-medium flex items-center gap-4 pb-4 border-b border-white/10"
                  >
                    <div className="bg-teal-primary p-2 rounded-lg">
                      <link.icon className="w-5 h-5" />
                    </div>
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="mt-auto">
                <a 
                  href="tel:+97126663635"
                  className="w-full bg-yellow-accent text-charcoal font-bold py-4 rounded-xl flex items-center justify-center gap-2 text-lg shadow-lg"
                >
                  <PhoneCall className="w-5 h-5" />
                  Call to Order
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
