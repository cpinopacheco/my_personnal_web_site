import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import NavBar from "../components/navbar/NavBar";
import ScrollTopButton from "../components/scrollTopButton/ScrollTopButton";
import styles from "./AppLayout.module.css";
import { AnimatePresence, motion } from "framer-motion";

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
      <div className={styles.container_main}>
        <motion.main
          className={styles.main}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            ease: "ease",
          }}
          transition={{ duration: 2 }}
        >
          <Outlet />
        </motion.main>
      </div>
    </>
  );
};

export default AppLayout;
