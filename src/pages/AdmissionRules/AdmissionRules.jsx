import { FaFileSignature, FaPalette, FaUserCheck, FaFileAlt, FaExclamationCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './AdmissionRules.scss';

const AdmissionRules = () => {
  // Дані для кроків вступу
  const admissionSteps = [
    {
      id: 1,
      icon: <FaFileSignature />,
      title: "Подання заяви",
      date: "15 травня - 15 червня",
      text: "Батьки або опікуни дитини подають пакет необхідних документів до канцелярії школи або надсилають електронною поштою."
    },
    {
      id: 2,
      icon: <FaPalette />,
      title: "Творчий конкурс",
      date: "20 червня - 25 червня",
      text: "Дитина виконує творче завдання в класі (рисунок, живопис або композиція). Матеріали для іспиту потрібно мати з собою."
    },
    {
      id: 3,
      icon: <FaUserCheck />,
      title: "Зарахування",
      date: "до 25 серпня",
      text: "Оприлюднення списків зарахованих учнів на стенді школи та підписання договорів про навчання."
    }
  ];

  return (
    <div className="admissionPage">
      {/* Універсальна шапка */}
      <section className="pageHeader">
        <div className="container">
          <h1 className="pageTitle">Правила прийому</h1>
          <p className="pageSubtitle">Усе, що потрібно знати для вступу до нашої мистецької родини</p>
        </div>
      </section>

      <section className="admissionContent">
        <div className="container">
          
          {/* Блок з категоріями віку */}
          <div className="admissionIntro">
            
            <p>
              До 1-го класу художньої школи зараховуються діти віком <strong>9-11 років</strong>, 
              які виявили здібності до образотворчого мистецтва та успішно склали вступні іспити. 
              Для дітей 6-8 років діють підготовчі групи (елементарний підрівень).
            </p>
          </div>

          {/* Кроки вступу (Таймлайн) */}
          <div className="admissionStepsSection">
            <h2>Етапи вступної кампанії 2026</h2>
            <div className="stepsGrid">
              {admissionSteps.map((step) => (
                <div key={step.id} className="stepCard">
                  <div className="stepHeader">
                    <div className="stepIcon">{step.icon}</div>
                    <span className="stepNumber">Крок {step.id}</span>
                  </div>
                  <h3 className="stepTitle">{step.title}</h3>
                  <div className="stepDate">{step.date}</div>
                  <p className="stepText">{step.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Необхідні документи */}
          <div className="admissionDocsSection">
            <div className="docsBox">
              <h2><FaFileAlt className="titleIcon" /> Перелік необхідних документів</h2>
              <ul className="docsList">
                <li>Заява на ім'я директора школи встановленого зразка (заповнюється батьками).</li>
                <li>Копія свідоцтва про народження дитини.</li>
                <li>Медична довідка про відсутність протипоказань для навчання в художній школі.</li>
                <li>Дві фотокартки розміром 3х4 см.</li>
                <li>Папка зі швидкозшивачем та 5 файлів для особової справи.</li>
              </ul>
              
              <div className="docsAction">
                <Link to="/statement" className="btn btnPrimary">Завантажити бланк заяви</Link>
              </div>
            </div>

            {/* Важливе зауваження */}
            <div className="importantNotice">
              <FaExclamationCircle className="noticeIcon" />
              <div>
                <strong>Зверніть увагу:</strong> Оригінал свідоцтва про народження обов'язково 
                пред'являється батьками особисто під час подання копій документів.
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default AdmissionRules;