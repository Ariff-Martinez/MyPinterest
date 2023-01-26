import { IoLogoPinterest, IoNotifications, IoChatbubbleEllipses, IoChevronDownSharp } from 'react-icons/io5'
import { Search } from './'

export const NavBar = () => {
  // Navbar
  return (
    <div className='grid grid-cols-12 place-items-center place-content-center h-20'>
      <div className='col-span-2'>
        <IoLogoPinterest className='text-2xl text-red-600' />
      </div>
      <div className='col-span-6'>
        <Search />
      </div>
      <div>
        <IoNotifications className='text-2xl text-zinc-500' />
      </div>
      <div>
        <IoChatbubbleEllipses className='text-2xl text-zinc-500' />
      </div>
      <div>
        A
      </div>
      <div>
        <IoChevronDownSharp className='text-1xl text-zinc-500' />
      </div>
    </div>
  )
}
