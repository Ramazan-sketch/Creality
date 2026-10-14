"use client";

import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2">
            <Link to="/" className="text-2xl font-bold text-white mb-6 block">CREALITY</Link>
            <p className="max-w-xs mb-8">
              Creality is a world-leading 3D printer manufacturer, dedicated to developing the most affordable and high-quality 3D printers for everyone.
            </p>
            <div className="flex gap-4">
              <Facebook className="hover:text-white cursor-pointer transition-colors" size={20} />
              <Twitter className="hover:text-white cursor-pointer transition-colors" size={20} />
              <Instagram className="hover:text-white cursor-pointer transition-colors" size={20} />
              <Youtube className="hover:text-white cursor-pointer transition-colors" size={20} />
              <Github className="hover:text-white cursor-pointer transition-colors" size={20} />
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Products</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/catalog" className="hover:text-white transition-colors">FDM 3D Printers</Link></li>
              <li><Link to="/catalog" className="hover:text-white transition-colors">Resin 3D Printers</Link></li>
              <li><Link to="/catalog" className="hover:text-white transition-colors">Laser Engravers</Link></li>
              <li><Link to="/catalog" className="hover:text-white transition-colors">Accessories</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/support" className="hover:text-white transition-colors">Download Center</Link></li>
              <li><Link to="/support" className="hover:text-white transition-colors">After-sales Policy</Link></li>
              <li><Link to="/support" className="hover:text-white transition-colors">Community</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Newsroom</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Sustainability</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2024 Shenzhen Creality 3D Technology Co., Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;