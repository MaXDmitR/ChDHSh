import { FaUserShield, FaHandsHelping, FaFileContract, FaInfoCircle, FaCheck } from 'react-icons/fa';
import './PreferentialTuition.scss';

const PreferentialTuition = () => {
  // Категорії осіб, що мають право на 100% пільгу
  const benefitCategories = [
    {
      id: 1,
      title: "Діти-сироти",
      desc: "Та діти, позбавлені батьківського піклування."
    },
    {
      id: 2,
      title: "Діти з інвалідністю",
      desc: "Яким не протипоказане навчання в початкових мистецьких навчальних закладах."
    },
    {
      id: 3,
      title: "Діти з багатодітних сімей",
      desc: "Сім'ї, які виховують трьох і більше неповнолітніх дітей."
    },
    {
      id: 4,
      title: "Діти з малозабезпечених сімей",
      desc: "За умови надання відповідної довідки з управління соціального захисту."
    },
    {
      id: 5,
      title: "Діти Захисників України",
      desc: "Діти учасників бойових дій, військовослужбовців та осіб, що прирівняні до них."
    }
  ];

  return (
    <div className="tuitionPage">
      {/* Універсальна шапка */}
      <section className="pageHeader">
        <div className="container">
          <h1 className="pageTitle">Пільгове навчання</h1>
          <p className="pageSubtitle">Категорії учнів, які мають право на звільнення від оплати за навчання</p>
        </div>
      </section>

      <section className="tuitionContent">
        <div className="container tuitionGrid">
          
          {/* ЛІВА ЧАСТИНА: Категорії */}
          <div className="tuitionCategories">
            <h2><FaHandsHelping className="sectionIcon" /> Хто має право на пільги?</h2>
            <p className="tuitionDesc">
              Відповідно до законодавства України та рішень міської ради, право на 
              <strong> 100% звільнення від плати</strong> за навчання в художній школі мають наступні категорії:
            </p>

            <div className="categoriesList">
              {benefitCategories.map(category => (
                <div key={category.id} className="categoryCard">
                  <div className="categoryIcon"><FaUserShield /></div>
                  <div className="categoryText">
                    <h3>{category.title}</h3>
                    <p>{category.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ПРАВА ЧАСТИНА: Документи та правила */}
          <div className="tuitionRules">
            <div className="rulesBox">
              <h2><FaFileContract className="sectionIcon" /> Як оформити пільгу?</h2>
              <p>Для оформлення пільги необхідно надати до канцелярії школи наступний пакет документів:</p>
              
              <ul className="docsChecklist">
                <li>
                  <FaCheck className="checkIcon" />
                  <span>Заява на ім'я директора про звільнення від оплати (заповнюється на місці).</span>
                </li>
                <li>
                  <FaCheck className="checkIcon" />
                  <span>Копія свідоцтва про народження дитини.</span>
                </li>
                <li>
                  <FaCheck className="checkIcon" />
                  <span>Копія ідентифікаційного коду дитини (за наявності).</span>
                </li>
                <li>
                  <FaCheck className="checkIcon" />
                  <span>Копія паспорта та ІПН одного з батьків (опікуна).</span>
                </li>
                <li>
                  <FaCheck className="checkIcon" />
                  <span><strong>Копія документа, що підтверджує пільгу</strong> (посвідчення багатодітної сім'ї, довідка МСЕК, посвідчення УБД тощо).</span>
                </li>
              </ul>
            </div>

            {/* Важливе повідомлення */}
            <div className="deadlineAlert">
              <FaInfoCircle className="alertIcon" />
              <div className="alertText">
                <strong>Важливо:</strong> Пільга надається з місяця, у якому були подані всі необхідні документи. 
                Документи на подовження пільги необхідно поновлювати щороку <strong>до 10 вересня</strong>.
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default PreferentialTuition;