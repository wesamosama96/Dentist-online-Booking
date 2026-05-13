import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './Layouts/MainLayout'
import LandingPage from './Pages/LandingPage/LandingPage'
import Dashboard from './Pages/Dashboard/Dashboard'
import Status from './components/Status/Status'
import Appointments from './Pages/Dashboard/Appointments'
import Records from './Pages/Dashboard/Records'
import Billing from './Pages/Dashboard/Billing'
import Settings from './Pages/Dashboard/Settings'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='/' element={<LandingPage />} />
      </Route>
      <Route path='/dashboard' element={<Dashboard />} >
        <Route index element={<Status />} />
        <Route path='/dashboard/Overview' element={<Status />} />
        <Route path='/dashboard/Appointments' element={<Appointments />} />
        <Route path='/dashboard/Records' element={<Records />} />
        <Route path='/dashboard/Billing' element={<Billing />} />
        <Route path='/dashboard/Settings' element={<Settings />} />
      </Route>
    </Routes>
    
    </>
  )
}

export default App
