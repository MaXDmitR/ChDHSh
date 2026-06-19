import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram } from 'react-icons/fa';
import './Contacts.scss';

const Contacts = () => {
  return (
    <div className="contactsPage">
      {/* Наша універсальна шапка */}
      <section className="pageHeader">
        <div className="container">
          <h1 className="pageTitle">Контакти</h1>
          <p className="pageSubtitle">Зв'яжіться з нами або завітайте до школи особисто</p>
        </div>
      </section>

      <section className="contactsContent">
        <div className="container contactsGrid">
          
          {/* ЛІВА ЧАСТИНА: Текст та інформація */}
          <div className="contactsInfo">
            <h2>Наші координати</h2>
            <p className="contactsDesc">
              Маєте питання щодо вступу, розкладу занять або співпраці? 
              Ми завжди раді допомогти. Звертайтеся за телефонами або пишіть на електронну пошту.
            </p>

            <div className="infoList">
              <div className="infoItem">
                <div className="infoIcon"><FaMapMarkerAlt /></div>
                <div className="infoText">
                  <strong>Адреса:</strong>
                  <span>м. Черкаси, вул. Хрещатик, 214</span>
                </div>
              </div>

              <div className="infoItem">
                <div className="infoIcon"><FaPhoneAlt /></div>
                <div className="infoText">
                  <strong>Телефони:</strong>
                  <a href="tel:+380472372453">+38 (0472) 37-24-53</a>
                  <a href="tel:+380937364997">+38 (093) 736-49-97</a>
                </div>
              </div>

              <div className="infoItem">
                <div className="infoIcon"><FaEnvelope /></div>
                <div className="infoText">
                  <strong>Електронна пошта:</strong>
                  <a href="mailto:chdxsh_narbuta@ukr.net">chdxsh_narbuta@ukr.net</a>
                </div>
              </div>
            </div>

            {/* Блок соцмереж */}
            <div className="contactsSocials">
              <h3>Ми у соцмережах:</h3>
              <div className="socialLinks">
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="socialBtn fb">
                  <FaFacebookF /> Facebook
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="socialBtn ig">
                  <FaInstagram /> Instagram
                </a>
              </div>
            </div>
          </div>

          {/* ПРАВА ЧАСТИНА: Інтерактивна мапа */}
          <div className="contactsMap">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2593.418295624734!2d32.0620023!3d49.4444583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d14b8104bd1009%3A0xc31604a434c441b8!2z0LLRg9C70LjRhtGPINCl0YDQtdGJ0LDRgtC40LosIDIxNCwg0KfQtdGA0LrQsNGB0LgsINCn0LXRgNC60LDRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgMTgwMDA!5e0!3m2!1suk!2sua!4v1700000000000!5m2!1suk!2sua" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Карта проїзду до школи"
            ></iframe>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contacts;