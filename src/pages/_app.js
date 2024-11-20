// pages/_app.js

import Navbar from "../components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import SidebarTile from "@/components/SidebarTile";
import SidebarLink from "@/components/SidebarLink";
import Footer from "@/components/Footer";

import "../styles/globals.css";

function OrfApp({ Component, pageProps }) {
  return (
    <>
      <div class="flex flex-col h-screen justify-between">
        <div id="orfeus_navbar">
          <Navbar />
        </div>
        <div id="orfeus_content" className="mb-auto flex justify-center">
          <div className="flex w-3/4">
            <div id="sidebar" className="w-1/4 mx-5 text-gray-500">
              <SidebarTile text="ORFEUS is the European Infrastructure for seismic waveform data in EPOS ." />
              <SidebarTile text="ORFEUS services are integrated in the EPOS Data Portal." />
              <SidebarTile text="ORFEUS encourages the adoption of open and FAIR seismic data polices." />
              <SidebarTile text="ORFEUS supports the AdriaArray initiative. " />

              <SidebarLink href="https://orfeus.readthedocs.io/">More information</SidebarLink>
              <SidebarLink href="https://forum.orfeus-eu.org/">Forum</SidebarLink>
              <SidebarLink href="https://github.com/EIDA/userfeedback">Issue Tracker</SidebarLink>
            </div>
            <div id="current_page" className="w-3/4">
              <Breadcrumb />
              <div className="prose dark:prose-invert max-w-none">
                <Component {...pageProps} />
              </div>
            </div>
          </div>
        </div>
        <div id="orfeus_footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default OrfApp;
