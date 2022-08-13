import Personal from "../personal/Personal";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <Personal />
    </div>
  );
};

export default Home;
