"use client";

import React, { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, X } from 'lucide-react';

const ALL_PRODUCTS = [
  { title: "K1 Max AI Fast", price: "$899.00", image: "/k1-max-new.png", category: "fdm", tag: "Flagship" },
  { title: "Ender-3 V3 Plus", price: "$479.00", image: "https://img.creality.com/p/1200x1200/ender-3-v3-plus.png", category: "fdm", tag: "New" },
  { title: "Ender-3 V3 SE", price: "$199.00", image: "https://img.creality.com/p/1200x1200/ender-3-v3-se.png", category: "fdm", tag: "Best Seller" },
  { title: "CR-10 SE", price: "$459.00", image: "https://img.creality.com/p/1200x1200/cr-10-se.png", category: "fdm" },
  { title: "HALOT-MAGE PRO", price: "$599.00", image: "https://img.creality.com/p/1200x1200/halot-mage-pro.png", category: "resin", tag: "8K High Speed" },
  { title: "HALOT-MAGE", price: "$399.00", image: "https://img.creality.com/p/1200x1200/halot-mage.png", category: "resin" },
  { title: "Falcon2 40W", price: "$1,299.00", image: "https://img.creality.com/p/1200x1200/falcon2-40w.png", category: "laser", tag: "Powerful" },
  { title: "Hyper Series PLA", price: "$25.00", image: "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?q=80&w=1974&auto=format&fit=crop", category: "materials" },
  { title: "Sonic Pad", price: "$159.00", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop", category: "accessories" },
];

const Catalog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Products" },
    { id: "fdm", name: "FDM Printers" },
    { id: "resin", name: "Resin Printers" },
    { id: "laser", name: "Laser Engravers" },
    { id: "materials", name: "Materials" },
    { id: "accessories", name: "Accessories" },
  ];

  const filteredProducts = useMemo(() => {
    return ALL_PRODUCTS.filter(product => {
      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === "all" || product.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-bold mb-2">Product Catalog</h1>
            <p className="text-gray-500">Explore our full range of 3D printing solutions.</p>
          </div>
          
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <Input 
              placeholder="Search products..." 
              className="pl-10 rounded-full h-12 border-gray-200 focus:ring-blue-600"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X size={18} />
              </button>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <Button
              key={cat.id}
              variant={activeCategory === cat.id ? "default" : "outline"}
              className={`rounded-full px-6 ${activeCategory === cat.id ? 'bg-blue-600 hover:bg-blue-700' : 'hover:border-blue-600 hover:text-blue-600'}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.name}
            </Button>
          ))}
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Filter className="text-gray-300" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">No products found</h3>
            <p className="text-gray-500">Try adjusting your search or filters.</p>
            <Button 
              variant="link" 
              className="mt-4 text-blue-600"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
            >
              Clear all filters
            </Button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Catalog;