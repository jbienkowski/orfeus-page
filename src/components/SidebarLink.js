// components/StyledLink.js
import Link from "next/link";

const SidebarLink = ({ href, children }) => (
  <p>
    <Link href={href} className="text-gray-500 hover:text-gray-300">
      {children}
    </Link>
  </p>
);

export default SidebarLink;
