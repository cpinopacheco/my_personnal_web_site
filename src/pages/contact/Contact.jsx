import SocialNetworks from "../../components/socialNetworks/SocialNetworks";
import styles from "./Contacto.module.css";
import ContactInfo from "../../components/contactInfo/ContactInfo";

const Contact = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Contacto</h2>
      <hr />
      <div className={styles.container_contact}>
        <ContactInfo />
        <SocialNetworks />
      </div>
    </div>
  );
};

export default Contact;
