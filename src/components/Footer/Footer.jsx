import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { client } from '@/sanity'; 
import logo from '@/assets/logo.webp';
import './Footer.scss';

const Footer = () => {
  const [settings, setSettings] = useState(null);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    client.fetch('*[_type == "siteSettings"][0]')
      .then((data) => setSettings(data))
      .catch(console.error);
  }, []);

  const cleanPhone = (phone) => phone ? phone.replace(/[^\d+]/g, '') : '';

  return (
    <footer className="footer">
      <div className="container footerContainer">
        <div className="footerGrid">
          
          <div className="footerCol">
            <Link to="/" className="footerLogo">
              <img src={logo} alt="ЧДХШ Лого" className="footerLogoImg" />
              <div className="footerLogoText">
                <span className="footerLogoSub">ім. Данила Нарбута</span>
                <span className="footerLogoTitle">ЧДХШ</span>
              </div>
            </Link>
            <p className="footerDesc">
              Черкаська дитяча художня школа — сучасний простір, де розкриваються таланти, формується художній смак та народжуються майбутні митці змалечку.
            </p>
          </div>

          <div className="footerCol">
            <h4 className="footerColTitle">Корисні посилання</h4>
            <ul className="footerLinks">
              <li><Link to="/about">Про школу</Link></li>
              <li><Link to="/admissionrules">Правила прийому</Link></li>
              <li><Link to="/subjects">Навчальні предмети</Link></li>
              <li><Link to="/teachers">Наші викладачі</Link></li>
              <li><Link to="/works-archive">Архів робіт</Link></li>
            </ul>
          </div>

          <div className="footerCol">
            <h4 className="footerColTitle">Контакти</h4>
            <ul className="footerContacts">
              <li>
                <FaMapMarkerAlt className="footerIcon" />
                <span>{settings?.address || 'Завантаження адреси...'}</span>
              </li>
              <li>
                <FaPhoneAlt className="footerIcon" />
                <div className="footerPhones">
                  {settings?.phoneMain && (
                    <a href={`tel:${cleanPhone(settings.phoneMain)}`}>{settings.phoneMain}</a>
                  )}
                  {settings?.phoneSecondary && (
                    <a href={`tel:${cleanPhone(settings.phoneSecondary)}`}>{settings.phoneSecondary}</a>
                  )}
                </div>
              </li>
              {settings?.email && (
                <li>
                  <FaEnvelope className="footerIcon" />
                  <a href={`mailto:${settings.email}`}>{settings.email}</a>
                </li>
              )}
            </ul>
          </div>

        </div>
      </div>

      <div className="footerBottom">
        <div className="container footerBottomContainer">
          <p>&copy; {currentYear} ЧДХШ ім. Данила Нарбута. Всі права захищено.</p>
          <div className="footerSocials">
            {settings?.facebookUrl && (
              <a href={settings.facebookUrl} target="_blank" rel="noreferrer" aria-label="Facebook">
                <FaFacebookF />
              </a>
            )}
            {settings?.instagramUrl && (
              <a href={settings.instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;