// src/components/Header/menuData.js
import { FaUserFriends, FaPalette, FaChalkboardTeacher, FaShoppingBag, FaBookOpen, FaVideo, FaNewspaper } from 'react-icons/fa';
// ТУТ МАЮТЬ БУТИ ІКОНКИ-ЗАГЛУШКИ. ЗАМІНИ НА КАСТОМНІ SVG ПОТІМ.

export const menuItems = [
  { 
    title: 'ПРО НАС', 
    icon: FaUserFriends, // Заглушка
    submenu: [
      { title: 'Про Львівську дитячу галерею', url: '/about/gallery' },
      { title: 'Про Ольгу Михайлюк', url: '/about/founder' },
      { title: 'Презентація Арт Форуму', url: '/about/forum' },
      { title: 'Незламний Золотий Мольберт', url: '/about/easel' },
      { title: 'Про видання Ольги Михайлюк', url: '/about/publications' },
    ]
  },
  { title: 'ДИТЯЧА ГАЛЕРЕЯ', icon: FaPalette, url: '/gallery' },
  { 
    title: 'ЗОЛОТИЙ МОЛЬБЕРТ', 
    icon: FaChalkboardTeacher, // Заглушка
    submenu: [
      { title: 'Конкурс', url: '/easel/competition' },
      { title: 'Учасники', url: '/easel/participants' },
    ]
  },
  { title: 'МАГАЗИН', icon: FaShoppingBag, url: '/shop' },
  { title: 'ВИДАВНИЧИЙ ДІМ', icon: FaBookOpen, url: '/publishing' },
  { title: 'ВІДЕОМАТЕРІАЛИ', icon: FaVideo, url: '/video' },
  { title: 'НОВИНИ', icon: FaNewspaper, url: '/news' },
];