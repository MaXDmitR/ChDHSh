import { useState } from 'react';
import { FaDownload, FaFileAlt, FaCheckCircle } from 'react-icons/fa';
import './Statement.scss';

const Statement = () => {
  // Стейт для форми
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    childBirthDate: '',
    address: '',
    phone: '',
    groupType: 'first-grade' // за замовчуванням 1-й клас
  });

  // Стейт для показу повідомлення про успішне надсилання
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Обробник змін в інпутах
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Обробник відправки форми
  const handleSubmit = (e) => {
    e.preventDefault();
    // Тут у майбутньому буде логіка відправки на бекенд або Sanity
    console.log('Дані заяви:', formData);
    setIsSubmitted(true);
  };

  return (
    <div className="statementPage">
      {/* Універсальна шапка */}
      <section className="pageHeader">
        <div className="container">
          <h1 className="pageTitle">Заява на вступ</h1>
          <p className="pageSubtitle">Подайте попередню заявку онлайн або завантажте офіційний бланк</p>
        </div>
      </section>

      <section className="statementContent">
        <div className="container statementGrid">
          
          {/* ЛІВА ЧАСТИНА: Форма онлайн подачі */}
          <div className="statementFormWrapper">
            <h2>Онлайн-форма попередньої реєстрації</h2>
            <p className="formNotice">
              Заповніть поля нижче, щоб сформувати попередню заявку. Наш секретар зв'яжеться з вами для підтвердження.
            </p>

            {isSubmitted ? (
              <div className="formSuccessMessage">
                <FaCheckCircle className="successIcon" />
                <h3>Заяву успішно сформовано!</h3>
                <p>Дякуємо! Попередня заявка прийнята. Очікуйте на дзвінок від адміністрації школи найближчим часом.</p>
                <button className="btn btnPrimary" onClick={() => setIsSubmitted(false)}>Подати ще одну</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="admissionForm">
                <div className="formGroup">
                  <label htmlFor="parentName">ПІБ одного з батьків (опікуна) *</label>
                  <input 
                    type="text" 
                    id="parentName" 
                    name="parentName" 
                    value={formData.parentName} 
                    onChange={handleChange} 
                    required 
                    placeholder="Наприклад: Петренко Іван Васильович"
                  />
                </div>

                <div className="formGroup">
                  <label htmlFor="childName">ПІБ дитини *</label>
                  <input 
                    type="text" 
                    id="childName" 
                    name="childName" 
                    value={formData.childName} 
                    onChange={handleChange} 
                    required 
                    placeholder="Наприклад: Петренко Марія Іванівна"
                  />
                </div>

                <div className="formRow">
                  <div className="formGroup">
                    <label htmlFor="childBirthDate">Дата народження дитини *</label>
                    <input 
                      type="date" 
                      id="childBirthDate" 
                      name="childBirthDate" 
                      value={formData.childBirthDate} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>

                  <div className="formGroup">
                    <label htmlFor="groupType">Оберіть рівень навчання *</label>
                    <select 
                      id="groupType" 
                      name="groupType" 
                      value={formData.groupType} 
                      onChange={handleChange}
                    >
                      <option value="first-grade">1-й клас (9-11 років)</option>
                      <option value="elementary">Підготовча група (6-8 років)</option>
                      <option value="advanced">Старші класи (перевідний курс)</option>
                    </select>
                  </div>
                </div>

                <div className="formGroup">
                  <label htmlFor="phone">Контактний телефон батьків *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    required 
                    placeholder="+38 (0XX) XXX-XX-XX"
                  />
                </div>

                <div className="formGroup">
                  <label htmlFor="address">Домашня адреса (місце проживання) *</label>
                  <input 
                    type="text" 
                    id="address" 
                    name="address" 
                    value={formData.address} 
                    onChange={handleChange} 
                    required 
                    placeholder="м. Черкаси, вул. Творча, буд. 1, кв. 5"
                  />
                </div>

                <button type="submit" className="btn btnPrimary submitBtn">Надіслати заявку</button>
              </form>
            )}
          </div>

          {/* ПРАВА ЧАСТИНА: Скачування паперового бланка */}
          <div className="statementDownloadBlock">
            <div className="downloadCard">
              <FaFileAlt className="docIcon" />
              <h3>Паперовий бланк заяви</h3>
              <p>
                Якщо ви віддаєте перевагу класичному способу, ви можете завантажити офіційний зразок заяви, 
                роздрукувати його, заповнити від руки та принести особисто до канцелярії художньої школи.
              </p>
              {/* Посилання-заглушка на скачування файлу */}
              <a href="#" className="btn btnSecondary downloadBtn" onClick={(e) => e.preventDefault()}>
                <FaDownload /> Завантажити .DOCX (0.5 МБ)
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Statement;