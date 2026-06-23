// studio/schemaTypes/subject.js

export default {
  name: 'subject',
  title: '📚 Навчальні предмети',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Назва предмета',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Опис предмета',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'iconName',
      title: 'Виберіть іконку для предмета',
      type: 'string',
      options: {
        list: [
          { title: '✏️ Олівець (Рисунок)', value: 'FaPencilAlt' },
          { title: '🎨 Палітра (Живопис)', value: 'FaPalette' },
          { title: '🔺 Фігури (Композиція)', value: 'FaShapes' },
          { title: '🗿 Скульптура', value: 'FaMonument' },
          { title: '🏛 Будівля (Історія мистецтв)', value: 'FaLandmark' },
          { title: '✂️ Ножиці (Декор/Прикладне)', value: 'FaCut' },
          { title: '📖 Відкрита книга', value: 'FaBookOpen' },
          { title: '⭐ Зірка (Універсальна)', value: 'FaStar' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required().error('Виберіть іконку!'),
    },
    {
      name: 'order',
      title: 'Порядковий номер',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'iconName',
    },
  },
}