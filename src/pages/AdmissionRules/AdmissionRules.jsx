import { FaFileAlt, FaMapMarkerAlt, FaCalendarAlt, FaUserCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './AdmissionRules.scss';

const AdmissionRules = () => {
  const requiredDocs = [
    "заяву встановленого зразка;",
    "копію свідоцтва про народження дитини або ID-картки (для осіб, які досягли 14-річного віку);",
    "одну фотокартку розміром 3×4 см;",
    "копію реєстраційного номера облікової картки платника податків (РНОКПП) дитини (за наявності);",
    "документи, що підтверджують право на пільги з оплати за навчання (за наявності)."
  ];

  return (
    <div className="admissionPage">
      <section className="pageHeader">
        <div className="container">
          <h1 className="pageTitle">Правила прийому</h1>
          <p className="pageSubtitle">Вступ до Черкаської дитячої художньої школи імені Данила Нарбута</p>
        </div>
      </section>

      <section className="admissionContent">
        {/* Додаємо новий клас admissionMainGrid для розділення на дві колонки */}
        <div className="container admissionMainGrid">

          {/* ЛІВА ЧАСТИНА: Етапи вступу (Терміни та Порядок) */}
          <div className="admissionLeftColumn">
            <h2 style={{ textAlign: 'left', marginBottom: '25px' }}>Терміни та порядок</h2>
            
            {/* Картки тепер стоять у колонку одна під одною */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              
              {/* Картка 1: Терміни */}
              <div className="stepCard">
                <div className="stepHeader">
                  <div className="stepIcon"><FaCalendarAlt /></div>
                  <span className="stepNumber">Етап 1</span>
                </div>
                <h3 className="stepTitle">Прийом документів</h3>
                <div className="stepDate">15 квітня — 1 вересня</div>
                <p className="stepText">
                  Прийом заяв на вступ до школи проводиться щороку. У разі наявності вакантних місць прийом заяв може бути продовжений протягом навчального року.
                </p>
              </div>

              {/* Картка 2: Зарахування */}
              <div className="stepCard">
                <div className="stepHeader">
                  <div className="stepIcon"><FaUserCheck /></div>
                  <span className="stepNumber">Етап 2</span>
                </div>
                <h3 className="stepTitle">Порядок зарахування</h3>
                <div className="stepDate">1 — 15 вересня</div>
                <p className="stepText" style={{ marginBottom: '10px' }}>
                  Здійснюється поточного навчального року та оформлюється наказом директора на підставі:
                </p>
                <ul style={{ paddingLeft: '20px', color: '#666', fontSize: '14px', lineHeight: '1.5', margin: 0 }}>
                  <li style={{ marginBottom: '5px' }}>поданої заяви;</li>
                  <li style={{ marginBottom: '5px' }}>повного пакета необхідних документів;</li>
                  <li style={{ marginBottom: '5px' }}>укладеного договору про надання освітніх послуг.</li>
                </ul>
              </div>

            </div>
          </div>

          {/* ПРАВА ЧАСТИНА: Перелік документів та адреса */}
          <div className="admissionRightColumn">
            <div className="docsBox" style={{ margin: '0 0 30px 0', maxWidth: '100%' }}>
              <h2><FaFileAlt className="titleIcon" /> Перелік документів для вступу</h2>
              <p style={{ marginBottom: '20px', color: '#666', fontSize: '16px' }}>
                Для зарахування батькам або законним представникам необхідно подати такі документи:
              </p>
              
              <ul className="docsList">
                {requiredDocs.map((docItem, index) => (
                  <li key={index}>{docItem}</li>
                ))}
              </ul>
              
              <div className="docsAction">
                <Link to="/statement" className="btn btnPrimary">Перейти до подачі заяви</Link>
              </div>
            </div>

            {/* Адреса та вітання */}
            <div className="importantNotice" style={{ backgroundColor: 'rgba(0, 86, 179, 0.05)', borderLeftColor: '#0056b3' }}>
              <FaMapMarkerAlt className="noticeIcon" style={{ color: '#0056b3' }} />
              <div>
                <strong style={{ display: 'block', marginBottom: '8px', fontSize: '16px' }}>
                  Адреса подачі документів:
                </strong>
                <span style={{ display: 'block', marginBottom: '8px' }}>
                  Документи подаються за адресою: <strong>вул. Хрещатик, 214, м. Черкаси.</strong>
                </span>
                <span style={{ color: '#0056b3', fontWeight: '500' }}>
                  Ласкаво просимо до творчої родини Черкаської дитячої художньої школи імені Данила Нарбута!
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default AdmissionRules;