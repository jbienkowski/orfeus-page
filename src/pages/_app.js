// pages/_app.js

import PrelineScript from "@/components/PrelineScript";
import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";

import "@/styles/globals.css";

function OrfApp({ Component, pageProps }) {
  return (
    <>
      <div className="flex flex-col h-screen">
        {/* Navbar */}
        <header id="orfeus_navbar">
          <Navbar />
        </header>

        {/* Main Content */}
        <main id="orfeus_content" className="flex-grow flex">
          <div className="w-full py-10 px-4 sm:px-6 lg:px-[20%] mx-auto">
            <Breadcrumb />
            <Component {...pageProps} />
          </div>
        </main>

        {/* Footer */}
        <footer id="orfeus_footer" className="bg-inherit">
          <Footer />
        </footer>
      </div>

      {/* Preline Script */}
      <PrelineScript />
    </>
  );
}

export default OrfApp;
