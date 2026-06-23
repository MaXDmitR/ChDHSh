import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { client, urlFor } from '@/sanity'; // Підключаємо нашого клієнта
import './Teachers.scss';

const Teachers = () => {
  // Стейт для зберігання викладачів (поки вантажиться — масив порожній)
  const [teachers, setTeachers] = useState([]);

  // useEffect спрацює один раз при завантаженні сторінки
  useEffect(() => {
    // GROQ-запит: "Дістань усі документи з типом teacher"
    const query = '*[_type == "teacher"]';
    
    client.fetch(query)
      .then((data) => {
        setTeachers(data); // Зберігаємо отримані дані в стейт
      })
      .catch((error) => console.error('Помилка завантаження даних:', error));
  }, []);

  return (
    <div className="teachersPage">
      <section className="pageHeader">
        <div className="container">
          <h1 className="pageTitle">Наші викладачі</h1>
          <p className="pageSubtitle">Професіонали, які надихають та розкривають таланти</p>
        </div>
      </section>

      <section className="teachersContent">
        <div className="container">
          <div className="teachersGrid">
            {/* Рендеримо дані вже з Sanity */}
            {teachers.map((teacher) => (
              <div key={teacher._id} className="teacherCard"> {/* Sanity використовує _id */}
                <div className="teacherImageWrapper">
                  {/* Якщо у викладача є картинка, проганяємо її через urlFor */}
                  {teacher.image && (
                    <img 
                      src={urlFor(teacher.image).url()} 
                      alt={teacher.name} 
                      className="teacherImage" 
                    />
                  )}
                </div>
                <div className="teacherInfo">
                  <h3 className="teacherName">{teacher.name}</h3>
                  <span className="teacherRole">{teacher.role}</span>
                  <p className="teacherDesc">{teacher.shortDesc}</p>
                  
                  {/* Посилання на персональну сторінку */}
                  <Link to={`/teachers/${teacher._id}`} className="btn btnPrimary teacherBtn">
                    Детальніше
                  </Link>
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