// studio/schemaTypes/admissionRulesPage.js

export default {
  name: 'admissionRulesPage',
  title: '📝 Правила прийому (Дати та Кроки)',
  type: 'document',
  fields: [
    {
      name: 'campaignYear',
      title: 'Рік вступної кампанії',
      type: 'string',
      description: 'Наприклад: "2026"',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'introText',
      title: 'Вступний текст (Про вікові категорії)',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'steps',
      title: 'Етапи вступу (Кроки)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'iconName',
              title: 'Іконка етапу',
              type: 'string',
              options: {
                list: [
                  { title: '📝 Підпис/Заява', value: 'FaFileSignature' },
                  { title: '🎨 Палітра (Конкурс)', value: 'FaPalette' },
                  { title: '✅ Галочка/Зарахування', value: 'FaUserCheck' },
                  { title: '📅 Календар', value: 'FaCalendarAlt' },
                ],
                layout: 'dropdown',
              },
              validation: (Rule) => Rule.required(),
            },
            { name: 'title', title: 'Назва етапу', type: 'string', validation: (Rule) => Rule.required() },
            { name: 'date', title: 'Дати (напр. "15 травня - 15 червня")', type: 'string', validation: (Rule) => Rule.required() },
            { name: 'text', title: 'Опис етапу', type: 'text', validation: (Rule) => Rule.required() },
          ]
        }
      ]
    },
    {
      name: 'documentsList',
      title: 'Перелік необхідних документів',
      type: 'array',
      of: [{ type: 'string' }], // Масив звичайних рядків
      description: 'Додавайте по одному пункту. Вони автоматично стануть списком на сайті.',
    },
    {
      name: 'importantNotice',
      title: 'Важливе зауваження (текст знизу)',
      type: 'text',
      description: 'Наприклад, про обов\'язкову наявність оригіналу свідоцтва.',
    }
  ],
}