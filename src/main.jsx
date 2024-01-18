import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Outlet, Routes, Route } from 'react-router-dom'
import Header from './components/Header/header'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>  
      <React.StrictMode>
        <Header />
        <Routes>
          <Route path="/dashboard" element={<h1>Dashboard</h1>}></Route>
          <Route path="/messanger" element={<h1>Messanger</h1>}></Route>
          <Route path="/marks" element={<h1>Marks</h1>}></Route>
        </Routes>
        <main className="page-container">
            <Outlet />
        </main>
      </React.StrictMode>
  </BrowserRouter>,
)
