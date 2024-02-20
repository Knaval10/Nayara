import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import ProtectedRoute from './utils/ProtectedRoute'
import PublicRoute from './utils/PublicRoute'

const App = () => {
  return (
    <>
    <Router >
      <Routes>
        <Route element={<ProtectedRoute/> }></Route>
        <Route element={<PublicRoute/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App