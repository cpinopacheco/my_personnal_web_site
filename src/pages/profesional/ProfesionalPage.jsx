import styles from "./ProfesionalPage.module.css";
import { motion } from "framer-motion";
import SocialNetworks from "../../components/socialNetworks/SocialNetworks";

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
      {/* <hr />
      <SocialNetworks /> */}
    </motion.div>
  );
};

export default ProfesionalPage;
