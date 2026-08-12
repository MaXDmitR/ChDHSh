export default {
  name: 'teacher', 
  title: 'Викладачі', 
  type: 'document', 
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
    // НОВЕ ПОЛЕ ДЛЯ СОРТУВАННЯ
    {
      name: 'order',
      title: 'Порядковий номер (Сортування)',
      type: 'number',
      description: 'Якщо не важливий порядок, залиште поле порожнім',
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
      type: 'array', 
      of: [{ type: 'string' }],
    },
    {
      name: 'image',
      title: 'Фото викладача',
      type: 'image',
      options: {
        hotspot: true, 
      },
    },
  ],
}