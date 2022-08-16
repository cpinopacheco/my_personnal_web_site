import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import NavBar from "../components/navbar/NavBar";
import ScrollTopButton from "../components/scrollTopButton/ScrollTopButton";
import styles from "./AppLayout.module.css";
import { AnimatePresence } from "framer-motion";

const AppLayout = () => {
  const [viewportHeight, setViewportHeight] = useState(0);

  const handleScroll = () => {
    setViewportHeight(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {viewportHeight > 1000 && <ScrollTopButton />}
      </AnimatePresence>

      <Header />
      <NavBar />
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
};

export default AppLayout;
