import { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import './Gallery.scss';

const Gallery = ({ year }) => {
  const [index, setIndex] = useState(-1);

  // Повна база даних, яка тепер покриває абсолютно всі роки з Архіву!
  const galleryDatabase = {
    "2025-2026": [
      { src: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop", title: "Весняний настрій", author: "Марія, 10 років" },
      { src: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop", title: "Абстракція", author: "Іван, 11 років" },
      { src: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=800&auto=format&fit=crop", title: "Натюрморт", author: "Олена, 9 років" },
      { src: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=800&auto=format&fit=crop", title: "Кольорові сни", author: "Денис, 10 років" },
      { src: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=800&auto=format&fit=crop", title: "Пейзаж", author: "Софія, 12 років" },
      { src: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=800&auto=format&fit=crop", title: "Музика барв", author: "Артем, 9 років" },
    ],
    "2024-2025": [
      { src: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?q=80&w=800&auto=format&fit=crop", title: "Старе місто", author: "Анна, 11 років" },
      { src: "https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?q=80&w=800&auto=format&fit=crop", title: "Акварель", author: "Максим, 10 років" },
      { src: "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=800&auto=format&fit=crop", title: "Магія лісу", author: "Вікторія, 12 років" },
      { src: "https://images.unsplash.com/photo-1580136608260-4eb11f4b24fe?q=80&w=800&auto=format&fit=crop", title: "Космос", author: "Олег, 9 років" },
    ],
    "2023-2024": [
      { src: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=800&auto=format&fit=crop", title: "Етюд з соняшниками", author: "Катерина, 13 років" },
      { src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop", title: "Техно-арт", author: "Дмитро, 14 років" },
      
    ],
    "2022-2023": [
     
      { src: "https://images.unsplash.com/photo-1494905998402-395d579af36f?q=80&w=800&auto=format&fit=crop", title: "Золота осінь", author: "Ярослав, 9 років" },
    ],
    "2021-2022": [
      { src: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop", title: "Фантастичні звірі", author: "Христина, 8 років" },
      { src: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop", title: "Неоновий дощ", author: "Павло, 12 років" },
    ],
    "2020-2021": [
      { src: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=800&auto=format&fit=crop", title: "Рідний край", author: "Микола, 13 років" },
    ]
  };

  const currentImages = galleryDatabase[year] || [];

  return (
    <div className="galleryPage">
      <section className="pageHeader">
        <div className="container">
          <h1 className="pageTitle">Віртуальна галерея</h1>
          <p className="pageSubtitle">Виставка найкращих учнівських робіт за {year} навчальний рік</p>
        </div>
      </section>

      <section className="galleryContent">
        <div className="container">
          {currentImages.length > 0 ? (
            <div className="galleryGrid">
              {currentImages.map((image, i) => (
                <div key={i} className="galleryItem" onClick={() => setIndex(i)}>
                  <img src={image.src} alt={image.title} loading="lazy" />
                  <div className="galleryOverlay">
                    <h4>{image.title}</h4>
                    <span>{image.author}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="emptyGallery">
              <p>Роботи за цей рік ще формуються або переносяться в цифровий формат.</p>
            </div>
          )}
        </div>
      </section>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={currentImages}
      />
    </div>
  );
};

export default Gallery;