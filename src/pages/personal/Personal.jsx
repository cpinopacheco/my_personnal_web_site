import styles from "./Personal.module.css";
import { motion } from "framer-motion";
import DragSlider from "../../components/dragSlider/DragSlider";
import ContainerSection from "../../components/containerSection/ContainerSection";
import { personalInfo, hobbies } from "../../data/personalInformation.js";

const Personal = () => {
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
      <h2 className={styles.title}>Cristian Pino Pacheco</h2>
      <hr />
      <DragSlider />
      <hr />

      <h2 className={styles.title}>Sobre mí</h2>
      <ContainerSection obj={personalInfo} />

      <h2 className={styles.title}>Pasatiempos </h2>
      {hobbies.map((hobbie, index) => (
        <ContainerSection key={index} obj={hobbie} />
      ))}
    </motion.div>
  );
};

export default Personal;
