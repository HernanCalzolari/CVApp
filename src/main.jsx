import React from 'react'
import ReactDOM from 'react-dom/client'
import PersonalInfo from './components/PersonalInfo'
import EducationInfo from './components/EducationInfo'
import WorkInfo from './components/WorkInfo'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersonalInfo />
    <EducationInfo />
    <WorkInfo />
  </React.StrictMode>,
)
