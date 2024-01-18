import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Outlet, Routes, Route } from 'react-router-dom'
import Header from './components/Header/header'
import NavBar from './components/NavBar/navbar'
import "./reset.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>  
      <React.StrictMode>
        <NavBar />
        <div className="route-page">
            <Header />
            <Routes>
              <Route path="/dashboard" element={<h1>Dashboard</h1>}></Route>
              <Route path="/messanger" element={<h1>Messanger</h1>}></Route>
              <Route path="/marks" element={<h1>Marks</h1>}></Route>
            </Routes>
            <main className="page-container">
                <Outlet />
            </main>
        </div>
      </React.StrictMode>
  </BrowserRouter>,
)
