import { useState, useEffect } from 'react';
import { FaDownload, FaFileAlt, FaCheckCircle, FaSpinner } from 'react-icons/fa';
import { client } from '@/sanity';
import emailjs from '@emailjs/browser'; // Підключаємо EmailJS
import './Statement.scss';

const Statement = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    childBirthDate: '',
    address: '',
    phone: '',
    groupType: 'first-grade'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false); // Стейт для лоадера на кнопці
  const [documentData, setDocumentData] = useState(null);

  useEffect(() => {
    const query = `*[_type == "documentsPage"][0]{
      fileLabel,
      notificationEmail,
      "fileUrl": statementFile.asset->url
    }`;

    client.fetch(query)
      .then((data) => setDocumentData(data))
      .catch(console.error);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true); // Вмикаємо лоадер

    // Дістаємо пошту з Sanity (або використовуємо дефолтну, якщо там пусто)
    const targetEmail = documentData?.notificationEmail || 'chdxsh_narbuta@ukr.net';

    // Формуємо об'єкт змінних, які очікує наш шаблон в EmailJS
    const templateParams = {
      parent_name: formData.parentName,
      child_name: formData.childName,
      child_birth_date: formData.childBirthDate,
      group_type: formData.groupType,
      phone: formData.phone,
      address: formData.address,
      to_email: targetEmail
    };

    // ВІДПРАВКА ЛИСТА (Заміни 'YOUR_...' на свої реальні ключі!)
    emailjs.send(
      'service_2qmb476',   // Твій Service ID (напр. service_x8ab...)
      'template_a7xf7n6',  // Твій Template ID (напр. template_qwerty)
      templateParams,
      'nQe_zAdkpnYPz4Bxg'    // Твій Public Key (з розділу Account)
    )
      .then((response) => {
        console.log('Успіх!', response.status, response.text);
        setIsSending(false);
        setIsSubmitted(true);
        // Очищаємо форму після успішної відправки
        setFormData({
          parentName: '', childName: '', childBirthDate: '', address: '', phone: '', groupType: 'first-grade'
        });
      })
      .catch((err) => {
        console.error('Помилка відправки:', err);
        alert('Сталася помилка при відправці. Перевірте з\'єднання або спробуйте пізніше.');
        setIsSending(false);
      });
  };

  return (
    <div className="statementPage">
      <section className="pageHeader">
        <div className="container">
          <h1 className="pageTitle">Заява на вступ</h1>
          <p className="pageSubtitle">Подайте попередню заявку онлайн або завантажте офіційний бланк</p>
        </div>
      </section>

      <section className="statementContent">
        <div className="container statementGrid">

          <div className="statementFormWrapper">
            <h2>Онлайн-форма попередньої реєстрації</h2>
            <p className="formNotice">
              Заповніть поля нижче, щоб сформувати попередню заявку. Наш секретар зв'яжеться з вами для підтвердження.
            </p>

            {isSubmitted ? (
              <div className="formSuccessMessage">
                <FaCheckCircle className="successIcon" />
                <h3>Заяву успішно надіслано!</h3>
                <p>Дякуємо! Попередня заявка прийнята і відправлена адміністрації. Очікуйте на дзвінок найближчим часом.</p>
                <button className="btn btnPrimary" onClick={() => setIsSubmitted(false)}>Подати ще одну</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="admissionForm">
                <div className="formGroup">
                  <label htmlFor="parentName">ПІБ одного з батьків (опікуна) *</label>
                  <input type="text" id="parentName" name="parentName" value={formData.parentName} onChange={handleChange} required placeholder="Наприклад: Петренко Іван Васильович" />
                </div>

                <div className="formGroup">
                  <label htmlFor="childName">ПІБ дитини *</label>
                  <input type="text" id="childName" name="childName" value={formData.childName} onChange={handleChange} required placeholder="Наприклад: Петренко Марія Іванівна" />
                </div>

                <div className="formRow">
                  <div className="formGroup">
                    <label htmlFor="childBirthDate">Дата народження дитини *</label>
                    <input type="date" id="childBirthDate" name="childBirthDate" value={formData.childBirthDate} onChange={handleChange} required />
                  </div>

                  <div className="formGroup">
                    <label htmlFor="groupType">Оберіть рівень навчання *</label>
                    <select id="groupType" name="groupType" value={formData.groupType} onChange={handleChange}>
                      <option value="1-й клас (9-11 років)">1-й клас (9-11 років)</option>
                      <option value="Підготовча група (6-8 років)">Підготовча група (6-8 років)</option>
                      <option value="Старші класи (перевідний курс)">Старші класи (перевідний курс)</option>
                    </select>
                  </div>
                </div>

                <div className="formGroup">
                  <label htmlFor="phone">Контактний телефон батьків *</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+38 (0XX) XXX-XX-XX" />
                </div>

                <div className="formGroup">
                  <label htmlFor="address">Домашня адреса (місце проживання) *</label>
                  <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required placeholder="м. Черкаси, вул. Творча, буд. 1, кв. 5" />
                </div>

                <div className="formGroup checkboxGroup" style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '20px' }}>
                  <input
                    type="checkbox"
                    id="dataConsent"
                    name="dataConsent"
                    required
                    style={{ marginTop: '5px', cursor: 'pointer' }}
                  />
                  <label htmlFor="dataConsent" style={{ fontSize: '13px', color: '#666', lineHeight: '1.4', cursor: 'pointer' }}>
                    Я даю згоду на обробку моїх персональних даних та персональних даних моєї дитини
                    відповідно до Закону України «Про захист персональних даних» з метою організації вступного процесу.
                  </label>
                </div>

                <button type="submit" className="btn btnPrimary submitBtn" disabled={isSending}>
                  {isSending ? 'Відправлення...' : 'Надіслати заявку'}
                </button>
              </form>
            )}
          </div>

          <div className="statementDownloadBlock">
            <div className="downloadCard">
              <FaFileAlt className="docIcon" />
              <h3>Паперовий бланк заяви</h3>
              <p>Якщо ви віддаєте перевагу класичному способу, ви можете завантажити офіційний зразок заяви, роздрукувати його, заповнити від руки та принести особисто до канцелярії художньої школи.</p>

              {documentData?.fileUrl ? (
                <a href={documentData.fileUrl} target="_blank" rel="noreferrer" className="btn btnSecondary downloadBtn" download>
                  <FaDownload /> {documentData.fileLabel || 'Завантажити бланк'}
                </a>
              ) : (
                <button className="btn btnSecondary downloadBtn" disabled>
                  <FaDownload /> Бланк завантажується...
                </button>
              )}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Statement;