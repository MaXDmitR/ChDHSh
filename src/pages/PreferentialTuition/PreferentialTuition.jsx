import { FaUserShield, FaHandsHelping, FaFileContract, FaInfoCircle, FaCheck } from 'react-icons/fa';
import './PreferentialTuition.scss';

const PreferentialTuition = () => {
  // Групуємо всі офіційні категорії у 3 красиві картки, зберігаючи оригінальний текст
  const benefitCategories = [
    {
      id: 1,
      title: "Згідно із законодавством України",
      items: [
        "діти з багатодітних сімей;",
        "діти з малозабезпечених сімей;",
        "діти з інвалідністю;",
        "діти-сироти;",
        "діти, позбавлені батьківського піклування."
      ]
    },
    {
      id: 2,
      title: "Додаткові пільги міста (ВПО та постраждалі)",
      items: [
        "діти з числа внутрішньо переміщених осіб;",
        "діти, які мають статус дитини, що постраждала внаслідок воєнних дій і збройних конфліктів;"
      ]
    },
    {
      id: 3,
      title: "Додаткові пільги міста (Захисники)",
      items: [
        "діти з числа осіб, визначених статтею 10 Закону України «Про статус ветеранів війни, гарантії їх соціального захисту»;",
        "діти захисників державного суверенітету та незалежності України;",
        "діти, батьки яких загинули (померли) внаслідок поранень, контузій, каліцтва або захворювань, пов'язаних із захистом Батьківщини, виконанням обов'язків військової служби, участю у Революції Гідності;",
        "діти, батьки яких зникли безвісти або перебувають у полоні під час здійснення заходів, необхідних для забезпечення оборони України."
      ]
    }
  ];

  return (
    <div className="tuitionPage">
      <section className="pageHeader">
        <div className="container">
          <h1 className="pageTitle">Пільги з оплати за навчання</h1>
          <p className="pageSubtitle">У Черкаській дитячій художній школі імені Данила Нарбута окремі категорії дітей мають право на безоплатне навчання.</p>
        </div>
      </section>

      <section className="tuitionContent">
        <div className="container tuitionGrid">
          
          {/* ЛІВА ЧАСТИНА: Категорії (У стилі оригінальних карток) */}
          <div className="tuitionCategories">
            <h2><FaHandsHelping className="sectionIcon" /> Хто має право на пільги?</h2>
            <p className="tuitionDesc">
              Відповідно до законодавства України та рішень Черкаської міської ради, від плати за навчання <strong>звільняються (100%):</strong>
            </p>

            <div className="categoriesList">
              {benefitCategories.map(category => (
                <div key={category.id} className="categoryCard">
                  <div className="categoryIcon"><FaUserShield /></div>
                  <div className="categoryText">
                    <h3>{category.title}</h3>
                    {/* Виводимо текст маркованим списком прямо всередині картки */}
                    <ul style={{ paddingLeft: '15px', margin: '8px 0 0 0', color: '#666', fontSize: '14px', lineHeight: '1.5' }}>
                      {category.items.map((item, idx) => (
                        <li key={idx} style={{ marginBottom: '6px' }}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ПРАВА ЧАСТИНА: Документи та правила (Оригінальний стиль) */}
          <div className="tuitionRules">
            <div className="rulesBox">
              <h2><FaFileContract className="sectionIcon" /> Документи для оформлення</h2>
              <p>Для оформлення пільги з оплати за навчання подаються наступні документи:</p>
              
              <ul className="docsChecklist">
                <li>
                  <FaCheck className="checkIcon" />
                  <span>заява про надання пільги;</span>
                </li>
                <li>
                  <FaCheck className="checkIcon" />
                  <span>копія свідоцтва про народження дитини (або іншого документа, що посвідчує особу дитини);</span>
                </li>
                <li>
                  <FaCheck className="checkIcon" />
                  <span>копія документа, що посвідчує особу одного з батьків (законного представника);</span>
                </li>
                <li>
                  <FaCheck className="checkIcon" />
                  <span><strong>документи, які підтверджують право на отримання пільги</strong> відповідно до чинного законодавства України.</span>
                </li>
              </ul>

              <h3 style={{ fontSize: '15px', fontWeight: 'bold', margin: '20px 0 10px 0', color: '#333' }}>
                Залежно від категорії пільги можуть подаватися:
              </h3>
              
              <ul className="docsChecklist" style={{ opacity: 0.9 }}>
                <li><FaCheck className="checkIcon" style={{ color: '#888' }} /><span>посвідчення багатодітної сім'ї;</span></li>
                <li><FaCheck className="checkIcon" style={{ color: '#888' }} /><span>довідка про призначення допомоги малозабезпеченій сім'ї;</span></li>
                <li><FaCheck className="checkIcon" style={{ color: '#888' }} /><span>документ, що підтверджує інвалідність дитини;</span></li>
                <li><FaCheck className="checkIcon" style={{ color: '#888' }} /><span>документи, що підтверджують статус дитини-сироти;</span></li>
                <li><FaCheck className="checkIcon" style={{ color: '#888' }} /><span>довідка про взяття на облік ВПО;</span></li>
                <li><FaCheck className="checkIcon" style={{ color: '#888' }} /><span>довідка, що підтверджує статус дитини, яка постраждала внаслідок воєнних дій;</span></li>
                <li><FaCheck className="checkIcon" style={{ color: '#888' }} /><span>документи, що підтверджують статус члена сім'ї ветерана війни чи Захисника;</span></li>
                <li><FaCheck className="checkIcon" style={{ color: '#888' }} /><span>документи, що підтверджують загибель, зникнення безвісти, перебування в полоні.</span></li>
              </ul>
            </div>

            {/* ВАЖЛИВО */}
            <div className="deadlineAlert" style={{ marginBottom: '15px', backgroundColor: 'rgba(255, 193, 7, 0.1)', borderColor: 'rgba(255, 193, 7, 0.3)' }}>
              <FaInfoCircle className="alertIcon" style={{ color: '#ff9800' }} />
              <div className="alertText">
                <strong>Важливо:</strong> Пільга надається лише за однією підставою (у разі якщо дитина має право на кілька видів пільг) та за однією спеціалізацією за вибором батьків.
              </div>
            </div>

            {/* ТЕРМІНИ */}
            <div className="deadlineAlert" style={{ marginBottom: '15px' }}>
              <FaInfoCircle className="alertIcon" />
              <div className="alertText">
                <strong>Терміни подання:</strong> Документи подаються під час вступу до школи або після виникнення права на пільгу. У разі зміни обставин батьки зобов'язані повідомити адміністрацію школи.
              </div>
            </div>

            {/* ЗВЕРНІТЬ УВАГУ */}
            <div className="deadlineAlert" style={{ backgroundColor: '#f8f9fa', borderColor: '#ddd' }}>
              <FaInfoCircle className="alertIcon" style={{ color: '#6c757d' }} />
              <div className="alertText">
                <strong>Зверніть увагу:</strong> адміністрація школи має право запросити оригінали документів для ознайомлення та перевірки їх достовірності.
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default PreferentialTuition;