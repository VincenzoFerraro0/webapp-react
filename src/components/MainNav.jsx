import { NavLink } from "react-router-dom"

export default function MainNav() {
    return (
        <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
                <li><NavLink className="text-gray-500 transition hover:text-gray-500/75" to={'/'}> Home </NavLink></li>
                
            </ul>
        </nav>
    )
};