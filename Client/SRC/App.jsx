import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './Layouts/MainLayout'
import LandingPage from './Pages/LandingPage/LandingPage'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='/' element={<LandingPage />} />
      </Route>
    </Routes>
    </>
  )
}

export default App
