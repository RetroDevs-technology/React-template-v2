import { Link } from 'react-router-dom'
import { getRoutePath } from '@/config/get-route-path'

export default function Header() {
  return (
    <header className='w-full flex justify-center '>
      <nav className='bg-white shadow-sm rounded-lg'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between h-16'>
            <div className='flex'>
              <div className='flex-shrink-0 flex items-center'>
                <Link to={getRoutePath('home')} className='text-xl font-bold text-gray-900'>
                  Template
                </Link>
              </div>
              <div className=' ml-6 flex space-x-8'>
                <Link
                  to={getRoutePath('home')}
                  className='border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'>
                  Home
                </Link>
                <Link
                  to={getRoutePath('about')}
                  className='border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'>
                  About
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
