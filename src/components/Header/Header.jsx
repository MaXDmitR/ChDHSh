
import { useState } from 'react';
import clsx from 'clsx';
import { FaPhoneAlt, FaFacebookF, FaInstagram, FaEnvelope, FaShoppingCart, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { menuItems } from './menuData';
import logo from '../../assets/logo.png'; 
import './Header.scss';

export const Header = () => {
  // Стейт для відкриття/закриття мобільного меню
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Стейт для відстеження відкритого сабменю на мобілках (по індексу)
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // При закритті головного меню, закриваємо і всі відкриті сабменю
    if (isMenuOpen) setOpenSubmenuIndex(null);
  };

  const toggleSubmenu = (index) => {
    setOpenSubmenuIndex(openSubmenuIndex === index ? null : index);
  };

  return (
    <header className="header">
      {/* --- ВЕРХНЯ ПАНЕЛЬ (Top Bar) - Скріншот image_0.png --- */}
      <div className="headerTop">
        <div className="container headerTopContainer">
          <div className="headerInfo">
            <a href="tel:0678439767" className="headerPhone">
              <FaPhoneAlt /> 093 736 49 97
            </a>
          </div>
          
          <div className="headerActions">
            <div className="headerSocials">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaEnvelope /></a>
            </div>
            <a href="/cart" className="headerCart">
              <FaShoppingCart />
            </a>
            <div className="headerLang">
              <span>ENG</span> | <span className="active">УКР</span>
            </div>
          </div>
        </div>
      </div>

      {/* --- ОСНОВНИЙ ХЕДЕР (Лого + Меню + Гамбургер) --- */}
      <div className="headerMain">
        <div className="container headerMainContainer">
          {/* Блок логотипу */}
          <div className="headerLogoBlock">
            <img src={logo} alt="ЧДХШ ім.Данила Нарбута" className="headerLogoImg" />
            <div className="headerLogoText">
              <span className="headerLogoSub">ім.Данила Нарбута</span>
              <h1 className="headerLogoTitle">ЧДХШ</h1>
            </div>
          </div>

          {/* Кнопка Гамбургера (показується тільки на мобільних) */}
          <button className="headerHamburger" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* --- НАВІГАЦІЯ --- */}
          {/* Клас headerNavMobileOpen додається, коли меню відкрите (для анімації виїзду) */}
          <nav className={clsx("headerNav", isMenuOpen && "headerNavMobileOpen")}>
            <ul className="headerMenu">
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                const hasSubmenu = item.submenu && item.submenu.length > 0;
                const isSubmenuOpen = openSubmenuIndex === index;

                return (
                  <li 
                    key={index} 
                    className={clsx("headerMenuItem", hasSubmenu && "headerMenuItemHasSubmenu")}
                  >
                    {/* Посилання або кнопка для відкриття сабменю */}
                    <div className="headerMenuLinkWrapper">
                      <a href={item.url || '#'} className="headerMenuLink">
                        {/* Місце для іконок (заглушки) */}
                        <div className="headerMenuIconPlaceholder">
                           <Icon />
                        </div>
                        <span className="headerMenuTitle">{item.title}</span>
                      </a>
                      
                      {/* Стрілочка для мобільного сабменю */}
                      {hasSubmenu && (
                        <button 
                          className={clsx("headerSubmenuToggle", isSubmenuOpen && "headerSubmenuToggleActive")}
                          onClick={() => toggleSubmenu(index)}
                        >
                          <FaChevronDown />
                        </button>
                      )}
                    </div>

                    {/* --- ВИПАДАЮЧИЙ СПИСОК (Submenu) --- */}
                    {hasSubmenu && (
                      <ul className={clsx("headerSubmenu", isSubmenuOpen && "headerSubmenuMobileOpen")}>
                        {item.submenu.map((subitem, subIndex) => (
                          <li key={subIndex} className="headerSubmenuItem">
                            <a href={subitem.url} className="headerSubmenuLink">
                              {subitem.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          
            {/* Мобільні контакти/соціалки (внизу виїзного меню, як на image_3.png) */}
            <div className="headerMobileExtra">
               <div className="headerMobileInfo">
                  <a href="tel:0678439767"><FaPhoneAlt /> 067 843-97-67</a>
               </div>
               <div className="headerMobileActions">
                  <a href="#"><FaFacebookF /></a>
                  <a href="#"><FaInstagram /></a>
                  <a href="#"><FaEnvelope /></a>
               </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header
