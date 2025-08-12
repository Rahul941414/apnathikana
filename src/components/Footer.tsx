import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, User } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold">🥖</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Apna Thikana</h3>
                <p className="text-sm text-gray-400">APNA THIKANA</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Crafting delicious, fresh-baked goods with love and tradition since 1998.
              Your neighborhood bakery for all occasions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-amber-400 transition-colors">Products</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-amber-400 transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-amber-400 transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Catering</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Special Orders</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Products</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Fresh Bread</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Pastries</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Custom Cakes</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Cookies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Seasonal Items</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Gift Baskets</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-amber-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">24 Simrole, Indore, Madhay Pradesh, 452020</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-amber-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">+91 8504980705</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-amber-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">support@apnathhikana.com</span>
              </div>
              {/* Owner Name */}
              <div className="flex items-center">
                <User className="w-5 h-5 text-amber-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">Owner: Rahul Meena</span>
              </div>
            </div>

            {/* Store Hours */}
            <div className="mt-6">
              <h5 className="font-semibold mb-2">Store Hours</h5>
              <div className="text-sm text-gray-400 space-y-1">
                <p>Mon-Fri: 6:00 AM - 8:00 PM</p>
                <p>Saturday: 7:00 AM - 9:00 PM</p>
                <p>Sunday: 8:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
            <p className="text-gray-400 mb-4">Subscribe to get updates on new products and special offers</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-amber-500"
              />
              <button className="bg-amber-500 text-white px-6 py-2 rounded-r-lg hover:bg-amber-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Apna Thikana. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Terms & Conditions</a>
            <a class="hover:text-indigo-600" href="/refund-cancellation" data-discover="true">Refunds &amp; Cancellation</a>
            <a class="hover:text-indigo-600" href="/refund-policy" data-discover="true">Refund Policy</a>
            <a class="hover:text-indigo-600" href="/cancellation-policy" data-discover="true">Cancellation Policy</a>
            <a href="/privacy#cookies" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
