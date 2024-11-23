// src/pages/index.js
import React from "react";
import Link from "next/link";
import OrfeusText from "./OrfeusText";
export default function Footer() {
  return (
    <footer class="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-[15%] mx-auto">
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
        <div class="col-span-full hidden lg:col-span-3 lg:block">
          <Link
            class="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80 dark:text-white"
            href="#"
            aria-label="Brand">
            <OrfeusText />
          </Link>
          <p class="mt-3 text-xs sm:text-sm text-gray-600 dark:text-neutral-400">
            ORFEUS is the European Infrastructure for seismic waveform data in EPOS
          </p>
          <p class="mt-3 text-xs sm:text-sm text-gray-600 dark:text-neutral-400">
            ORFEUS services are integrated in the EPOS Data Portal
          </p>
          <p class="mt-3 text-xs sm:text-sm text-gray-600 dark:text-neutral-400">
            ORFEUS encourages the adoption of open and FAIR seismic data polices
          </p>
          <p class="mt-3 text-xs sm:text-sm text-gray-600 dark:text-neutral-400">
            ORFEUS supports the AdriaArray initiative
          </p>
        </div>

        <div>
          <h4 class="text-xs font-semibold text-gray-900 uppercase dark:text-neutral-100">
            Resources
          </h4>

          <div class="mt-3 grid space-y-3 text-sm">
            <p>
              <Link
                class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                href="https://orfeus.readthedocs.io/"
                target="_blank">
                ORFEUS Read the Docs
              </Link>
            </p>
            <p>
              <Link
                class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                href="https://forum.orfeus-eu.org/"
                target="_blank">
                Forum
              </Link>
            </p>
            <p>
              <Link
                class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                href="https://github.com/EIDA/userfeedback/issues/"
                target="_blank">
                Issue Tracker
              </Link>
            </p>
          </div>
        </div>

        <div>
          <h4 class="text-xs font-semibold text-gray-900 uppercase dark:text-neutral-100">
            Other
          </h4>

          <div class="mt-3 grid space-y-3 text-sm">
            <p>
              <Link
                class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                href="/about">
                About
              </Link>
            </p>
            <p>
              <Link
                class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                href="/licensing">
                Licensing
              </Link>
            </p>
            <p>
              <Link
                class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                href="/privacy">
                Privacy
              </Link>
            </p>
            <p>
              <Link
                class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                href="/contact">
                Contact
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
