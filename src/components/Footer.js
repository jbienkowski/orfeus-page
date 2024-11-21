// src/pages/index.js
import React from "react";
import Link from "next/link";
export default function Footer() {
  return (
    <footer>
      <div className="p-5">
        <ul className="flex justify-end space-x-5">
          <li>
            <Link href="/about" className="hover:underline">About</Link>
          </li>
          <li>
            <Link href="/privacy" className="hover:underline">Privacy</Link>
          </li>
          <li>
            <Link href="/licensing" className="hover:underline">Licensing</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
