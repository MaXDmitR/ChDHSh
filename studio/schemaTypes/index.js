// studio/schemaTypes/index.js
import teacher from './teacher'
import artwork from './artwork'
import subject from './subject'
import siteSettings from './siteSettings'
import aboutPage from './aboutPage'
import documentsPage from './documentsPage'
import admissionRulesPage from './admissionRulesPage' // 1. Імпорт

export const schemaTypes = [
  teacher, 
  artwork, 
  subject, 
  siteSettings, 
  aboutPage, 
  documentsPage, 
  admissionRulesPage // 2. Додаємо в масив
]