import styles from "./ContainerSection.module.css";
import { motion } from "framer-motion";

const ContainerSection = ({ obj }) => {
  const { title, content, image } = obj;

  let contentParagraphs = content.split("<br/>");

  return (
    <motion.section
      className={`${styles.container} ${image && styles.flex}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, delay: 0.5 }}
    >
      <div>
        {title && <h2 className={styles.title}>{title}</h2>}

        {content &&
          contentParagraphs.map((contentParagraph, index) => (
            <p key={index} className={styles.contentParagraph}>
              {contentParagraph}
            </p>
          ))}
      </div>
      {image && (
        <img src={image} alt={`imagen ${image}`} className={styles.image} />
      )}
    </motion.section>
  );
};

export default ContainerSection;
