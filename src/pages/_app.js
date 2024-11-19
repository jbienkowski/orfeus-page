// pages/_app.js

import Navbar from "../components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import SidebarTile from "@/components/SidebarTile";
import SidebarLink from "@/components/SidebarLink";

import "../styles/globals.css";

function OrfApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <div className="flex flex-1 justify-center">
        <div className="flex w-2/3">
          <div id="sidebar" className="w-1/4 h-full mx-10 text-gray-500">
            <SidebarTile text="ORFEUS is the European Infrastructure for seismic waveform data in EPOS ." />
            <SidebarTile text="ORFEUS services are integrated in the EPOS Data Portal." />
            <SidebarTile text="ORFEUS encourages the adoption of open and FAIR seismic data polices." />
            <SidebarTile text="ORFEUS supports the AdriaArray initiative. " />

            <SidebarLink href="#">More information</SidebarLink>
            <SidebarLink href="#">Forum</SidebarLink>
            <SidebarLink href="#">Issue Tracker</SidebarLink>
          </div>
          <div id="current_page" className="w-4/5">
            <Breadcrumb />
            <div className="prose dark:prose-invert">
              <Component {...pageProps} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrfApp;
