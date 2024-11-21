// components/SidebarLink.js
import Link from "next/link";

const SidebarLink = ({ href, children }) => (
  <p className="flex justify-center">
    <Link target="_blank" href={href} className="hover:underline">
      {children}
    </Link>
  </p>
);

export default SidebarLink;