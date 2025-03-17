import Header from '../section/Header'
import { Outlet } from 'react-router-dom'

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <main className='mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8'>
        <Outlet />
      </main>
    </>)
}