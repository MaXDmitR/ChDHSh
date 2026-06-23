import { useState, useEffect } from 'react';
import { FaFileAlt, FaExclamationCircle } from 'react-icons/fa';
import * as FaIcons from 'react-icons/fa'; // Імпортуємо всі іконки для динамічних кроків
import { Link } from 'react-router-dom';
import { client } from '@/sanity'; // Підключаємо Sanity
import './AdmissionRules.scss';

const AdmissionRules = () => {
  const [rulesData, setRulesData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Дістаємо єдиний документ правил
    client.fetch('*[_type == "admissionRulesPage"][0]')
      .then((data) => {
        setRulesData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Помилка завантаження правил прийому:', error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div style={{ textAlign: 'center', padding: '100px 0' }}>Завантаження правил...</div>;
  }

  if (!rulesData) {
    return <div style={{ textAlign: 'center', padding: '100px 0' }}>Інформація оновлюється</div>;
  }

  return (
    <div className="admissionPage">
      <section className="pageHeader">
        <div className="container">
          <h1 className="pageTitle">Правила прийому</h1>
          <p className="pageSubtitle">Усе, що потрібно знати для вступу до нашої мистецької родини</p>
        </div>
      </section>

      <section className="admissionContent">
        <div className="container">
          
          <div className="admissionIntro">
            <p>{rulesData.introText}</p>
          </div>

          <div className="admissionStepsSection">
            <h2>Етапи вступної кампанії {rulesData.campaignYear}</h2>
            
            {rulesData.steps && rulesData.steps.length > 0 && (
              <div className="stepsGrid">
                {rulesData.steps.map((step, index) => {
                  // Динамічно дістаємо іконку
                  const IconComponent = FaIcons[step.iconName] || FaIcons.FaFileSignature;
                  
                  return (
                    <div key={index} className="stepCard">
                      <div className="stepHeader">
                        <div className="stepIcon"><IconComponent /></div>
                        {/* Використовуємо index + 1 для нумерації кроків */}
                        <span className="stepNumber">Крок {index + 1}</span>
                      </div>
                      <h3 className="stepTitle">{step.title}</h3>
                      <div className="stepDate">{step.date}</div>
                      <p className="stepText">{step.text}</p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div className="admissionDocsSection">
            <div className="docsBox">
              <h2><FaFileAlt className="titleIcon" /> Перелік необхідних документів</h2>
              
              {rulesData.documentsList && rulesData.documentsList.length > 0 && (
                <ul className="docsList">
                  {rulesData.documentsList.map((docItem, index) => (
                    <li key={index}>{docItem}</li>
                  ))}
                </ul>
              )}
              
              <div className="docsAction">
                <Link to="/statement" className="btn btnPrimary">Перейти до подачі заяви</Link>
              </div>
            </div>

            {rulesData.importantNotice && (
              <div className="importantNotice">
                <FaExclamationCircle className="noticeIcon" />
                <div>
                  <strong>Зверніть увагу:</strong> {rulesData.importantNotice}
                </div>
              </div>
            )}
          </div>

        </div>
      </section>
    </div>
  );
};

export default AdmissionRules;