
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Orders = () => {
  return (
    <div className="mt-6">
      <h1 className="text-2xl font-bold">My Orders</h1>

      <div className="mt-4 flex gap-4">
        <Link to="101" className="text-blue-600 underline">
          Order 101 mobile
        </Link>
        <Link to="102" className="text-blue-600 underline">
          Order 102 laptop
        </Link>
        <Link to="103" className="text-blue-600 underline"> 
          Order 103 tablet
        </Link>
      </div>

      <Outlet />
    </div>
  )
}

export default Orders