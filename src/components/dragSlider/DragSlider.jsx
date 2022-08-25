import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import images from "../../components/dragSlider/images";
import styles from "./DragSlider.module.css";

const DragSlider = () => {
  const [width, setWidth] = useState(0);

  const carousel = useRef(null);

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <motion.div
      ref={carousel}
      className={styles.carousel}
      whileTap={{ cursor: "grabbing" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className={styles.inner_carousel}
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
      >
        {images.map((image, index) => {
          return (
            <motion.div
              className={styles.item}
              key={index}
              whileHover={{ filter: "brightness(1)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <img src={image} alt="drag slider" />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default DragSlider;
