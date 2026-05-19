import React from 'react'
import Header from './components/Header/Header'
import { BrowserRouter, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import './styles/_variables.scss'


// Імпорт сторінок
import Home from '@/pages/Home/Home'

import AboutSchool from '@/pages/AboutSchool/AboutSchool'
import Teachers from '@/pages/Teachers/Teachers'
import Contacts from '@/pages/Contacts/Contacts'

import AdmissionRules from '@/pages/AdmissionRules/AdmissionRules'
import Statement from '@/pages/Statement/Statement'
import PreferentialTuition from '@/pages/PreferentialTuition/PreferentialTuition'

import Subjects from '@/pages/Subjects/Subjects'


import WorksArchive from '@/pages/WorksArchive/WorksArchive'
import Gallery from '@/pages/Gallery/Gallery'



const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutSchool />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/works-archive" element={<WorksArchive />} />
          <Route path="/admission/rules" element={<AdmissionRules />} />
          <Route path="/statement" element={<Statement />} />
          <Route path="/preferentialtuition" element={<PreferentialTuition />} />
          <Route path="/gallery/2025-2026" element={<Gallery year="2025-2026" />} />
          <Route path="/gallery/2024-2025" element={<Gallery year="2024-2025" />} />
          
        </Routes>

      </main>
    </BrowserRouter>
  )
}

export default App
