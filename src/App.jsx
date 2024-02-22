import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { publicRoutes, privateRoutes } from './routes'
import './App.css'

function App() {
  const authData = useSelector((state) => state.authReducer.authData)

  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component
          return <Route key={index} path={route.path} element={<Page />} />
        })}
        {privateRoutes.map((route, index) => {
          const Page = route.component
          return (
            <Route
              key={index}
              path={route.path}
              element={authData ? <Page /> : <Navigate to="/login" />}
            />
          )
        })}
      </Routes>
    </BrowserRouter>
  )
}

export default App
