import React from 'react'

const Orders = () => {

  const orders =[
    {
      id:"ORD001",
      customer:"Ravi",
      amount:1500,
      status:"Pending",
    },
    {
       id:"ORD002",
      customer:"Kumar",
      amount:2500,
      status:"Deliverd",
    },
    {
       id:"ORD003",
      customer:"Priya",
      amount:4500,
      status:"Shipped",
    },

  ]

  return (
    <div>
      <h1>Orders</h1>
      <table className='w-full border-collapse'>
        <thead>
          <tr className='bg-slate-800 text-white'>
            <th  className="p-3">Order ID</th>
            <th  className="p-3">Customer</th>
            <th  className="p-3">Amount</th>
            <th  className="p-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {
            orders.map((order)=>(
              <tr key={order.id} className='border-b'>
                <td className='p-3 text-center'>{order.id}</td>
                <td className='p-3 text-center'>{order.customer}</td>
                <td className='p-3 text-center'>₹{order.amount}</td>
                <td className='p-3 text-center'>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold 
                  ${
                    order.status === "Pending"
                    ? "bg-yellow-100 text-yellow-700"
                    : order.status === "Shipped"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-green-100 text-green-700"
                  }`}>
                  
                  {order.status}
                  
                  </span></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Orders
