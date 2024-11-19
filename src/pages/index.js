// src/pages/index.js
import React from "react";
import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>ORFEUS - Home</title>
			</Head>
			<h1>ORFEUS</h1>
			<h2>
				ORFEUS Observatories & Research Facilities for European Seismology
			</h2>

			<div className="p-4 rounded-md shadow-md">
				<p>
					ORFEUS is the non-profit foundation to coordinate and promote digital,
					broadband seismology in the European-Mediterranean area.
				</p>

				<p>
					EIDA is the European Integrated Data Archive infrastructure within
					ORFEUS to provide access to seismic waveform data in European
					archives.
				</p>
			</div>
		</>
	);
}
