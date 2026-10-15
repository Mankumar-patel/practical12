
import React from 'react'
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'
import Home from './pages/Home'
import Orders from './pages/Orders'
import OrderDetails from './pages/OrderDetails'

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100 p-6">
        <nav className="flex gap-6 bg-blue-600 p-4 text-white">
          <Link to="/">Home</Link>
          <Link to="/orders">Orders</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/orders" element={<Orders />}>
            <Route path=":id" element={<OrderDetails />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App