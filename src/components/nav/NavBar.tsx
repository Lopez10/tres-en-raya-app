import { ROUTE_ITEMS } from '../../router/RouteItems';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

export function NavBar() {
    return (
        <nav className='navbar'>
            {
                ROUTE_ITEMS.map((item, index) => {
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