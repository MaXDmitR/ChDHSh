// src/components/Header/menuData.js
import { FaInfoCircle, FaUserEdit, FaBookOpen, FaImages } from 'react-icons/fa';

export const menuItems = [
  { 
    title: 'ПРО НАС', 
    icon: FaInfoCircle, 
    submenu: [
      { title: 'Про школу', url: '/about' },
      { title: 'Викладачі', url: '/teachers' },
      { title: 'Контакти (телефон, email, мапа)', url: '/contacts' },
      { title: 'Ми у Facebook', url: 'https://www.facebook.com/' }, // Тут вставиш реальне посилання
    ]
  },
  { 
    title: 'ВСТУП', 
    icon: FaUserEdit, 
    submenu: [
      { title: 'Правила прийому', url: '/admissionrules' },
      { title: 'Заява', url: '/statement' },
      { title: 'Пільгове навчання', url: '/preferentialtuition' },
    ]
  },
  { 
    title: 'ОСВІТНІ ПОСЛУГИ', 
    icon: FaBookOpen, 
    submenu: [
      { title: 'Предмети', url: '/subjects' },
      // Зовнішнє посилання на сайт МОН
      { title: 'Типові навчальні програми (МОН)', url: 'https://mon.gov.ua/ua' }, 
    ]
  },
  { 
    // Оскільки вони хочуть наповнення по роках, робимо це також через сабменю
    title: 'ВІРТУАЛЬНА ДИТЯЧА ГАЛЕРЕЯ', 
    icon: FaImages, 
    submenu: [
      { title: '2025-2026 навчальний рік', url: '/gallery/2025-2026' },
      { title: '2024-2025 навчальний рік', url: '/gallery/2024-2025' },
      { title: 'Архів робіт', url: '/works-archive' },
    ]
  }
];