import React from 'react'

const Customers = () => {

  const customers = [
  {
    id: 1,
    name: "Ravi Kumar",
    email: "ravi@gmail.com",
    phone: "9876543210",
    status: "Active",
  },
  {
    id: 2,
    name: "Priya",
    email: "priya@gmail.com",
    phone: "9876543211",
    status: "Active",
  },
  {
    id: 3,
    name: "Arun",
    email: "arun@gmail.com",
    phone: "9876543212",
    status: "Inactive",
  },
];

  return (
    <div>
      <table className="w-full border-collapse">
  <thead>
    <tr className="bg-slate-800 text-white">
      <th className="p-3">ID</th>
      <th className="p-3">Name</th>
      <th className="p-3">Email</th>
      <th className="p-3">Phone</th>
      <th className="p-3">Status</th>
    </tr>
  </thead>

  
        
<tbody>
  {customers.map((customer) => (
    <tr key={customer.id} className="border-b">

      <td className="p-3 text-center">
        {customer.id}
      </td>

      <td className="p-3 text-center">
        {customer.name}
      </td>

      <td className="p-3 text-center">
        {customer.email}
      </td>

      <td className="p-3 text-center">
        {customer.phone}
      </td>

      <td className="p-3 text-center">
       <span
    className={`px-3 py-1 rounded-full text-sm font-semibold
      ${
        customer.status === "Active"
          ? "bg-green-100 text-green-700"
          : "bg-red-100 text-red-700"
      }`}
  >
    {customer.status}
  </span>
      </td>

    </tr>
  ))}
  </tbody>
</table>
    </div>
  )
}

export default Customers
