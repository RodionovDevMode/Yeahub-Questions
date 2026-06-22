import { NavLink } from 'react-router-dom'
import { navItems } from '../../config/navItems/navItems'
import './Nav.css'

function Nav() {
	return (
		<nav className='nav'>
			{navItems.map(item => (
				<NavLink
					key={item.path}
					to={item.path}
					className={({ isActive }) =>
						isActive ? 'nav-link active' : 'nav-link'
					}
				>
					{item.title}
				</NavLink>
			))}
		</nav>
	)
}

export default Nav
