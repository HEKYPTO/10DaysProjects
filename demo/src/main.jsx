import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import NotFound from './components/NotFound'
import BuildingInfo from './components/BuildingInfo'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route excat path='/' element={<App />} />
          <Route excat path='/building/:Id' element={<><App /><BuildingInfo/></>}/>
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
)