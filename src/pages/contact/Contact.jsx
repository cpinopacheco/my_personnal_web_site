import SocialNetworks from "../../components/socialNetworks/SocialNetworks";
import { motion } from "framer-motion";
import styles from "./Contacto.module.css";
import ContactInfo from "../../components/contactInfo/ContactInfo";

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

      <div className={styles.container_contact}>
        <ContactInfo />
        <SocialNetworks />
      </div>
    </motion.div>
  );
};

export default Contact;
