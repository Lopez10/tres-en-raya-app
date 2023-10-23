import { routeItems } from '../../router/Router';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

export function NavBar({
    routes
}: {
    routes: routeItems
}) {
    return (
        <nav className='navbar'>
            {
                routes.map((item, index) => {
                    return (
                        <NavLink
                            key={index}
                            className={
                                ({ isActive }) => isActive ? 'navbar-item active' : 'navbar-item'
                            }
                            to={item.path}
                        >
                            {item.name}
                        </NavLink>
                    );
                })
            }
        </nav>
    );
}