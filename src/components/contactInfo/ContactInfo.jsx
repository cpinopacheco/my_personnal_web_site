import styles from "./ContactInfo.module.css";
import { contactInfo } from "../../data/contactInformation.js";
import { motion } from "framer-motion";

const ContactInfo = () => {
  return (
    <motion.div
      className={styles.container_contactInfo}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 2 }}
    >
      {contactInfo.map((info) => (
        <a
          href={info.href}
          target="_blank"
          className={styles.link_contact_info}
          title="Contactar"
          key={info.id}
        >
          <motion.img
            src={info.logo}
            alt={info.name}
            whileHover={{ scale: 1.1 }}
            transition={{ ease: "easeOut", duration: 0.3 }}
          />
          {info.name}
        </a>
      ))}
    </motion.div>
  );
};

export default ContactInfo;
