import { useState, useEffect } from 'react'; // Додали useEffect
import { useLocation, Link } from 'react-router-dom'; // Додали useLocation
import clsx from 'clsx';
import { FaPhoneAlt, FaFacebookF, FaInstagram, FaEnvelope, FaShoppingCart, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { menuItems } from './menuData';
import logo from '../../assets/logo.webp'; 
import './Header.scss';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);
  
  // Отримуємо поточний шлях (URL)
  const location = useLocation();

  // МАГІЯ: Цей ефект спрацьовує щоразу, коли змінюється URL (location)
  useEffect(() => {
    setIsMenuOpen(false);       // Ховаємо бокову панель
    setOpenSubmenuIndex(null);  // Закриваємо всі відкриті акордеони
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
          </div>
        </div>
      </div>

      {/* --- ОСНОВНИЙ ХЕДЕР (Лого + Меню + Гамбургер) --- */}
      <div className="headerMain">
        <div className="container headerMainContainer">
          {/* Блок логотипу */}
          <div className="headerLogoBlock">
            <Link to='/'>
            <img src={logo} alt="ЧДХШ ім.Данила Нарбута" className="headerLogoImg" />
            </Link>
            <div className="headerLogoText">
              <span className="headerLogoSub">ім.Данила Нарбута</span>
              <h1 className="headerLogoTitle">ЧЕРКАСЬКА ДЕРЖАВНА ХУДОЖНЯ ШКОЛА</h1>
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
                      <Link to={item.url || '#'} className="headerMenuLink">
                        {/* Місце для іконок (заглушки) */}
                        <div className="headerMenuIconPlaceholder">
                           <Icon />
                        </div>
                        <span className="headerMenuTitle">{item.title}</span>
                      </Link>
                      
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
                            <Link to={subitem.url} className="headerSubmenuLink">
                              {subitem.title}
                            </Link>
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
                  <Link to="tel:0678439767"><FaPhoneAlt /> 067 843-97-67</Link>
               </div>
               <div className="headerMobileActions">
                  <Link to="#"><FaFacebookF /></Link>
                  <Link to="#"><FaInstagram /></Link>
                  <Link to="#"><FaEnvelope /></Link>
               </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header
