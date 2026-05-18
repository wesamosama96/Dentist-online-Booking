import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './Layouts/MainLayout'
import LandingPage from './Pages/LandingPage/LandingPage'
import Contact from './Pages/contact/Contact'
import Services from './Pages/Services/Services'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />


        </Route>

      </Routes>
    </>
  )
}

export default App
