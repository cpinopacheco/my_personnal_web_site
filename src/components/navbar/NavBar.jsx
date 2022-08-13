import { Link } from "react-router-dom";
import useApp from "../../hooks/useApp";
import styles from "./NavBar.module.css";
import { motion } from "framer-motion";
import logo from "../../assets/images/logo.png";

const NavBar = () => {
  const { isOpen, setIsOpen, setIsChecked } = useApp();

  const variants = {
    initial: { x: "-100%" },
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  const handleClick = () => {
    setIsOpen(false);
    setIsChecked(false);
  };

  return (
    <motion.aside
      className={styles.container}
      initial="initial"
      animate={isOpen ? "open" : "closed"}
      variants={variants}
      transition={{ type: "easeOut", duration: 1 }}
    >
      <div className={styles.container_logo}>
        <img src={logo} alt="" className={styles.logo} />
      </div>

      <nav className={styles.navBar}>
        <Link to="../layout" className={styles.button} onClick={handleClick}>
          <span className={styles.actualtext}>&nbsp;Personal&nbsp;</span>
          <span className={styles.hovertext} aria-hidden="true">
            &nbsp;Personal&nbsp;
          </span>
        </Link>
        <Link to="profesional" className={styles.button} onClick={handleClick}>
          <span className={styles.actualtext}>&nbsp;Profesional&nbsp;</span>
          <span className={styles.hovertext} aria-hidden="true">
            &nbsp;Profesional&nbsp;
          </span>
        </Link>
        <Link to="contacto" className={styles.button} onClick={handleClick}>
          <span className={styles.actualtext}>&nbsp;Contacto&nbsp;</span>
          <span className={styles.hovertext} aria-hidden="true">
            &nbsp;Contacto&nbsp;
          </span>
        </Link>
      </nav>
    </motion.aside>
  );
};

export default NavBar;
