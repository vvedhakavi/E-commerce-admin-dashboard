import React from 'react'
import { Routes ,Route } from 'react-router-dom'
import MainLayouts from '../layouts/MainLayouts'
import Customers from '../pages/Customers'
import Dashboard from '../pages/Dashboard'
import Product from '../pages/Product'
import Orders from '../pages/Orders'
import Setting from '../pages/Setting'
import AddProduct from '../pages/AddProduct'
import EditProduct from '../pages/EditProduct'

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainLayouts/>}>
        <Route index element={<Dashboard/>}/>
        <Route path="customers" element={<Customers/>}/>
          <Route path="products" element={<Product/>} />
           <Route path="orders" element={<Orders/>} />
           <Route path="settings" element={<Setting/>} />
           <Route path='add-product' element={<AddProduct/>} />
           <Route path='edit-product/:id' element={<EditProduct/>}/>
           </Route>
      </Routes>
    </div>
  )
}

export default AppRoutes
