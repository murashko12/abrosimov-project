import { FC, Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const DefaultLayout:FC = () => {
  return (
    <div className='flex h-screen bg-[#a8c7d0] p-3 gap-3'>
      <Sidebar />
      <div className="bg-white w-full rounded-xl p-4">
        <Suspense fallback={<>Loader...</>}>
          <Outlet/>
        </Suspense>
      </div>
    </div>
  )
}

export default DefaultLayout
