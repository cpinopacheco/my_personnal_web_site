import styles from "./CardTiltEffect.module.css";

const CardTiltEffect = ({ title, image, url }) => {
  console.log(url);
  return (
    <div className={styles.container}>
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
    </div>
  );
};

export default CardTiltEffect;
