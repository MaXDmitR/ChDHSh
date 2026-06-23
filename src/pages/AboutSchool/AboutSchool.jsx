import { useState, useEffect } from 'react';
import { client, urlFor } from '@/sanity'; 
import './AboutSchool.scss';

const AboutSchool = () => {
  const [aboutData, setAboutData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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

  if (!aboutData) {
    return <div style={{ textAlign: 'center', padding: '100px 0' }}>Інформація оновлюється</div>;
  }

  // МАНІПУЛЯЦІЯ З ТЕКСТОМ: Парсимо абзаци та марковані списки
  const renderFormattedText = (rawText) => {
    if (!rawText) return null;

    const lines = rawText.split('\n');
    const elements = [];
    let currentList = [];

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();
      if (!trimmedLine) return;

      // Перевіряємо, чи рядок починається з буліта • або дефісу -
      if (trimmedLine.startsWith('•') || trimmedLine.startsWith('-')) {
        // Очищаємо сам маркер, залишаємо тільки текст
        const itemText = trimmedLine.replace(/^[•-]\s*/, '');
        currentList.push(<li key={`li-${index}`}>{itemText}</li>);
      } else {
        // Якщо перед цим накопичилися елементи списку — виводимо їх
        if (currentList.length > 0) {
          elements.push(<ul key={`ul-${index}`} className="aboutCustomList">{currentList}</ul>);
          currentList = [];
        }
        // Виводимо звичайний абзац
        elements.push(<p key={`p-${index}`}>{trimmedLine}</p>);
      }
    });

    // Якщо список був у самому кінці тексту
    if (currentList.length > 0) {
      elements.push(<ul key="ul-final" className="aboutCustomList">{currentList}</ul>);
    }

    return elements;
  };

  return (
    <div className="aboutPage">
      <section className="pageHeader">
        <div className="container">
          <h1 className="pageTitle">Про школу</h1>
          <p className="pageSubtitle">Історія та цінності нашого навчального закладу</p>
        </div>
      </section>

      <section className="aboutContent">
        <div className="container aboutGrid">
          <div className="aboutText">
            <h2>{aboutData.heading}</h2>
            
            {/* Рендеримо наш розумно відформатований текст */}
            {renderFormattedText(aboutData.text)}

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
              <div className="statItem">
                <span className="statNumber">{aboutData.studentsCount}</span>
                <span className="statLabel">Учнів сьогодні</span>
              </div>
            </div>
          </div>

          <div className="aboutImageWrapper">
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