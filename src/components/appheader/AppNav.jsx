import { NavLink } from 'react-router-dom';

function AppNav() {
  return (
    <nav>
      <ul className="flex gap-20 text-md font-bold">
        <li>
          <NavLink to="/portfolio">Portfolio</NavLink>
        </li>
        <li>
          <NavLink to="/resume">Resume</NavLink>
        </li>
        <li>
          <NavLink to="/blog">Blog</NavLink>
        </li>
        <li>
          <NavLink to="/socials">Socials</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
