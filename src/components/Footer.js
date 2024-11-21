// src/pages/index.js
import React from "react";
import Link from "next/link";
import OrfeusText from "./OrfeusText";
export default function Footer() {
  return (
    <footer class="text-gray-600 bg-gray-50 dark:bg-gray-800 dark:text-gray-400">
    <div class="container mx-auto px-6 py-8">
      <div class="flex flex-wrap justify-between">
        <div class="w-full md:w-3/5 mb-6 md:mb-0">
          <h2 class="font-bold text-lg mb-4">About ORFEUS</h2>
          <ul class="space-y-2">
            <li>ORFEUS is the European Infrastructure for seismic waveform data in EPOS</li>
            <li>ORFEUS services are integrated in the EPOS Data Portal</li>
            <li>ORFEUS encourages the adoption of open and FAIR seismic data policies</li>
            <li>ORFEUS supports the AdriaArray initiative</li>
          </ul>
        </div>
  
        <div class="w-full md:w-1/5 mb-6 md:mb-0">
          <h2 class="font-bold text-lg mb-4">Resources</h2>
          <ul class="space-y-2">
            <li><Link href="/about" class="hover:underline">About</Link></li>
            <li><Link href="/privacy" class="hover:underline">Privacy</Link></li>
            <li><Link href="/licensing" class="hover:underline">Licensing</Link></li>
            <li><Link href="/contact" class="hover:underline">Contact</Link></li>
          </ul>
        </div>
  
        <div class="w-full md:w-1/5">
          <h2 class="font-bold text-lg mb-4">Other Links</h2>
          <ul class="space-y-2">
            <li><Link target="_blank" href="https://forum.orfeus-eu.org/" class="hover:underline">Forum</Link></li>
            <li><Link target="_blank" href="https://orfeus.readthedocs.io/" class="hover:underline">More Information</Link></li>
            <li><Link target="_blank" href="https://github.com/EIDA/userfeedback/issues" class="hover:underline">Issue Tracker</Link></li>
          </ul>
        </div>
      </div>
  
      <div class="border-t border-gray-300 mt-8 pt-6 text-center text-sm">
        <p>&copy; 2024 <OrfeusText/></p>
      </div>
    </div>
  </footer>
  );
}
