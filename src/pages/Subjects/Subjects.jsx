import { useState, useEffect } from 'react';
// Імпортуємо ВСІ іконки з fa, щоб мати змогу діставати їх за назвою
import * as FaIcons from 'react-icons/fa';
import { client } from '@/sanity'; 
import './Subjects.scss';

const Subjects = () => {
  const [subjects, setSubjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Витягуємо предмети з бази
    const query = '*[_type == "subject"] | order(order asc)';
    
    client.fetch(query)
      .then((data) => {
        setSubjects(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Помилка завантаження предметів:', error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="subjectsPage">
      <section className="pageHeader">
        <div className="container">
          <h1 className="pageTitle">Навчальні предмети</h1>
          <p className="pageSubtitle">Комплексна програма для всебічного художнього розвитку</p>
        </div>
      </section>

      <section className="subjectsContent">
        <div className="container">
          
          {isLoading ? (
            <div style={{ textAlign: 'center', padding: '50px 0' }}>Завантаження програм...</div>
          ) : (
            <div className="subjectsGrid">
              {subjects.map(subject => {
                // МАГІЯ: Дістаємо потрібну іконку з об'єкта FaIcons за її назвою (яка прийшла з Sanity)
                // Якщо раптом іконку не знайдено, ставимо запасну (FaBookOpen)
                const IconComponent = FaIcons[subject.iconName] || FaIcons.FaBookOpen;

                return (
                  <div key={subject._id} className="subjectCard">
                    <div className="subjectIcon">
                      {/* Рендеримо векторну іконку! */}
                      <IconComponent />
                    </div>
                    <h3 className="subjectTitle">{subject.title}</h3>
                    <p className="subjectDesc">{subject.description}</p>
                  </div>
                );
              })}
            </div>
          )}

          <div className="ministryPrograms">
            <div className="programsInfo">
              <h2>Типові навчальні програми</h2>
              <p>
                Навчальний процес у школі здійснюється за державними програмами, затвердженими 
                Міністерством культури та інформаційної політики України. Навчання поділяється на два рівні: 
                <strong> елементарний</strong> (для початківців) та <strong>базовий</strong> (основна школа).
              </p>
            </div>
            <div className="programsAction">
              <a 
                href="https://mkip.gov.ua/" 
                target="_blank" 
                rel="noreferrer" 
                className="btn btnPrimary externalBtn"
              >
                <span>Переглянути на сайті Міністерства</span>
                <FaIcons.FaExternalLinkAlt className="btnIcon" />
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Subjects;