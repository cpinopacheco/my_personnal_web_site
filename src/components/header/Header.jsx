import styles from "./Header.module.css";
import { motion } from "framer-motion";
import AudioPlayer from "../audioPlayer/AudioPlayer";
import MenuButton from "../menuButton/MenuButton";

const Header = () => {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, y: "-40%" }}
      animate={{
        opacity: 1,
        y: "0%",
        ease: "easeOut",
        transition: { duration: 1 },
      }}
    >
      <AudioPlayer />
      <MenuButton />
    </motion.div>
  );
};

export default Header;
