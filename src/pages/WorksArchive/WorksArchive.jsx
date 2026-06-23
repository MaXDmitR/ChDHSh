import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaFolderOpen, FaArrowRight } from 'react-icons/fa';
import { client, urlFor } from '@/sanity';
import './WorksArchive.scss';

// Наша улюблена граматика
const getPluralWord = (number) => {
  const n = Math.abs(number) % 100;
  const n10 = n % 10;
  if (n >= 11 && n <= 19) return 'робіт';
  if (n10 === 1) return 'робота';
  if (n10 >= 2 && n10 <= 4) return 'роботи';
  return 'робіт';
};

const WorksArchive = () => {
  const [archiveYears, setArchiveYears] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Дістаємо всі роботи з бази, нам потрібні лише рік та картинка
    const query = '*[_type == "artwork"] | order(year desc) { year, image }';
    
    client.fetch(query)
      .then((data) => {
        // Угруповуємо роботи по роках
        const grouped = {};
        
        data.forEach((art) => {
          if (!grouped[art.year]) {
            // Створюємо нову папку, якщо такого року ще не було
            grouped[art.year] = { 
              year: art.year, 
              count: 0, 
              // Беремо першу картинку як обкладинку
              cover: art.image ? urlFor(art.image).url() : 'https://via.placeholder.com/800x600?text=Немає+фото' 
            };
          }
          grouped[art.year].count += 1; // Додаємо +1 до лічильника
        });

        // Перетворюємо об'єкт назад на масив і сортуємо від новіших до старіших
        const sortedYears = Object.values(grouped).sort((a, b) => b.year.localeCompare(a.year));
        
        setArchiveYears(sortedYears);
        setIsLoading(false);
      })
      .catch(console.error);
  }, []);

  if (isLoading) {
    return <div style={{ textAlign: 'center', padding: '100px' }}>Формуємо архів...</div>;
  }

  return (
    <div className="archivePage">
      <section className="pageHeader">
        <div className="container">
          <h1 className="pageTitle">Архів робіт</h1>
          <p className="pageSubtitle">Творчий спадок нашої школи: галереї найкращих робіт минулих років</p>
        </div>
      </section>

      <section className="archiveContent">
        <div className="container">
          <div className="archiveIntro">
            <FaFolderOpen className="introIcon" />
            
            <p>Оберіть навчальний рік, щоб переглянути віртуальну виставку робіт.</p>
          </div>

          <div className="archiveGrid">
            {archiveYears.map((item, index) => (
              <Link to={`/gallery/${item.year}`} key={index} className="archiveCard">
                <div className="archiveCardCover">
                  <img src={item.cover} alt={`Архів ${item.year}`} loading="lazy" />
                  <div className="coverOverlay"></div>
                </div>
                <div className="archiveCardBody">
                  <h3>{item.year} навчальний рік</h3>
                  <div className="cardMeta">
                    <span className="worksCount">{item.count} {getPluralWord(item.count)}</span>
                    <FaArrowRight className="arrowIcon" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorksArchive;