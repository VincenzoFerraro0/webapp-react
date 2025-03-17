import { Link } from 'react-router-dom'
import logo from '../assets/img/camera.svg'
import MainNav from '../components/MainNav'
import Search from '../components/Search'

export default function Header() {
    return (
        <header className="bg-white fixed top-0 inset-x-0 z-50 shadow-sm">
            <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
                <Link className="block text-teal-600" to={'/'}>
                    <img className="h-8" src={logo} alt="Logo" />
                </Link>

                <div className="flex flex-1 items-center justify-end md:justify-between">
                    <MainNav />
                    <div className="flex items-center gap-3">
                        <Search />
                        <button
                            className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                        >
                            <span className="sr-only">Toggle menu</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
};