import './AboutSchool.scss';

const AboutSchool = () => {
  return (
    <div className="aboutPage">
      {/* Універсальна шапка сторінки */}
      <section className="pageHeader">
        <div className="container">
          <h1 className="pageTitle">Про школу</h1>
          <p className="pageSubtitle">Історія, місія та цінності нашого навчального закладу</p>
        </div>
      </section>

      {/* Основний контент */}
      <section className="aboutContent">
        <div className="container aboutGrid">
          <div className="aboutText">
            <h2>Творимо майбутнє мистецтва</h2>
            <p>
              Черкаська державна художня школа ім. Данила Нарбута — це не просто навчальний заклад,
              а справжня родина для юних талантів. Ми пишаємося нашою історією та традиціями класичної
              художньої освіти, гармонійно поєднуючи їх із сучасними підходами до творчості.
            </p>
            <p>
              Школа гордо носить ім'я видатного українського художника-графіка, театрального живописця
              <strong> Данила Нарбута</strong>. Його любов до українських традицій, глибокий символізм
              та безкомпромісне служіння мистецтву є головним орієнтиром для наших викладачів та учнів.
            </p>

            {/* Блок з цифрами для солідності */}
            <div className="aboutStats">
              <div className="statItem">
                <span className="statNumber">40+</span>
                <span className="statLabel">Років історії</span>
              </div>
              <div className="statItem">
                <span className="statNumber">1000+</span>
                <span className="statLabel">Випускників</span>
              </div>
              <div className="statItem">
                <span className="statNumber">15</span>
                <span className="statLabel">Професійних викладачів</span>
              </div>
            </div>
          </div>

          <div className="aboutImageWrapper">
            <img
              src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=800&auto=format&fit=crop"
              alt="Художній процес у школі"
              className="aboutImg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSchool;