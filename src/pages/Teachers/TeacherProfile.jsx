import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaGraduationCap, FaTrophy } from 'react-icons/fa';
import { client, urlFor } from '@/sanity'; // Підключаємо Sanity
import './TeacherProfile.scss';

const TeacherProfile = () => {
  const { id } = useParams(); // Дістаємо Sanity ID з адресного рядка
  const navigate = useNavigate();
  
  // Стейт для викладача та статусу завантаження
  const [teacher, setTeacher] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // GROQ-запит: Шукаємо викладача, у якого _id співпадає з нашим id з URL. 
    // [0] в кінці означає, що нам потрібен один об'єкт, а не масив.
    const query = '*[_type == "teacher" && _id == $id][0]';
    
    client.fetch(query, { id })
      .then((data) => {
        setTeacher(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Помилка завантаження профілю:', error);
        setIsLoading(false);
      });
  }, [id]);

  // Показуємо лоадер, поки дані летять із сервера
  if (isLoading) {
    return (
      <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
        <h2>Завантаження даних...</h2>
      </div>
    );
  }

  // Якщо сервер відповів, але викладача з таким ID не існує
  if (!teacher) {
    return (
      <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
        <h2>Викладача не знайдено</h2>
        <button className="btn btnPrimary" onClick={() => navigate('/teachers')}>Повернутися до списку</button>
      </div>
    );
  }

  return (
    <div className="teacherProfilePage">
      <div className="container profileContainer">
        
        <button className="backBtn" onClick={() => navigate('/teachers')}>
          <FaArrowLeft /> Повернутися до списку
        </button>

        <div className="profileGrid">
          <div className="profileSidebar">
            <div className="profileImageWrapper">
              {/* Проганяємо фото через urlFor */}
              {teacher.image && (
                <img src={urlFor(teacher.image).url()} alt={teacher.name} />
              )}
            </div>
            <div className="profileQuickInfo">
              <h1 className="profileName">{teacher.name}</h1>
              <span className="profileRole">{teacher.role}</span>
            </div>
          </div>

          <div className="profileDetails">
            <section className="detailSection">
              <h2>Про викладача</h2>
              <p className="fullDesc">{teacher.fullDesc || teacher.shortDesc}</p>
            </section>

            {/* Показуємо освіту, тільки якщо вона заповнена в адмінці */}
            {teacher.education && (
              <section className="detailSection">
                <h2><FaGraduationCap className="sectionIcon" /> Освіта</h2>
                <p>{teacher.education}</p>
              </section>
            )}

            {/* Показуємо досягнення, тільки якщо масив існує і не порожній */}
            {teacher.achievements && teacher.achievements.length > 0 && (
              <section className="detailSection">
                <h2><FaTrophy className="sectionIcon" /> Досягнення</h2>
                <ul className="achievementsList">
                  {teacher.achievements.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default TeacherProfile;