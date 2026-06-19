// src/pages/Home/Home.jsx
import { Link } from 'react-router-dom'
import { FaPalette, FaCube, FaBrush, FaBookOpen } from 'react-icons/fa'
import './Home.scss'

export const Home = () => {
  // Дані для карток напрямків, щоб код був чистим
  const directions = [
    {
      icon: <FaPalette />,
      title: 'Живопис та графіка',
      text: 'Вивчення основ композиції, кольорознавства, академічного рисунку та роботи з різними художніми матеріалами.'
    },
    {
      icon: <FaCube />,
      title: 'Скульптура та ліплення',
      text: 'Розвиток просторового та об\'ємного мислення, робота з глиною, пластиліном та створення малих форм.'
    },
    {
      icon: <FaBrush />,
      title: 'Декоративне мистецтво',
      text: 'Вивчення традиційних українських технік: розпис, писанкарство, витинанка та основи сучасного дизайну.'
    },
    {
      icon: <FaBookOpen />,
      title: 'Історія мистецтв',
      text: 'Захопливі лекції про світові шедеври, епохи та видатних художників, що формують кругозір дитини.'
    }
  ];

  // Масив лінків на красиві картинки з Unsplash, щоб наповнити галерею
  const sampleImages = [
    'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=500&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=500&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=500&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=500&auto=format&fit=crop'
  ];

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
              <Link to="/admission/rules" className="btn btnPrimary">Вступ 2026</Link>
              <Link to="/gallery/2025-2026" className="btn btnSecondary">Віртуальна галерея</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. СЕКЦІЯ НАПРЯМКІВ */}
      <section className="homeDirections">
        <div className="container">
          <h3 className="homeSectionTitle">Наші освітні напрямки</h3>
          <div className="homeDirectionsGrid">
            {directions.map((dir, index) => (
              <div key={index} className="directionCard">
                <div className="directionCardIcon">{dir.icon}</div>
                <h4 className="directionCardTitle">{dir.title}</h4>
                <p className="directionCardText">{dir.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ПРЕВ'Ю ГАЛЕРЕЇ */}
      <section className="homeGalleryPreview">
        <div className="container">
          <h3 className="homeSectionTitle">Творчість наших учнів</h3>
          <div className="homeGalleryGrid">
            {sampleImages.map((imgUrl, index) => (
              <div key={index} className="galleryPreviewItem">
                <img src={imgUrl} alt={`Дитяча робота ${index + 1}`} className="galleryPreviewImg" />
              </div>
            ))}
          </div>
          <div className="homeGalleryCenterBtn">
            <Link to="/gallery/2025-2026" className="btn btnPrimary">Переглянути всі роботи</Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;