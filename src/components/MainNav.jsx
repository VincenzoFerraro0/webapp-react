// MainNav.jsx
import { NavLink } from "react-router-dom";

export default function MainNav({ mobile, closeMenu, className }) {
    const navItems = [
        { to: '/', text: 'Home' },
        { to: '/movies/create', text: 'Aggiungi Film' },
        { to: '/about-us', text: 'Chi siamo' },
    ];

    return (
        <nav aria-label="Global" className={className}>
            <ul className={`${mobile ? "space-y-4" : "flex items-center gap-6 text-sm"}`}>
                {navItems.map((item) => (
                    <li key={item.to}>
                        <NavLink
                            to={item.to}
                            onClick={closeMenu}
                            className={({ isActive }) =>
                                `block ${isActive ? 'text-teal-600' : 'text-gray-500 hover:text-gray-700'} ${
                                    mobile ? 'text-base' : 'text-sm'
                                }`
                            }
                        >
                            {item.text}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}