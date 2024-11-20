// src/pages/index.js
import React from 'react';
import OrfeusText from './OrfeusText';
import Link from 'next/link';
export default function Footer() {
  return (


<footer class="bg-white rounded-lg shadow m-10 dark:bg-gray-800">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"><OrfeusText/>
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <Link href="/about" class="hover:underline me-4 md:me-6">About</Link>
        </li>
        <li>
            <Link href="/privacy" class="hover:underline me-4 md:me-6">Privacy Policy</Link>
        </li>
        <li>
            <Link href="/licensing" class="hover:underline me-4 md:me-6">Licensing</Link>
        </li>
        <li>
            <Link href="/contact" class="hover:underline">Contact</Link>
        </li>
    </ul>
    </div>
</footer>

  );
}
