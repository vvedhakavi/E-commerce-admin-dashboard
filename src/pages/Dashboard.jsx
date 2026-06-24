import React, { useEffect, useState } from 'react'
import api from '../services/api'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const Dashboard = () => {

const [products,setProducts] = useState([])

useEffect(()=>{
    api.get("/products")
    .then((res)=>{
        setProducts(res.data)
        console.log(res.data);    
    })
    .catch((err)=>{
        console.log(err);
        
    })
},[])

const salesData = [
  { month: "Jan", sales:20},
  { month: "Feb", sales:35},
  { month: "Mar", sales:25},
  { month: "Apr", sales:50},
  {month: "May", sales:40},
  {month: "jun", sales:75},
  {month: "july", sales:25},
  {month: "Aug", sales:49},
  {month: "sep", sales:60},
];

const revenue = products.reduce(
  (sum, product) => sum + product.price,0
)
  return (
    <div className='p-6'>
      <h1 className="text-3xl font-bold mb-6">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white p-5 rounded shadow">
          <h3>Products</h3>
          <p className="text-3xl font-bold">{products.length}</p>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <h3>Orders</h3>
          <p className="text-3xl font-bold">50</p>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <h3>Customers</h3>
          <p className="text-3xl font-bold">100</p>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <h3>Revenue</h3>
          <p className="text-3xl font-bold">₹{revenue.toFixed(2)}</p>
        </div>
      </div>
      <div className='bg-white p-5 rounded shadow mt-6'>
        <h2 className='text-xl font-bold mb-4'>Sales Overview</h2>

<ResponsiveContainer width="100%" height={300}>
  <LineChart data={salesData}>
  <CartesianGrid strokeDasharray="3 3"/>
  <XAxis dataKey="month"/>
  <YAxis/>
  <Tooltip/>
  <Line type="monotone" dataKey="sales" stroke='#8884d8'/>
  </LineChart>
</ResponsiveContainer>

      </div>


    </div>
  )
}

export default Dashboard
