import { Outlet } from 'react-router-dom'
export default function Main() {
    return (
        <main className='pt-24 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 '>
            <Outlet />
        </main>
    )
};