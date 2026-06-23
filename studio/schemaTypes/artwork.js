// studio/schemaTypes/artwork.js

export default {
  name: 'artwork',
  title: '🖼 Галерея (Роботи учнів)', // Емодзі робить адмінку привітнішою
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Назва роботи',
      type: 'string',
      description: 'Наприклад: "Весняний настрій" або "Натюрморт з яблуками"',
      validation: (Rule) => Rule.required().error('Назва обов\'язкова! Хоча б "Без назви"'),
    },
    {
      name: 'author',
      title: 'Автор та вік',
      type: 'string',
      description: 'Наприклад: "Марія, 10 років"',
    },
    {
      name: 'year',
      title: 'Навчальний рік',
      type: 'string',
      description: 'Пишіть строго у форматі РРРР-РРРР (наприклад: 2025-2026 або 2028-2029)',
      validation: (Rule) => Rule.required().regex(/^\d{4}-\d{4}$/, {
        name: 'academic year format',
        invert: false
      }).error('Неправильний формат! Використовуйте РРРР-РРРР (наприклад, 2026-2027)'),
    },
    {
      name: 'image',
      title: 'Фотографія роботи',
      type: 'image',
      options: {
        hotspot: true, // Дозволяє обрізати картинку
      },
      validation: (Rule) => Rule.required().error('Завантажте фото роботи!'),
    },
  ],
  // Робимо так, щоб у загальному списку адмінки показувалась мініатюра, назва і рік
  preview: {
    select: {
      title: 'title',
      subtitle: 'year', // Під назвою буде писати рік
      media: 'image',   // А зліва буде прев'юшка малюнка
    },
  },
}