"use client";

import { MapPin, Phone, MessageCircle, Clock, ArrowUpCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="location" className="bg-teal-deepest text-white pt-20 pb-10 border-t-[12px] border-yellow-accent relative overflow-hidden scroll-mt-10">
      {/* Subtle Background Glow */}
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-yellow-accent/5 rounded-full blur-[100px]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="space-y-6">
            <h3 className="font-heading font-black text-4xl mb-4 text-white hover:text-yellow-accent transition-colors cursor-default">
              BURGER <span className="text-yellow-accent">ZONE</span>
            </h3>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Eat Well, Feel Well. Premium quality sandwiches, juices, and exclusive charcoal grills in the heart of MBZ City since 2012.
            </p>
            <div className="flex gap-4">
              {[
                { 
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                    </svg>
                  ), 
                  href: "#" 
                },
                { 
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                  ), 
                  href: "#" 
                },
                { icon: <MessageCircle className="w-5 h-5" />, href: "https://wa.me/971585263635" },
              ].map((social, i) => (
                <motion.a 
                  key={i}
                  href={social.href} 
                  target="_blank"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="bg-white/5 border border-white/10 p-3 rounded-2xl hover:bg-yellow-accent hover:text-teal-deepest transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-yellow-accent/20"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="font-heading font-black text-xl mb-8 text-yellow-accent uppercase tracking-widest">Get In Touch</h4>
            <ul className="space-y-5 text-gray-300">
              <li>
                <a href="tel:+97126663635" className="group flex items-center gap-4 hover:text-white transition-colors">
                  <div className="bg-teal-dark/50 p-2.5 rounded-xl border border-white/5 group-hover:border-yellow-accent/50 transition-colors">
                    <Phone className="w-5 h-5 text-yellow-accent" />
                  </div>
                  <span className="font-medium text-lg">02 66 63 635</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/971585263635" target="_blank" rel="noreferrer" className="group flex items-center gap-4 hover:text-white transition-colors">
                  <div className="bg-teal-dark/50 p-2.5 rounded-xl border border-white/5 group-hover:border-green-400/50 transition-colors">
                    <MessageCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium text-lg">058 5263 635</span>
                    <span className="text-xs text-green-400/60 font-bold uppercase tracking-tighter">WhatsApp Support</span>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-teal-dark/50 p-2.5 rounded-xl border border-white/5">
                  <MapPin className="w-5 h-5 text-red-400" />
                </div>
                <span className="leading-relaxed">Near Etihad Railway Station,<br />Shabiya 10, MBZ City<br />Abu Dhabi, UAE</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours & Links */}
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="font-heading font-black text-xl mb-8 text-yellow-accent uppercase tracking-widest">Store Hours</h4>
              <div className="flex items-center gap-4 text-gray-300 bg-white/5 p-4 rounded-2xl border border-white/10 inline-flex">
                <Clock className="w-6 h-6 text-yellow-accent" />
                <div>
                  <div className="font-bold text-white">10 AM – 1 AM</div>
                  <div className="text-xs opacity-60">Open Daily for Dine-in & Delivery</div>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-bold text-sm text-gray-500 uppercase tracking-[0.2em] mb-4">Explore</h4>
              <ul className="flex flex-wrap gap-x-6 gap-y-2 text-gray-400 font-medium">
                <li><a href="#menu" className="hover:text-yellow-accent transition-colors">Our Menu</a></li>
                <li><a href="#healthy" className="hover:text-yellow-accent transition-colors">Healthy</a></li>
                <li><a href="#kids" className="hover:text-yellow-accent transition-colors">Kids Zone</a></li>
                <li><a href="#location" className="hover:text-yellow-accent transition-colors">Location</a></li>
              </ul>
            </div>
          </div>

          {/* Live Map Frame */}
          <div className="relative group">
            <div className="absolute inset-0 bg-yellow-accent/20 rounded-[32px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative h-full min-h-[180px] rounded-[32px] overflow-hidden border border-white/10 shadow-2xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14536.817290130836!2d54.54228965000001!3d24.37424685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e412bd6c905ed%3A0xc6cb5cebc48a73be!2sBurger%20Zone%20grile%20%26%20cafeteria!5e0!3m2!1sen!2sae!4v1714123456789!5m2!1sen!2sae" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                title="Burger Zone Location Map"
              ></iframe>
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=Burger+Zone+grill+%26+cafeteria+Shabiya+10+MBZ+City+Abu+Dhabi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute inset-0 bg-charcoal/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <div className="bg-yellow-accent text-teal-deepest px-4 py-2 rounded-full font-bold text-sm shadow-xl">Open Directions</div>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Burger Zone Grill & Cafeteria. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-[10px] text-gray-600 font-bold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 bg-yellow-accent rounded-full"></span>
              5% VAT Included in Menu Prices
            </div>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-gray-500 hover:text-yellow-accent transition-colors"
          >
            <span className="text-xs font-bold uppercase tracking-widest">Back to top</span>
            <ArrowUpCircle className="w-8 h-8 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}

