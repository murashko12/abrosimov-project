import { FC, Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const DefaultLayout:FC = () => {
  return (
    <div className='flex'>
        <Sidebar/>
        <Suspense fallback={<>Loader...</>}>
            <Outlet/>
        </Suspense>
    </div>
  )
}

export default DefaultLayout
