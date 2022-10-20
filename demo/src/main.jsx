import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'
import Building from './components/Building'
import NotFound from './components/NotFound'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route excat path='/' element={<App />} />
          <Route excat path='/ENG1' element={<><App /><Building name='ENG1'/></>}/>
          <Route excat path='/ENG2' element={<><App /><Building name='ENG2'/></>}/>
          <Route excat path='/ENG3' element={<><App /><Building name='ENG3'/></>}/>
          <Route excat path='/ENG4' element={<><App /><Building name='ENG4'/></>}/>
          <Route excat path='/ENG100' element={<><App /><Building name='ENG100'/></>}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
)
