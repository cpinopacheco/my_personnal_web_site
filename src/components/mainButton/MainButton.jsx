import styles from "./MainButton.module.css";
import { Link } from "react-router-dom";

const MainButton = () => {
  return (
    <Link to="layout" className={styles.mainButton}>
      Ingresar al Sitio
    </Link>
  );
};

export default MainButton;
