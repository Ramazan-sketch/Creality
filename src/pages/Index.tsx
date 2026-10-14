"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import HeroCarousel from '@/components/HeroCarousel';
import CategorySection from '@/components/CategorySection';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from '@/context/LanguageContext';

const Index = () => {
  const { t } = useTranslation();
  
  const featuredProducts = [
    {
      title: "K1 Max AI Fast 3D Printer",
      price: "$899.00",
      image: "/k1-max-new.png",
      tag: t("hero.new_arrival")
    },
    {
      title: "Ender-3 V3 Plus",
      price: "$479.00",
      image: "https://img.creality.com/p/1200x1200/ender-3-v3-plus.png",
      tag: t("hero.new_arrival")
    },
    {
      title: "HALOT-MAGE PRO",
      price: "$599.00",
      image: "https://img.creality.com/p/1200x1200/halot-mage-pro.png",
      tag: "8K High Speed"
    },
    {
      title: "Falcon2 40W",
      price: "$1,299.00",
      image: "https://img.creality.com/p/1200x1200/falcon2-40w.png",
      tag: "Laser"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        <HeroCarousel />
        
        <CategorySection />

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">{t("featured.title")}</h2>
                <p className="text-gray-500 text-lg">{t("featured.desc")}</p>
              </div>
              <Link to="/catalog">
                <Button variant="outline" className="rounded-full border-2 hover:bg-blue-600 hover:text-white transition-all">
                  {t("featured.view_all")} <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="bg-blue-600 rounded-[40px] overflow-hidden relative">
              <div className="absolute inset-0 opacity-20">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
                  alt="Background" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10 p-12 md:p-24 text-center md:text-left max-w-3xl">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">{t("community.title")}</h2>
                <p className="text-xl text-blue-100 mb-10">
                  {t("community.desc")}
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 rounded-full px-10 h-14 text-lg font-bold">
                    {t("community.join")}
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-full px-10 h-14 text-lg font-bold">
                    {t("hero.learn_more")}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;