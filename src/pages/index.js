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
      <h1>
        <OrfeusText />
      </h1>
      <h2>
        Observatories & Research Facilities for European Seismology
      </h2>

      <div className="p-4 rounded-md shadow-md">
        <p>
          <OrfeusText /> is the non-profit foundation to coordinate and promote
          digital, broadband seismology in the European-Mediterranean area.
        </p>

        <p>
          <b>EIDA</b> is the European Integrated Data Archive infrastructure
          within <OrfeusText /> to provide access to seismic waveform data in
          European archives.
        </p>
      </div>
    </>
  );
}
