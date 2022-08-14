import styles from "./Contacto.module.css";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, x: "100%" }}
      animate={{
        opacity: 1,
        x: 0,
        ease: "easeOut",
        transition: { duration: 1 },
      }}
    >
      <h2 className={styles.title}>Contacto</h2>
      <hr />
    </motion.div>
  );
};

export default Contact;
