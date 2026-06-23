// studio/schemaTypes/teacher.js

export default {
  name: 'teacher', // Технічна назва (для коду)
  title: 'Викладачі', // Красива назва для адмінки
  type: 'document', // Це означає, що це окремий запис (документ) у базі
  fields: [
    {
      name: 'name',
      title: 'ПІБ Викладача',
      type: 'string',
      validation: (Rule) => Rule.required().error("Ім'я обов'язкове"),
    },
    {
      name: 'role',
      title: 'Посада / Спеціалізація',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'shortDesc',
      title: 'Короткий опис (для списку)',
      type: 'text', // text дає більше поле для вводу, ніж string
    },
    {
      name: 'fullDesc',
      title: 'Повна біографія (для сторінки профілю)',
      type: 'text',
    },
    {
      name: 'education',
      title: 'Освіта',
      type: 'string',
    },
    {
      name: 'achievements',
      title: 'Досягнення',
      type: 'array', // Масив, щоб директорка могла додавати пункт за пунктом
      of: [{ type: 'string' }],
    },
    {
      name: 'image',
      title: 'Фото викладача',
      type: 'image',
      options: {
        hotspot: true, // Це супер-фіча Sanity! Дозволяє обрізати фото (фокусуватися на обличчі) прямо в адмінці
      },
    },
  ],
}