import { Outlet } from 'react-router-dom'
import Header from './header'
import Footer from './footer'

export default function IndexLayout() {
  return (
    <div className='flex flex-col min-h-screen h-full justify-between'>
      <Header />
      <main className='w-full flex flex-col items-center my-10'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
