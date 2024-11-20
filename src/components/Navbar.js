// components/Navbar.js

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import NavbarLink from "@/components/NavbarLink";
import OrfeusText from "./OrfeusText";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const isActive = (path) => router.pathname === path;
  const activeClass = (path) => (isActive(path) ? "bg-gray-800" : "");

  return (
    <nav className="bg-gray-700 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className={`text-white font-bold text-3xl`}>
              <OrfeusText/>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavbarLink href="/" activeClass={activeClass}>
                Home
              </NavbarLink>
              <NavbarLink href="/about" activeClass={activeClass}>
                Organization
              </NavbarLink>
              <NavbarLink href="/services" activeClass={activeClass}>
                Services
              </NavbarLink>
              <NavbarLink href="/other" activeClass={activeClass}>
                Other
              </NavbarLink>
            </div>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-gray-500 px-3 py-2 rounded-md text-sm font-medium focus:outline-none">
              Menu
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-600">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavbarLink href="/" activeClass={activeClass}>
              Home
            </NavbarLink>
            <NavbarLink href="/about" activeClass={activeClass}>
              About
            </NavbarLink>
            <NavbarLink href="/contact" activeClass={activeClass}>
              Contact
            </NavbarLink>
          </div>
        </div>
      )}
    </nav>
  );
}
