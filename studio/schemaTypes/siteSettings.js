// studio/schemaTypes/siteSettings.js

export default {
  name: 'siteSettings',
  title: '⚙️ Налаштування та Контакти',
  type: 'document',
  fields: [
    {
      name: 'address',
      title: 'Фізична адреса школи',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'phoneMain',
      title: 'Головний телефон',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'phoneSecondary',
      title: 'Додатковий телефон',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Електронна пошта',
      type: 'string',
      validation: (Rule) => Rule.required().email(), // Sanity сам перевірить, чи це валідний email!
    },
    {
      name: 'facebookUrl',
      title: 'Посилання на Facebook',
      type: 'url',
    },
    {
      name: 'instagramUrl',
      title: 'Посилання на Instagram',
      type: 'url',
    },
  ],
}