// src/pages/index.js
import React from "react";
import Prose from "@/components/Prose";
import Image from "next/image";

export default function AvailableData() {
  return (
    <div>
      <Prose>
        <p>
          ORFEUS is the European infrastructure for seismic waveform data and
          station metadata. It coordinates the infrastructure for distributed
          seismic data archives in the European Integrated Data Archive (EIDA).
          ORFEUS provides access to high quality seismic waveforms and station
          metadata from EIDA and strong motion products.
        </p>
      </Prose>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
      <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
        <img class="w-full h-auto rounded-t-xl" src="https://orfeus-eu.org/images/eida-map.png" alt="Card Image"/>
        <div class="p-4 md:p-5">
          <h3 class="text-lg font-bold text-gray-800 dark:text-white">
            European Integrated Data Archive
          </h3>
          <p class="mt-1 text-gray-500 dark:text-neutral-400">
            Access to waveform and station metadata from EIDA through modern APIs and interfaces.
          </p>
          <div className="mt-5 grid space-y-2">
            <button type="button" class="py-3 px-4 items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 focus:outline-none focus:border-blue-600 focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:text-blue-500 dark:focus:border-blue-600">
              Web Interface
            </button>
            <button type="button" class="py-3 px-4 items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 focus:outline-none focus:border-blue-600 focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:text-blue-500 dark:focus:border-blue-600">
              Web Services
            </button>
            <button type="button" class="py-3 px-4 items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 focus:outline-none focus:border-blue-600 focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:text-blue-500 dark:focus:border-blue-600">
              Data Quality
            </button>
            <button type="button" class="py-3 px-4 items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 focus:outline-none focus:border-blue-600 focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:text-blue-500 dark:focus:border-blue-600">
              Station Book
            </button>
            <button type="button" class="py-3 px-4 items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 focus:outline-none focus:border-blue-600 focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:text-blue-500 dark:focus:border-blue-600">
              Statistics
            </button>
          </div>
        </div>
      </div>
      <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
        <img class="w-full h-auto rounded-t-xl" src="https://orfeus-eu.org/images/rrsm-pga.png" alt="Card Image"/>
        <div class="p-4 md:p-5">
          <h3 class="text-lg font-bold text-gray-800 dark:text-white">
            Strong Motion Products
          </h3>
          <p class="mt-1 text-gray-500 dark:text-neutral-400">
            RRSM for automatic rapid strong motion processing and ESM for reviewed strong motion information. 
          </p>
          <div className="mt-5 grid space-y-2">
            <button type="button" class="py-3 px-4 items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 focus:outline-none focus:border-blue-600 focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:text-blue-500 dark:focus:border-blue-600">
              RRSM
            </button>
            <button type="button" class="py-3 px-4 items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 focus:outline-none focus:border-blue-600 focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:text-blue-500 dark:focus:border-blue-600">
              ESM
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
