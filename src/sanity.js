// src/sanity.js
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Підключаємося до нашої бази
export const client = createClient({
  projectId: 'o0pptx09', // Встав сюди скопійований ID!
  dataset: 'production',
  useCdn: true, // Використовувати кеш для швидкості
  apiVersion: '2024-03-01', // Сучасна версія API
});

// Налаштовуємо інструмент для картинок
const builder = imageUrlBuilder(client);

// Цю функцію ми будемо викликати, щоб отримати URL картинки
export const urlFor = (source) => {
  return builder.image(source);
};