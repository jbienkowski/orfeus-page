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
      <div class="flex flex-col h-screen justify-between dark:bg-gray-700 dark:text-gray-300">
        <div id="orfeus_navbar">
          <Navbar />
        </div>
        <div id="orfeus_content" className="mb-auto flex justify-center bg-inherit">
          <div className="w-2/3 pb-36">
            <div id="current_page">
              <Breadcrumb />
              <div className="prose dark:prose-invert max-w-none">
                <Component {...pageProps} />
              </div>
            </div>
          </div>
        </div>
        <div id="orfeus_footer" className="bg-inherit">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default OrfApp;
