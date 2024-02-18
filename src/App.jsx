import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { publicRoutes } from './routes'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component
          return <Route key={index} path={route.path} element={<Page />} />
        })}
      </Routes>
    </BrowserRouter>
  )
}

export default App
