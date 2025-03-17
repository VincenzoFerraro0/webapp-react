import Header from '../section/Header'
import { Outlet } from 'react-router-dom'

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <main className="container">
        <Outlet />
      </main>
    </>)
}