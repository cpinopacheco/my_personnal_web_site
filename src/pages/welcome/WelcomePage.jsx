import styles from "./WelcomePage.module.css";
import { motion } from "framer-motion";
import logo from "../../assets/images/logo.png";
import MainButton from "../../components/mainButton/MainButton";

const WelcomePage = () => {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, ease: "easeOut", transition: { duration: 3 } }}
      exit={{
        opacity: 0,
        x: "-100%",
        ease: "easeOut",
        transition: { duration: 1 },
      }}
    >
      <div>
        <img src={logo} alt="logo" className={styles.logo} />
      </div>

      <p className={styles.welcome_text}>
        Bienvenidos a mi sitio web personal, un sitio que he desarrollado con el
        objetivo de crear y dejar volar la imaginación. Espero disfrutes de tu
        visita y que tengas una excelente experiencia. <br />
      </p>
      <p className={styles.phrase}>
        "La grandeza nace de pequeños comienzos" <i>- Sir Francis Drake.</i>
      </p>
      <div>
        <MainButton />
      </div>
    </motion.div>
  );
};

export default WelcomePage;
