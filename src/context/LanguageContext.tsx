"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ru' | 'kk';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    "nav.printers": "3D Printers",
    "nav.materials": "Materials",
    "nav.about": "About",
    "nav.support": "Support",
    "nav.contact": "Contact",
    "hero.buy_now": "Buy Now",
    "hero.learn_more": "Learn More",
    "hero.new_arrival": "New Arrival",
    "cat.title": "Our Products",
    "cat.desc": "Explore our comprehensive range of 3D printing solutions.",
    "featured.title": "Featured Products",
    "featured.desc": "Discover our most popular 3D printers and accessories.",
    "featured.view_all": "View All Products",
    "community.title": "Join the Creality Community",
    "community.desc": "Connect with millions of creators worldwide and get inspired.",
    "community.join": "Join Now",
    "footer.desc": "Creality is a world-leading 3D printer manufacturer.",
    "footer.products": "Products",
    "footer.company": "Company",
    "footer.rights": "All rights reserved.",
    "cart.added": "Added to cart!",
    "product.warranty": "1 Year Warranty",
    "product.shipping": "Free Shipping",
    "product.share": "Share",
    "product.details": "View Details"
  },
  ru: {
    "nav.printers": "3D Принтеры",
    "nav.materials": "Материалы",
    "nav.about": "О нас",
    "nav.support": "Поддержка",
    "nav.contact": "Контакты",
    "hero.buy_now": "Купить сейчас",
    "hero.learn_more": "Подробнее",
    "hero.new_arrival": "Новинка",
    "cat.title": "Наши продукты",
    "cat.desc": "Изучите наш широкий ассортимент решений для 3D-печати.",
    "featured.title": "Рекомендуемые товары",
    "featured.desc": "Откройте для себя наши самые популярные принтеры и аксессуары.",
    "featured.view_all": "Все товары",
    "community.title": "Присоединяйтесь к сообществу Creality",
    "community.desc": "Общайтесь с миллионами мейкеров по всему миру и вдохновляйтесь.",
    "community.join": "Присоединиться",
    "footer.desc": "Creality — ведущий мировой производитель 3D-принтеров.",
    "footer.products": "Продукты",
    "footer.company": "Компания",
    "footer.rights": "Все права защищены.",
    "cart.added": "Добавлено в корзину!",
    "product.warranty": "1 год гарантии",
    "product.shipping": "Бесплатная доставка",
    "product.share": "Поделиться",
    "product.details": "Подробнее"
  },
  kk: {
    "nav.printers": "3D Принтерлер",
    "nav.materials": "Материалдар",
    "nav.about": "Біз туралы",
    "nav.support": "Қолдау",
    "nav.contact": "Контактілер",
    "hero.buy_now": "Қазір сатып алу",
    "hero.learn_more": "Толығырақ",
    "hero.new_arrival": "Жаңа өнім",
    "cat.title": "Біздің өнімдер",
    "cat.desc": "3D басып шығару шешімдерінің кең спектрін зерттеңіз.",
    "featured.title": "Таңдаулы өнімдер",
    "featured.desc": "Біздің ең танымал принтерлеріміз бен аксессуарларымызды табыңыз.",
    "featured.view_all": "Барлық өнімдер",
    "community.title": "Creality қауымдастығына қосылыңыз",
    "community.desc": "Дүние жүзіндегі миллиондаған мейкерлермен байланысыңыз және шабыт алыңыз.",
    "community.join": "Қосылу",
    "footer.desc": "Creality — әлемдегі жетекші 3D принтер өндірушісі.",
    "footer.products": "Өнімдер",
    "footer.company": "Компания",
    "footer.rights": "Барлық құқықтар қорғалған.",
    "cart.added": "Себетке қосылды!",
    "product.warranty": "1 жыл кепілдік",
    "product.shipping": "Тегін жеткізу",
    "product.share": "Бөлісу",
    "product.details": "Толығырақ"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('ru');

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};