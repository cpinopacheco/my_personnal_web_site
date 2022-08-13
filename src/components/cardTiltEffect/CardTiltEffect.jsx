import styles from "./CardTiltEffect.module.css";

const CardTiltEffect = () => {
  return (
    <div className={styles.container}>
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
          <strong>
            Tilt <br /> Effect
          </strong>
        </div>
      </div>
    </div>
  );
};

export default CardTiltEffect;
