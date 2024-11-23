// src/pages/index.js
import React from "react";
import Head from "next/head";
import OrfeusText from "@/components/OrfeusText";

export default function Home() {
  return (
    <>
      <Head>
        <title>ORFEUS - Home</title>
      </Head>
      <div
        class="mt-2 bg-gray-50 border border-gray-200 text-xl text-gray-600 rounded-lg p-4 dark:bg-white/10 dark:border-white/10 dark:text-neutral-400"
        role="alert"
        aria-labelledby="hs-soft-color-secondary-label">
        <OrfeusText /> (Observatories & Research Facilities for European
        Seismology) is the non-profit foundation to coordinate and promote
        digital, broadband seismology in the European-Mediterranean area.
      </div>

      <div
        class="mt-2 bg-gray-50 border border-gray-200 text-xl text-gray-600 rounded-lg p-4 dark:bg-white/10 dark:border-white/10 dark:text-neutral-400"
        role="alert"
        aria-labelledby="hs-soft-color-secondary-label">
        <b>EIDA</b> is the European Integrated Data Archive infrastructure
        within <OrfeusText /> to provide access to seismic waveform data in
        European archives.
      </div>
    </>
  );
}
