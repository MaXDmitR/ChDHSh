import { Link } from 'react-router-dom';
import { FaFolderOpen, FaArrowRight } from 'react-icons/fa';
import './WorksArchive.scss';

const WorksArchive = () => {
  // Дані для папок архіву. Кожна папка веде на окремий роут галереї.
  const archiveYears = [
    {
      year: "2023-2024",
      count: 42,
      cover: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=800&auto=format&fit=crop", // Яскраве прев'ю
      url: "/gallery/2023-2024" // Це посилання на окрему сторінку
    },
    {
      year: "2022-2023",
      count: 38,
      cover: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop",
      url: "/gallery/2022-2023"
    },
    {
      year: "2021-2022",
      count: 51,
      cover: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop",
      url: "/gallery/2021-2022"
    },
    {
      year: "2020-2021",
      count: 29,
      cover: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=800&auto=format&fit=crop",
      url: "/gallery/2020-2021"
    }
  ];

  return (
    <div className="archivePage">
      {/* Наша універсальна шапка */}
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
            
            <p>
              Оберіть навчальний рік, щоб переглянути віртуальну виставку робіт, 
              які були створені нашими талановитими учнями. Ми дбайливо зберігаємо ці 
              миті натхнення.
            </p>
          </div>

          {/* Сітка папок */}
          <div className="archiveGrid">
            {archiveYears.map((item, index) => (
              <Link to={item.url} key={index} className="archiveCard">
                <div className="archiveCardCover">
                  <img src={item.cover} alt={`Архів ${item.year}`} loading="lazy" />
                  {/* Легкий градієнт на обкладинці */}
                  <div className="coverOverlay"></div>
                </div>
                <div className="archiveCardBody">
                  <h3>{item.year} навчальний рік</h3>
                  <div className="cardMeta">
                    <span className="worksCount">{item.count} робіт</span>
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