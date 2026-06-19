import './Teachers.scss';

const Teachers = () => {
  // Масив з даними викладачів. Потім замовниця зможе легко замінити імена та тексти.
  const teachersData = [
    {
      id: 1,
      name: "Олена Коваленко",
      role: "Викладач живопису та композиції",
      description: "Має понад 15 років досвіду роботи з дітьми. Членкиня Національної спілки художників України. Вчить бачити світ через призму кольору.",
      // Тимчасові фото з Unsplash (портрети людей)
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Михайло Петренко",
      role: "Викладач скульптури та ліплення",
      description: "Скульптор, чиї роботи прикрашають виставки нашого міста. Допомагає дітям розвивати просторове мислення та відчуття форми.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Анна Ткаченко",
      role: "Викладач історії мистецтв",
      description: "Мистецтвознавиця. Знає, як захопити дітей розповідями про шедеври Відродження та сучасні арт-течії.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: 4,
      name: "Олександр Бойко",
      role: "Викладач графіки та дизайну",
      description: "Майстер лінориту та офорту. Навчає учнів працювати з лінією, плямою та опановувати складні графічні техніки.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop"
    }
  ];

  return (
    <div className="teachersPage">
      {/* Універсальна шапка */}
      <section className="pageHeader">
        <div className="container">
          <h1 className="pageTitle">Наші викладачі</h1>
          <p className="pageSubtitle">Професіонали, які надихають та розкривають таланти</p>
        </div>
      </section>

      {/* Сітка викладачів */}
      <section className="teachersContent">
        <div className="container">
          <div className="teachersGrid">
            {teachersData.map((teacher) => (
              <div key={teacher.id} className="teacherCard">
                <div className="teacherImageWrapper">
                  <img src={teacher.image} alt={teacher.name} className="teacherImage" />
                </div>
                <div className="teacherInfo">
                  <h3 className="teacherName">{teacher.name}</h3>
                  <span className="teacherRole">{teacher.role}</span>
                  <p className="teacherDesc">{teacher.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teachers;