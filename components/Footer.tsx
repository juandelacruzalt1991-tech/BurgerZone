import { MapPin, Phone, MessageCircle, Clock } from "lucide-react";export default function Footer() {
  return (
    <footer className="bg-teal-deepest text-white pt-16 pb-8 border-t-[8px] border-yellow-accent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Col */}
          <div>
            <h3 className="font-heading font-black text-3xl mb-4 text-white">
              BURGER <span className="text-yellow-accent">ZONE</span>
            </h3>
            <p className="text-gray-300 mb-6 max-w-sm">
              Eat Well, Feel Well. Premium quality sandwiches, juices, and exclusive charcoal grills in the heart of MBZ City.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-yellow-accent hover:text-teal-deepest transition-colors flex items-center justify-center">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-yellow-accent hover:text-teal-deepest transition-colors flex items-center justify-center">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-yellow-accent">Get In Touch</h4>
            <ul className="space-y-4 text-gray-300">
              <li>
                <a href="tel:+97126663635" className="flex items-center gap-3 hover:text-yellow-accent transition-colors">
                  <div className="bg-teal-dark p-2 rounded-lg">
                    <Phone className="w-4 h-4" />
                  </div>
                  02 66 63 635
                </a>
              </li>
              <li>
                <a href="https://wa.me/971585263635" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-green-400 transition-colors">
                  <div className="bg-teal-dark p-2 rounded-lg">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  058 5263 635 (WhatsApp)
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-teal-dark p-2 rounded-lg mt-1">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Near Etihad Railway Station,<br />Shabiya 10, MBZ City - Abu Dhabi</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-teal-dark p-2 rounded-lg">
                  <Clock className="w-4 h-4" />
                </div>
                <span>10 AM – 1 AM Daily</span>
              </li>
            </ul>
          </div>

          {/* Navigation Col */}
          <div>
             <h4 className="font-bold text-lg mb-4 text-yellow-accent">Quick Links</h4>
             <ul className="space-y-2 text-gray-300">
               <li><a href="#menu" className="hover:text-yellow-accent">Our Menu</a></li>
               <li><a href="#healthy" className="hover:text-yellow-accent">Healthy Corner</a></li>
               <li><a href="#kids" className="hover:text-yellow-accent">Kids Zone</a></li>
               <li><a href="#" className="hover:text-yellow-accent">Delivery Info</a></li>
             </ul>
          </div>

          {/* Map Col */}
          <div id="location" className="w-full h-48 lg:h-full rounded-2xl overflow-hidden border border-white/10 shadow-inner">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14536.817290130836!2d54.54228965000001!3d24.37424685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e412bd6c905ed%3A0xc6cb5cebc48a73be!2sBurger%20Zone%20grile%20%26%20cafeteria!5e0!3m2!1sen!2sae!4v1714123456789!5m2!1sen!2sae" 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: "200px" }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Burger Zone Location Map"
            ></iframe>
          </div>

        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Burger Zone Grill & Cafeteria. All rights reserved.</p>
          <div className="mt-2 md:mt-0 flex gap-4">
            <span className="flex items-center gap-1">5% VAT Included in Menu Prices</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
