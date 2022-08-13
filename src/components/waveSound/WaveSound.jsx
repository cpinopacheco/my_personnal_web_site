import styles from "./WaveSound.module.css";
import { motion } from "framer-motion";

const WaveSound = () => {
  return (
    <motion.div
      className={styles.load_row}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        ease: "easeOut",
        transition: { duration: 1, delay: 0.5 },
      }}
      exit={{ opacity: 0 }}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </motion.div>
  );
};

export default WaveSound;
