import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import NavBar from "../components/navbar/NavBar";
import styles from "./AppLayout.module.css";

const AppLayout = () => {
  return (
    <>
      <Header />
      <NavBar />
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
};

export default AppLayout;
