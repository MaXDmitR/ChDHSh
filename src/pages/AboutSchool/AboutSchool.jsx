import { useState, useEffect } from 'react';
import { client, urlFor } from '@/sanity'; // Підключаємо Sanity
import './AboutSchool.scss';

const AboutSchool = () => {
  const [aboutData, setAboutData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // GROQ-запит: дістаємо документ aboutPage. 
    // [0] в кінці означає, що нам потрібен один об'єкт, а не масив.
    client.fetch('*[_type == "aboutPage"][0]')
      .then((data) => {
        setAboutData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Помилка завантаження даних про школу:', error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div style={{ textAlign: 'center', padding: '100px 0' }}>Завантаження інформації...</div>;
  }

  // Захист, якщо в адмінці ще не створили документ
  if (!aboutData) {
    return <div style={{ textAlign: 'center', padding: '100px 0' }}>Інформація оновлюється</div>;
  }

  return (
    <div className="aboutPage">
      {/* Універсальна шапка сторінки */}
      <section className="pageHeader">
        <div className="container">
          <h1 className="pageTitle">Про школу</h1>
          <p className="pageSubtitle">Історія, місія та цінності нашого навчального закладу</p>
        </div>
      </section>

      {/* Основний контент */}
      <section className="aboutContent">
        <div className="container aboutGrid">
          <div className="aboutText">
            {/* Динамічний заголовок */}
            <h2>{aboutData.heading}</h2>
            
            {/* Розбиваємо текст з Sanity на абзаци */}
            {aboutData.text && aboutData.text.split('\n').map((paragraph, index) => {
              // Якщо абзац не порожній (після спліту), рендеримо його в тег <p>
              if (paragraph.trim() !== '') {
                return <p key={index}>{paragraph}</p>;
              }
              return null;
            })}

            {/* Блок з динамічними цифрами */}
            <div className="aboutStats">
              <div className="statItem">
                <span className="statNumber">{aboutData.yearsHistory}</span>
                <span className="statLabel">Років історії</span>
              </div>
              <div className="statItem">
                <span className="statNumber">{aboutData.graduatesCount}</span>
                <span className="statLabel">Випускників</span>
              </div>
              <div className="statItem">
                <span className="statNumber">{aboutData.teachersCount}</span>
                <span className="statLabel">Професійних викладачів</span>
              </div>
            </div>
          </div>

          <div className="aboutImageWrapper">
            {/* Динамічне фото */}
            {aboutData.mainImage && (
              <img 
                src={urlFor(aboutData.mainImage).url()} 
                alt="Художній процес у школі" 
                className="aboutImg" 
              />
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSchool;