// studio/schemaTypes/aboutPage.js

export default {
  name: 'aboutPage',
  title: '🏫 Сторінка "Про школу"',
  type: 'document',
  fields: [
    {
      name: 'heading',
      title: 'Головний заголовок',
      type: 'string',
      description: 'Наприклад: "Творимо майбутнє мистецтва"',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'text',
      title: 'Основний текст (Історія та місія)',
      type: 'text',
      description: 'Пишіть текст тут. Щоб зробити новий абзац, просто натисніть Enter.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'mainImage',
      title: 'Головне фото (творчий процес)',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'yearsHistory',
      title: 'Років історії (напр. "40+")',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'graduatesCount',
      title: 'Кількість випускників (напр. "1000+")',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'teachersCount',
      title: 'Кількість викладачів (напр. "15")',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
}