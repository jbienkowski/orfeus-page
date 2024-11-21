// NavLink.js
import NavbarLink from 'next/link';

const NavLink = ({ href, activeClass, children }) => (
  <NavbarLink
    href={href}
    className={`text-white hover:bg-gray-500 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ${activeClass(href)}`}>
    {children}
  </NavbarLink>
);

export default NavLink;