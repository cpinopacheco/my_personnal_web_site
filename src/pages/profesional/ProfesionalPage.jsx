import styles from "./ProfesionalPage.module.css";
import { motion } from "framer-motion";
import ProjectSection from "../../components/projectSection/ProjectSection";

const ProfesionalPage = () => {
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
      <h2 className={styles.title}>Profesional</h2>
      <hr />

      <ProjectSection />
    </motion.div>
  );
};

export default ProfesionalPage;
