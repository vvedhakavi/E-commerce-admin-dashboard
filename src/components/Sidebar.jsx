import React from 'react'
import {  NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 w-64 h-screen bg-slate-900 text-white p-5">
    <h1 className='text-2xl font-bold mb-8'>
      Admin Dashboard
    </h1>
    <nav>
        <ul className='space-y-3'>
            <li>
                <NavLink to="/" className="block p-2 rounded hover:bg-slate-700">Dashboard</NavLink>
            </li>
             <li>
                <NavLink to="/products" className="block p-2 rounded hover:bg-slate-700">Products</NavLink>
            </li>
             <li>
                <NavLink to="/orders" className="block p-2 rounded hover:bg-slate-700">Orders</NavLink>
            </li>
             <li>
                <NavLink to="/customers" className="block p-2 rounded hover:bg-slate-700">Customers</NavLink>
            </li>
             <li>
                <NavLink to="/settings" className="block p-2 rounded hover:bg-slate-700">Settings</NavLink>
            </li>
            <li>
                <NavLink to="/add-product">Add Product</NavLink>
            </li>
        </ul>
    </nav>
    </div>
  )
}

export default Sidebar
