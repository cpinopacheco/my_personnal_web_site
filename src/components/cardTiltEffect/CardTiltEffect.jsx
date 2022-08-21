import styles from "./CardTiltEffect.module.css";
import { motion } from "framer-motion";

const CardTiltEffect = ({ title, image, url }) => {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, delay: 0.5 }}
    >
      <a href={url} target="_blank" title="Ver proyecto">
        <div className={styles.tilt_box_wrap}>
          <span className={styles.t_over}></span>
          <span className={styles.t_over}></span>
          <span className={styles.t_over}></span>
          <span className={styles.t_over}></span>
          <span className={styles.t_over}></span>
          <span className={styles.t_over}></span>
          <span className={styles.t_over}></span>
          <span className={styles.t_over}></span>
          <span className={styles.t_over}></span>
          <div className={styles.tilt_box}>
            <img src={image} alt="" className={styles.image_project} />
            <strong>{title}</strong>
          </div>
        </div>
      </a>
    </motion.div>
  );
};

export default CardTiltEffect;
