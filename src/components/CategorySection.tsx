"use client";

import React from 'react';
import ProductCard from './ProductCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CategorySection = () => {
  const categories = [
    {
      id: "fdm",
      name: "FDM 3D Printers",
      products: [
        {
          title: "K1 Max AI Fast",
          price: "$899.00",
          image: "/k1-max-new.png",
          tag: "Flagship"
        },
        {
          title: "Ender-3 V3 Plus",
          price: "$479.00",
          image: "https://img.creality.com/p/1200x1200/ender-3-v3-plus.png",
          tag: "New"
        },
        {
          title: "Ender-3 V3 SE",
          price: "$199.00",
          image: "/ender-3-v3-se.webp",
          tag: "Best Seller"
        },
        {
          title: "CR-10 SE",
          price: "$459.00",
          image: "https://img.creality.com/p/1200x1200/cr-10-se.png"
        }
      ]
    },
    {
      id: "resin",
      name: "Resin 3D Printers",
      products: [
        {
          title: "HALOT-MAGE PRO",
          price: "$599.00",
          image: "https://img.creality.com/p/1200x1200/halot-mage-pro.png",
          tag: "8K High Speed"
        },
        {
          title: "HALOT-MAGE",
          price: "$399.00",
          image: "/halot-mage.webp"
        },
        {
          title: "HALOT-SKY",
          price: "$799.00",
          image: "/halot-x1-neo.webp"
        },
        {
          title: "UW-02 Washing Machine",
          price: "$199.00",
          image: "https://img.creality.com/p/1200x1200/uw-02.png"
        }
      ]
    },
    {
      id: "laser",
      name: "Laser Engravers",
      products: [
        {
          title: "Falcon2 40W",
          price: "$1,299.00",
          image: "https://img.creality.com/p/1200x1200/falcon2-40w.png",
          tag: "Powerful"
        },
        {
          title: "Falcon2 22W",
          price: "$699.00",
          image: "https://img.creality.com/p/1200x1200/falcon2-22w.png"
        },
        {
          title: "CR-Laser Falcon 10W",
          price: "$399.00",
          image: "https://img.creality.com/p/1200x1200/cr-laser-falcon.png"
        },
        {
          title: "Falcon2 Pro 60W",
          price: "$1,899.00",
          image: "https://img.creality.com/p/1200x1200/falcon2-pro-60w.png",
          tag: "Professional"
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Explore our comprehensive range of 3D printing solutions, from entry-level to professional industrial machines.
          </p>
        </div>

        <Tabs defaultValue="fdm" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-gray-100 p-1 rounded-full h-14">
              {categories.map((cat) => (
                <TabsTrigger 
                  key={cat.id} 
                  value={cat.id}
                  className="rounded-full px-8 h-12 data-[state=active]:bg-white data-[state=active]:shadow-sm text-base font-semibold"
                >
                  {cat.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((cat) => (
            <TabsContent key={cat.id} value={cat.id} className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {cat.products.map((product, index) => (
                  <ProductCard key={index} {...product} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-[400px] rounded-[40px] overflow-hidden group cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              alt="Materials"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-10 flex flex-col justify-end">
              <h3 className="text-3xl font-bold text-white mb-2">Premium Materials</h3>
              <p className="text-gray-200 mb-6">High-quality filaments and resins for perfect results.</p>
              <button className="w-fit bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-blue-600 hover:text-white transition-colors">
                Shop Materials
              </button>
            </div>
          </div>
          <div className="relative h-[400px] rounded-[40px] overflow-hidden group cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1565034946487-077786996e27?q=80&w=2070&auto=format&fit=crop" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              alt="Ecosystem"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-10 flex flex-col justify-end">
              <h3 className="text-3xl font-bold text-white mb-2">Creality Ecosystem</h3>
              <p className="text-gray-200 mb-6">Smart accessories and software for a seamless workflow.</p>
              <button className="w-fit bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-blue-600 hover:text-white transition-colors">
                Explore More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;