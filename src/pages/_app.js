// pages/_app.js

import Navbar from "../components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";

import "../styles/globals.css";

function OrfApp({ Component, pageProps }) {
	return (
        <div id="canvas" className="bg-white w-full h-screen">
            <Navbar />
            <div className="flex flex-1 justify-center">
                <div className="flex w-1/2">
				<div id="sidebar" className="w-1/4 h-full mx-10 text-gray-500">
					<div className="my-5 p-4 bg-gray-50 rounded-md shadow-md">
						<p>ORFEUS is the European Infrastructure for seismic waveform data in <b>EPOS</b>.</p>
					</div>
					<div className="my-5 p-4 bg-gray-50 rounded-md shadow-md">
						<p>ORFEUS services are integrated in the EPOS Data Portal.</p>
					</div>
					<div className="my-5 p-4 bg-gray-50 rounded-md shadow-md">
						<p>ORFEUS encourages the adoption of open and FAIR seismic data polices.</p>
					</div>
					<div className="my-5 p-4 bg-gray-50 rounded-md shadow-md">
						<p>ORFEUS supports the AdriaArray initiative.</p>
					</div>
					<hr/>
					<p>ORFEUS more information</p>
					<p>ORFEUS news and announcements</p>
					<p>EIDA Issue Tracker</p>
				</div>
                    <div id="current_page" className="w-4/5">
					<Breadcrumb />
                        <div className="py-8">
                            <div className="prose max-w-none">
                                <Component {...pageProps} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	);
}

export default OrfApp;
