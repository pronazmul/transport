import MainFooter from "@/components/Footer/MainFooter";
import Prefooter from "@/components/Footer/Prefooter";
import MainNav from "@/components/Navbar/MainNav";
import TopNav from "@/components/Navbar/TopNav";
import styles from "@/styles/navbar.module.css";
import "@/styles/globals.css";
import "@/styles/anchor.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import Disclimer from "@/components/Disclaimer/Disclimer";

const CrispWithNoSSR = dynamic(
  () => import("../components/CrispChat/CrispChat"),
  { ssr: false }
);

export default function App({ Component, pageProps }) {
  const [sticky, setSticky] = useState(false);

  const router = useRouter();
  const isResourcesPage = router.pathname === "/resources";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts or route changes
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [router.asPath]);

  return (
    <>
      <ToastContainer />
      <div className={`${sticky ? styles.sticky : styles.notSticky} `}>
        <div
          className={`flex items-center gap-3 max-w-7xl xl:px-0 px-5 m-auto ${
            !sticky && "border-b border-white"
          }`}
        >
          <div className="py-2">
            <img className="h-24" src="/images/logo.png" alt="logo" />
          </div>
          <div className="flex-grow">
            <TopNav />
            <MainNav />
          </div>
        </div>
      </div>
      <FloatingWhatsApp
        phoneNumber="+16474698766"
        accountName="InsuranceBuzz Advisor"
        chatMessage={`Hello! 🤝 \nHow may I help you?`}
        avatar="/images/logo.png"
      />
      {/* <CrispWithNoSSR /> */}
      <Component {...pageProps} />

      <div>
        <Prefooter />
        <Disclimer />
        <MainFooter />
      </div>
    </>
  );
}
