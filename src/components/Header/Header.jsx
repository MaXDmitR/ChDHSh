import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import clsx from 'clsx';
import { FaPhoneAlt, FaFacebookF, FaInstagram, FaEnvelope, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { menuItems } from './menuData';
import logoSign from '../../assets/logo-sign.svg';
import { client } from '@/sanity';
import './Header.scss';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);

  // Стейти для даних з Sanity
  const [latestYears, setLatestYears] = useState([]);
  const [settings, setSettings] = useState(null);

  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
    setOpenSubmenuIndex(null);
  }, [location]);

  // Паралельне завантаження років та контактів
  useEffect(() => {
    const fetchHeaderData = async () => {
      try {
        const yearsQuery = `array::unique(*[_type == "artwork"].year) | order(@ desc)`;
        const settingsQuery = '*[_type == "siteSettings"][0]';

        // Promise.all дозволяє виконати обидва запити одночасно для швидкості
        const [yearsData, settingsData] = await Promise.all([
          client.fetch(yearsQuery),
          client.fetch(settingsQuery)
        ]);

        if (yearsData && yearsData.length > 0) {
          setLatestYears(yearsData.slice(0, 2));
        }
        setSettings(settingsData);
      } catch (error) {
        console.error("Помилка завантаження даних хедера:", error);
      }
    };

    fetchHeaderData();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) setOpenSubmenuIndex(null);
  };

  const toggleSubmenu = (index) => {
    setOpenSubmenuIndex(openSubmenuIndex === index ? null : index);
  };

  // Допоміжна функція для очищення номера
  const cleanPhone = (phone) => phone ? phone.replace(/[^\d+]/g, '') : '';

  return (
    <header className="header">
      {/* --- ВЕРХНЯ ПАНЕЛЬ --- */}
      <div className="headerTop">
        <div className="container headerTopContainer">
          <div className="headerInfo">
            {settings?.phoneMain && (
              <a href={`tel:${cleanPhone(settings.phoneMain)}`} className="headerPhone">
                <FaPhoneAlt /> {settings.phoneMain}
              </a>
            )}
          </div>

          <div className="headerActions">
            <div className="headerSocials">
              {settings?.facebookUrl && <a href={settings.facebookUrl} target="_blank" rel="noreferrer"><FaFacebookF /></a>}
              {settings?.instagramUrl && <a href={settings.instagramUrl} target="_blank" rel="noreferrer"><FaInstagram /></a>}
              {settings?.email && <a href={`mailto:${settings.email}`}><FaEnvelope /></a>}
            </div>
          </div>
        </div>
      </div>

      {/* --- ОСНОВНИЙ ХЕДЕР --- */}
      <div className="headerMain">
        <div className="container headerMainContainer">

          <div className="headerLogoBlock">
            <Link to="/" className="headerLogoLink">
              <img src={logoSign} alt="ЧДХШ" className="headerLogoImg" />
              <div className="headerLogoText">
                <span className="logoLineTop">черкаська дитяча художня</span>
                <span className="logoLineBottom">
                  <span className="textUpper">ШКОЛА</span> <span className="textLower">ім.</span> <span className="textUpper">ДАНИЛА НАРБУТА</span>
                </span>
              </div>
            </Link>
          </div>

          <button className="headerHamburger" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* --- НАВІГАЦІЯ --- */}
          <nav className={clsx("headerNav", isMenuOpen && "headerNavMobileOpen")}>
            <ul className="headerMenu">
              {menuItems.map((item, index) => {
                const Icon = item.icon;

                let activeSubmenu = item.submenu;
                if (item.title === 'ВІРТУАЛЬНА ДИТЯЧА ГАЛЕРЕЯ' && latestYears.length > 0) {
                  activeSubmenu = [
                    ...latestYears.map(year => ({
                      title: `${year} навчальний рік`,
                      url: `/gallery/${year}`
                    })),
                    { title: 'Архів робіт', url: '/works-archive' }
                  ];
                }

                const hasSubmenu = activeSubmenu && activeSubmenu.length > 0;
                const isSubmenuOpen = openSubmenuIndex === index;

                return (
                  <li
                    key={index}
                    className={clsx("headerMenuItem", hasSubmenu && "headerMenuItemHasSubmenu")}
                  >
                    <div className="headerMenuLinkWrapper">
                      {hasSubmenu ? (
                        <button
                          type="button"
                          className="headerMenuLink headerMenuLinkBtn"
                          onClick={() => toggleSubmenu(index)}
                        >
                          <div className="headerMenuIconPlaceholder">
                            <Icon />
                          </div>
                          <span className="headerMenuTitle">{item.title}</span>
                        </button>
                      ) : (
                        <Link to={item.url || '#'} className="headerMenuLink">
                          <div className="headerMenuIconPlaceholder">
                            <Icon />
                          </div>
                          <span className="headerMenuTitle">{item.title}</span>
                        </Link>
                      )}

                      {hasSubmenu && (
                        <button
                          type="button"
                          className={clsx("headerSubmenuToggle", isSubmenuOpen && "headerSubmenuToggleActive")}
                          onClick={() => toggleSubmenu(index)}
                          aria-label="Розгорнути підменю"
                        >
                          <FaChevronDown />
                        </button>
                      )}
                    </div>

                    {hasSubmenu && (
                      <ul className={clsx("headerSubmenu", isSubmenuOpen && "headerSubmenuMobileOpen")}>
                        {activeSubmenu.map((subitem, subIndex) => (
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

            {/* Мобільні контакти */}
            <div className="headerMobileExtra">
              <div className="headerMobileInfo">
                {settings?.phoneMain && (
                  <a href={`tel:${cleanPhone(settings.phoneMain)}`}>
                    <FaPhoneAlt /> {settings.phoneMain}
                  </a>
                )}
              </div>
              <div className="headerMobileActions">
                {settings?.facebookUrl && <a href={settings.facebookUrl} target="_blank" rel="noreferrer"><FaFacebookF /></a>}
                {settings?.instagramUrl && <a href={settings.instagramUrl} target="_blank" rel="noreferrer"><FaInstagram /></a>}
                {settings?.email && <a href={`mailto:${settings.email}`}><FaEnvelope /></a>}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;