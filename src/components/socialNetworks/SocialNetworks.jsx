import styles from "./SocialNetwork.module.css";
import { socialNetworks } from "../../data/contactInformation.js";
import { motion } from "framer-motion";

const SocialNetworks = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 2 }}
    >
      <h2 className={styles.title}>Redes Sociales</h2>
      <motion.div className={styles.container}>
        {socialNetworks.map((socialNetwork) => (
          <a
            href={socialNetwork.url}
            target="_blank"
            className={styles.link_socialNetwork}
            title={`Ver ${socialNetwork.name}`}
            key={socialNetwork.id}
          >
            <motion.img
              src={socialNetwork.logo}
              alt={socialNetwork.name}
              whileHover={{ scale: 1.1 }}
              transition={{ ease: "easeOut", duration: 0.3 }}
            />
            {socialNetwork.name}
          </a>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SocialNetworks;
