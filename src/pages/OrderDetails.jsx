
import React from 'react'
import { useParams } from 'react-router-dom'

const OrderDetails = () => {
  const { id } = useParams()

  return (
    <div className="mt-6 rounded bg-white p-5 shadow">
      <h2 className="text-xl font-bold">Order Details</h2>
      <p className="mt-2">Order ID: {id}</p>
    </div>
  )
}

export default OrderDetails