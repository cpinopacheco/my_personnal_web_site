import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/header/Header";
import NavBar from "../components/navbar/NavBar";
import styles from "./AppLayout.module.css";

const AppLayout = () => {
  const mainContent = useRef(null);
  const pathname = useLocation();

  const onTop = () => {
    mainContent.current.scrollIntoView();
  };

  useEffect(() => {
    console.log(pathname);
    onTop();
  }, [pathname]);

  return (
    <>
      <Header />
      <NavBar />

      <div className={styles.container_main}>
        <main className={styles.main} ref={mainContent}>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default AppLayout;
