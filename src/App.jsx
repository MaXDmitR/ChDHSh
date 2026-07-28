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

import Footer from '@/components/Footer/Footer'

import TeacherProfile from '@/pages/Teachers/TeacherProfile'

import EducationLevels from '@/pages/EducationLevels/EducationLevels'



const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutSchool />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/teachers/:id" element={<TeacherProfile />} />
          <Route path="/educationlevels" element={<EducationLevels />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/works-archive" element={<WorksArchive />} />
          <Route path="/admissionrules" element={<AdmissionRules />} />
          {/*<Route path="/statement" element={<Statement />} />*/}
          <Route path="/preferentialtuition" element={<PreferentialTuition />} />
          <Route path="/gallery/2025-2026" element={<Gallery year="2025-2026" />} />
          <Route path="/gallery/2024-2025" element={<Gallery year="2024-2025" />} />
          <Route path="/gallery/2023-2024" element={<Gallery year="2023-2024" />} />
          <Route path="/gallery/2022-2023" element={<Gallery year="2022-2023" />} />
          <Route path="/gallery/2021-2022" element={<Gallery year="2021-2022" />} />
          <Route path="/gallery/2020-2021" element={<Gallery year="2020-2021" />} />

        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  )
}

export default App
