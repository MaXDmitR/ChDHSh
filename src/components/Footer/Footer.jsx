import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram } from 'react-icons/fa';
import logo from '@/assets/logo.webp'; // Використовуємо наш логотип
import './Footer.scss';

const Footer = () => {
  // Динамічно отримуємо поточний рік для копірайту
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footerContainer">
        <div className="footerGrid">
          
          {/* Колонка 1: Про школу / Логотип */}
          <div className="footerCol">
            <Link to="/" className="footerLogo">
              <img src={logo} alt="ЧДХШ Лого" className="footerLogoImg" />
              <div className="footerLogoText">
                <span className="footerLogoSub">ім. Данила Нарбута</span>
                <span className="footerLogoTitle">ЧДХШ</span>
              </div>
            </Link>
            <p className="footerDesc">
              Черкаська державна художня школа — сучасний простір, де розкриваються таланти, формується художній смак та народжуються майбутні митці змалечку.
            </p>
          </div>

          {/* Колонка 2: Швидка навігація */}
          <div className="footerCol">
            <h4 className="footerColTitle">Корисні посилання</h4>
            <ul className="footerLinks">
              <li><Link to="/about">Про школу</Link></li>
              <li><Link to="/admission/rules">Правила прийому</Link></li>
              <li><Link to="/subjects">Навчальні предмети</Link></li>
              <li><Link to="/teachers">Наші викладачі</Link></li>
              <li><Link to="/works-archive">Архів робіт</Link></li>
            </ul>
          </div>

          {/* Колонка 3: Контакти */}
          <div className="footerCol">
            <h4 className="footerColTitle">Контакти</h4>
            <ul className="footerContacts">
              <li>
                <FaMapMarkerAlt className="footerIcon" />
                <span>м. Черкаси, вул. Хрещатик, 214</span>
              </li>
              <li>
                <FaPhoneAlt className="footerIcon" />
                <div className="footerPhones">
                  <a href="tel:+380472372453">+38 (0472) 37-24-53</a>
                  <a href="tel:+380937364997">+38 (093) 736-49-97</a>
                </div>
              </li>
              <li>
                <FaEnvelope className="footerIcon" />
                <a href="mailto:chdxsh_narbuta@ukr.net">chdxsh_narbuta@ukr.net</a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Нижня смуга з копірайтом */}
      <div className="footerBottom">
        <div className="container footerBottomContainer">
          <p>&copy; {currentYear} ЧДХШ ім. Данила Нарбута. Всі права захищено.</p>
          <div className="footerSocials">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;