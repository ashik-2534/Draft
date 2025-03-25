import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import MainLayouts from './Layouts/MainLayouts.jsx'
import Home from './Pages/Home.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<MainLayouts/>}>
        <Route path='/' element={<Home/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
);
