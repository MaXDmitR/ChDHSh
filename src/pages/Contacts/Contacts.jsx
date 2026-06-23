import { useState, useEffect } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { client } from '@/sanity'; // Підключаємо Sanity
import './Contacts.scss';

const Contacts = () => {
  const [settings, setSettings] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // GROQ-запит: беремо єдиний документ з налаштуваннями сайту
    client.fetch('*[_type == "siteSettings"][0]')
      .then((data) => {
        setSettings(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Помилка завантаження контактів:', error);
        setIsLoading(false);
      });
  }, []);

  // Допоміжна функція: видаляє всі пробіли та дужки з номера для посилання tel:
  const cleanPhone = (phone) => {
    return phone ? phone.replace(/[^\d+]/g, '') : '';
  };

  if (isLoading) {
    return <div style={{ textAlign: 'center', padding: '100px 0' }}>Завантаження контактів...</div>;
  }

  if (!settings) {
    return <div style={{ textAlign: 'center', padding: '100px 0' }}>Контакти оновлюються</div>;
  }

  return (
    <div className="contactsPage">
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
                  {/* Підтягуємо адресу */}
                  <span>{settings.address}</span>
                </div>
              </div>

              <div className="infoItem">
                <div className="infoIcon"><FaPhoneAlt /></div>
                <div className="infoText">
                  <strong>Телефони:</strong>
                  {/* Головний телефон */}
                  <a href={`tel:${cleanPhone(settings.phoneMain)}`}>{settings.phoneMain}</a>
                  {/* Додатковий телефон (рендеримо тільки якщо він є) */}
                  {settings.phoneSecondary && (
                    <a href={`tel:${cleanPhone(settings.phoneSecondary)}`}>{settings.phoneSecondary}</a>
                  )}
                </div>
              </div>

              <div className="infoItem">
                <div className="infoIcon"><FaEnvelope /></div>
                <div className="infoText">
                  <strong>Електронна пошта:</strong>
                  {/* Підтягуємо email */}
                  <a href={`mailto:${settings.email}`}>{settings.email}</a>
                </div>
              </div>
            </div>

            {/* Блок соцмереж */}
            <div className="contactsSocials">
              <h3>Ми у соцмережах:</h3>
              <div className="socialLinks">
                {/* Facebook */}
                {settings.facebookUrl && (
                  <a href={settings.facebookUrl} target="_blank" rel="noreferrer" className="socialBtn fb">
                    <FaFacebookF /> Facebook
                  </a>
                )}
                
                {/* Instagram (якщо є) */}
                {settings.instagramUrl && (
                  <a href={settings.instagramUrl} target="_blank" rel="noreferrer" className="socialBtn ig">
                    <FaInstagram /> Instagram
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* ПРАВА ЧАСТИНА: Інтерактивна мапа */}
          <div className="contactsMap">
            {/* Сюди ти потім зможеш вставити реальний iframe з Google Maps для вул. Хрещатик, 214 */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2593.003310468305!2d32.06283731569566!3d49.44421297934988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d14b827e8d6411%3A0xc3bba4d291b87a8b!2z0LLRg9C70LjRhtGPINCl0YDQtdGJ0LDRgtC40LosIDIxNCwg0KfQtdGA0LrQsNGB0LgsINCn0LXRgNC60LDRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgMTgwMDA!5e0!3m2!1suk!2sua!4v1680000000000!5m2!1suk!2sua" 
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