import styles from "./ScrollTopButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const ScrollTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      className={styles.container_top_button}
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: "0%" }}
      exit={{ opacity: 0, y: "200%" }}
      transition={{ ease: "easeOut", duration: 1 }}
      onClick={scrollToTop}
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </motion.div>
  );
};

export default ScrollTopButton;
