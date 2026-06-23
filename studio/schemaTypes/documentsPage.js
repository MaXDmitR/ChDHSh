// studio/schemaTypes/documentsPage.js

export default {
  name: 'documentsPage',
  title: '📄 Документи для вступу (Бланк заяви)',
  type: 'document',
  fields: [
    {
      name: 'statementFile',
      title: 'Файл бланка заяви (.docx, .pdf)',
      type: 'file',
      description: 'Завантажте актуальний бланк заяви, який батьки зможуть скачати.',
      options: {
        accept: '.doc,.docx,.pdf',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'fileLabel',
      title: 'Текст на кнопці (Назва файлу)',
      type: 'string',
      description: 'Наприклад: "Завантажити .DOCX (0.5 МБ)"',
      initialValue: 'Завантажити бланк заяви',
    },
    {
      // НАШЕ НОВЕ ПОЛЕ ДЛЯ EMAILJS
      name: 'notificationEmail',
      title: '📩 Email для отримання онлайн-заяв',
      type: 'string',
      description: 'На цю пошту приходитимуть дані, які батьки заповнюють в онлайн-формі.',
      validation: (Rule) => Rule.required().email().error('Введіть коректну електронну пошту!'),
      initialValue: 'chdxsh_narbuta@ukr.net',
    }
  ],
}