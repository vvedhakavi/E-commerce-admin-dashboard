import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const MainLayouts = () => {
  return (
    <div >
      <Sidebar/>
      <div className='ml-64'>
        <Navbar/>
        <div className='h-[calc(100vh-64px)] overflow-y-auto'>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default MainLayouts
