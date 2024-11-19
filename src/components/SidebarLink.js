// components/SidebarLink.js
import Link from "next/link";

const SidebarLink = ({ href, children }) => (
  <p className="flex justify-center">
    <Link href={href} className="text-gray-500 hover:text-gray-300">
      {children}
    </Link>
  </p>
);

export default SidebarLink;