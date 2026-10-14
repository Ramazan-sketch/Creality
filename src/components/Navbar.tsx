"use client";

import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, ChevronDown, Globe } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { showSuccess } from "@/utils/toast";
import PrinterMenu from './PrinterMenu';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from '@/context/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const { t, language, setLanguage } = useTranslation();
  const [cartCount] = useState(0);
  const [isPrintersOpen, setIsPrintersOpen] = useState(false);
  const navigate = useNavigate();

  const handleAction = (action: string) => {
    if (action === "Search") {
      navigate('/catalog');
    } else {
      showSuccess(`${action} feature coming soon!`);
    }
  };

  const navLinks = [
    { name: t("nav.printers"), path: "/catalog", hasDropdown: true },
    { name: t("nav.materials"), path: "/catalog", hasDropdown: false },
    { name: t("nav.about"), path: "/about", hasDropdown: false },
    { name: t("nav.support"), path: "/support", hasDropdown: false },
    { name: t("nav.contact"), path: "/contact", hasDropdown: false },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-2xl font-bold tracking-tighter text-primary hover:opacity-80 transition-opacity">
            CREALITY
          </Link>
          
          <div className="hidden md:flex items-center gap-6 text-sm font-medium h-16">
            {navLinks.map((link) => (
              <div 
                key={link.name}
                className="relative h-full flex items-center"
                onMouseEnter={() => link.hasDropdown && setIsPrintersOpen(true)}
                onMouseLeave={() => link.hasDropdown && setIsPrintersOpen(false)}
              >
                <Link 
                  to={link.path}
                  className="hover:text-blue-600 transition-colors flex items-center gap-1 py-2"
                >
                  {link.name} {link.hasDropdown && <ChevronDown size={14} className={`transition-transform ${isPrintersOpen ? 'rotate-180' : ''}`} />}
                </Link>
                
                {link.hasDropdown && isPrintersOpen && <PrinterMenu />}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="rounded-full gap-2">
                <Globe size={18} />
                <span className="uppercase text-xs font-bold">{language}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="rounded-xl">
              <DropdownMenuItem onClick={() => setLanguage('en')}>English</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage('ru')}>Русский</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage('kk')}>Қазақша</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full"
            onClick={() => handleAction("Search")}
          >
            <Search size={20} />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full"
            onClick={() => handleAction("User Profile")}
          >
            <User size={20} />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full relative"
            onClick={() => handleAction("Shopping Cart")}
          >
            <ShoppingCart size={20} />
            <span className="absolute top-1 right-1 bg-blue-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden rounded-full">
                <Menu size={20} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="text-left text-2xl font-bold">Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-lg font-medium text-left hover:text-blue-600 transition-colors border-b border-gray-100 pb-2"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="flex gap-4 mt-4">
                  <Button variant="outline" size="sm" onClick={() => setLanguage('en')}>EN</Button>
                  <Button variant="outline" size="sm" onClick={() => setLanguage('ru')}>RU</Button>
                  <Button variant="outline" size="sm" onClick={() => setLanguage('kk')}>KK</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;