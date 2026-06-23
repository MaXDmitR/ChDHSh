import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa'; // Імпортуємо всі іконки, як робили в Предметах
import { client, urlFor } from '@/sanity'; // Підключаємо Sanity
import './Home.scss';

export const Home = () => {
  // Стейти для наших даних
  const [subjects, setSubjects] = useState([]);
  const [recentArtworks, setRecentArtworks] = useState([]);
  const [latestYear, setLatestYear] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        // 1. Беремо перші 4 предмети, відсортовані за порядковим номером
        const subjectsQuery = '*[_type == "subject"] | order(order asc)[0...4]';
        
        // 2. Беремо 4 найсвіжіші дитячі роботи (неважливо з якого року)
        const artworksQuery = '*[_type == "artwork"] | order(_createdAt desc)[0...4]';
        
        // 3. Дізнаємося найсвіжіший рік для кнопки в шапці
        const yearQuery = 'array::unique(*[_type == "artwork"].year) | order(@ desc)[0]';

        // Запускаємо всі три запити паралельно!
        const [fetchedSubjects, fetchedArtworks, fetchedYear] = await Promise.all([
          client.fetch(subjectsQuery),
          client.fetch(artworksQuery),
          client.fetch(yearQuery)
        ]);

        setSubjects(fetchedSubjects);
        setRecentArtworks(fetchedArtworks);
        setLatestYear(fetchedYear || '2025-2026'); // Фолбек, якщо база ще порожня
        
        setIsLoading(false);
      } catch (error) {
        console.error('Помилка завантаження головної сторінки:', error);
        setIsLoading(false);
      }
    };

    fetchHomeData();
  }, []);

  if (isLoading) {
    return <div style={{ textAlign: 'center', padding: '100px 0' }}>Завантаження...</div>;
  }

  return (
    <div className="homePage">
      
      {/* 1. HERO СЕКЦІЯ */}
      <section className="homeHero">
        <div className="container homeHeroContainer">
          <div className="homeHeroContent">
            <h2 className="homeHeroTitle">Мистецтво, що надихає змалечку</h2>
            <p className="homeHeroText">
              Черкаська державна художня школа ім. Данила Нарбута — це простір, де розкриваються таланти, формується художній смак та народжуються майбутні митці. Запрошуємо до нашої творчої родини!
            </p>
            <div className="homeHeroButtons">
              {/* Тут можна залишити статичний лінк на правила прийому */}
              <Link to="/admissionrules" className="btn btnPrimary">Вступ</Link>
              {/* Динамічний лінк на найсвіжіший рік галереї! */}
              <Link to={`/works-archive`} className="btn btnSecondary">Віртуальна галерея</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. СЕКЦІЯ НАПРЯМКІВ (з Sanity) */}
      <section className="homeDirections">
        <div className="container">
          <h3 className="homeSectionTitle">Наші освітні напрямки</h3>
          <div className="homeDirectionsGrid">
            {subjects.map((subject) => {
              // Динамічна іконка, як на сторінці Предметів
              const IconComponent = FaIcons[subject.iconName] || FaIcons.FaBookOpen;
              
              return (
                <div key={subject._id} className="directionCard">
                  <div className="directionCardIcon">
                    <IconComponent />
                  </div>
                  <h4 className="directionCardTitle">{subject.title}</h4>
                  {/* Обрізаємо опис, якщо він занадто довгий, щоб картки були рівними */}
                  <p className="directionCardText">
                    {subject.description.length > 100 
                      ? `${subject.description.substring(0, 100)}...` 
                      : subject.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. ПРЕВ'Ю ГАЛЕРЕЇ (з Sanity) */}
      <section className="homeGalleryPreview">
        <div className="container">
          <h3 className="homeSectionTitle">Нові роботи наших учнів</h3>
          <div className="homeGalleryGrid">
            {recentArtworks.map((art) => (
              <div key={art._id} className="galleryPreviewItem">
                {art.image && (
                  <img 
                    src={urlFor(art.image).url()} 
                    alt={art.title || 'Дитяча робота'} 
                    className="galleryPreviewImg" 
                    loading="lazy"
                  />
                )}
              </div>
            ))}
          </div>
          <div className="homeGalleryCenterBtn">
            <Link to="/works-archive" className="btn btnPrimary">Переглянути всі роботи</Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;