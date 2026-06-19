import { FaPencilAlt, FaPalette, FaShapes, FaMonument, FaLandmark, FaCut, FaExternalLinkAlt } from 'react-icons/fa';
import './Subjects.scss';

const Subjects = () => {
  // Масив навчальних предметів
  const subjectsData = [
    {
      id: 1,
      icon: <FaPencilAlt />,
      title: "Академічний рисунок",
      desc: "Основа образотворчого мистецтва. Вивчення пропорцій, перспективи, світлотіні та об'єму за допомогою графічних матеріалів (олівець, вугілля, сангіна)."
    },
    {
      id: 2,
      icon: <FaPalette />,
      title: "Живопис",
      desc: "Робота з кольором, вивчення його властивостей та впливу. Опанування технік роботи аквареллю, гуашшю та акрилом на різних форматах."
    },
    {
      id: 3,
      icon: <FaShapes />,
      title: "Композиція",
      desc: "Вміння організувати простір картини, виділити головне, створити гармонійний сюжет та передати настрій чи ідею."
    },
    {
      id: 4,
      icon: <FaMonument />,
      title: "Скульптура",
      desc: "Розвиток просторового мислення та відчуття форми. Практична робота з пластиліном, глиною та гіпсом: від простих геометричних тіл до портретів."
    },
    {
      id: 5,
      icon: <FaCut />,
      title: "Декоративно-прикладне мистецтво",
      desc: "Вивчення традиційних українських технік: петриківський розпис, писанкарство, витинанка, основи гончарства та ткацтва."
    },
    {
      id: 6,
      icon: <FaLandmark />,
      title: "Історія мистецтв",
      desc: "Теоретичний курс, що знайомить учнів зі світовими шедеврами, епохами, стилями та видатними художниками від античності до сучасності."
    }
  ];

  return (
    <div className="subjectsPage">
      {/* Універсальна шапка */}
      <section className="pageHeader">
        <div className="container">
          <h1 className="pageTitle">Навчальні предмети</h1>
          <p className="pageSubtitle">Комплексна програма для всебічного художнього розвитку</p>
        </div>
      </section>

      <section className="subjectsContent">
        <div className="container">
          
          {/* Сітка предметів */}
          <div className="subjectsGrid">
            {subjectsData.map(subject => (
              <div key={subject.id} className="subjectCard">
                <div className="subjectIcon">{subject.icon}</div>
                <h3 className="subjectTitle">{subject.title}</h3>
                <p className="subjectDesc">{subject.desc}</p>
              </div>
            ))}
          </div>

          {/* Блок із посиланням на програми МОН */}
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
                <FaExternalLinkAlt className="btnIcon" />
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Subjects;