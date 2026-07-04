import { FaChild, FaPaintBrush, FaUserGraduate, FaClock, FaUser } from 'react-icons/fa';
import './EducationLevels.scss';

const EducationLevels = () => {
  const levels = [
    {
      id: 1,
      title: "Елементарний підрівень",
      icon: <FaChild />,
      age: "від 6 років (1–4 класи)",
      duration: "4 роки",
      description: "Спрямований на ознайомлення дітей зі світом образотворчого мистецтва, розвиток творчих здібностей, естетичного смаку та опанування основних художніх навичок. Навчання на цьому етапі не передбачає обов’язкового продовження професійної мистецької освіти."
    },
    {
      id: 2,
      title: "Базовий (середній) підрівень",
      icon: <FaPaintBrush />,
      age: "від 10 років (5–9 класи)",
      duration: "5 років",
      description: "Учні поглиблено вивчають фахові дисципліни, удосконалюють практичні навички та розвивають власний творчий потенціал. Навчання орієнтоване як на особистісний розвиток засобами мистецтва, так і на підготовку до вступу в мистецькі коледжі та інші заклади фахової освіти."
    },
    {
      id: 3,
      title: "Поглиблений (профільний) підрівень",
      icon: <FaUserGraduate />,
      age: "від 15 років (10–11 класи)",
      duration: "2 роки",
      description: "Забезпечує профільну підготовку учнів, які планують пов’язати своє майбутнє з мистецтвом. Освітня програма спрямована на формування професійних компетентностей, профорієнтацію та якісну підготовку до вступних випробувань у фахові мистецькі коледжі та заклади вищої освіти сфери культури і мистецтв."
    }
  ];

  return (
    <div className="levelsPage">
      <section className="pageHeader">
        <div className="container">
          <h1 className="pageTitle">Рівні навчання</h1>
          <p className="pageSubtitle">Етапи мистецької освіти в нашій школі</p>
        </div>
      </section>

      <section className="levelsContent">
        <div className="container">
          <div className="levelsIntro">
            <p>
              У Черкаській дитячій художній школі ім. Данила Нарбута освітній процес здійснюється відповідно до системи початкової мистецької освіти, яка складається з трьох обов’язкових підрівнів: елементарного, базового (середнього) та поглибленого (профільного). 
            </p>
            <p>
              Навчання відбувається паралельно із здобуттям загальної середньої освіти та враховує вікові особливості й освітні потреби учнів.
            </p>
          </div>

          <div className="levelsGrid">
            {levels.map((level) => (
              <div key={level.id} className="levelCard">
                <div className="levelIconWrapper">
                  {level.icon}
                </div>
                <h2 className="levelTitle">{level.title}</h2>
                
                <div className="levelBadges">
                  <div className="badge">
                    <FaUser className="badgeIcon" />
                    <span>{level.age}</span>
                  </div>
                  <div className="badge">
                    <FaClock className="badgeIcon" />
                    <span>{level.duration}</span>
                  </div>
                </div>

                <p className="levelDesc">{level.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EducationLevels;