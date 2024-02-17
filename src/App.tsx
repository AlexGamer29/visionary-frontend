import React from 'react'
import './App.css'
import { Home, Login, SignUp } from './pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { publicRoutes } from './routes'

function App (): JSX.Element {
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
