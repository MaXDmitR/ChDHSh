import { useState, useEffect } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { client, urlFor } from '@/sanity'; // Підключаємо Sanity
import './Gallery.scss';

const Gallery = ({ year }) => {
  const [index, setIndex] = useState(-1);
  const [artworks, setArtworks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Шукаємо роботи саме за переданим роком ($year) і сортуємо від найновіших
    const query = '*[_type == "artwork" && year == $year] | order(_createdAt desc)';
    
    setIsLoading(true);
    client.fetch(query, { year })
      .then((data) => {
        setArtworks(data);
        setIsLoading(false);
      })
      .catch(console.error);
  }, [year]); // useEffect спрацює знову, якщо зміниться рік в URL

  // Оскільки Lightbox вимагає масив об'єктів з полем `src`, ми перетворюємо дані:
  const lightboxSlides = artworks.map(art => ({
    src: urlFor(art.image).url(),
    title: art.title,
    author: art.author
  }));

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
          {isLoading ? (
            <div style={{ textAlign: 'center', padding: '50px' }}>Завантаження робіт...</div>
          ) : artworks.length > 0 ? (
            <div className="galleryGrid">
              {artworks.map((art, i) => (
                <div key={art._id} className="galleryItem" onClick={() => setIndex(i)}>
                  <img src={urlFor(art.image).url()} alt={art.title} loading="lazy" />
                  <div className="galleryOverlay">
                    <h4>{art.title}</h4>
                    <span>{art.author}</span>
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

      <Lightbox open={index >= 0} index={index} close={() => setIndex(-1)} slides={lightboxSlides} />
    </div>
  );
};

export default Gallery;