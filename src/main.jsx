import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import HomePage from './Pages/HomePage.jsx'
import  {BrowserRouter, Routes,Route } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />}>
      </Route>
    </Routes>
    </BrowserRouter>

)
