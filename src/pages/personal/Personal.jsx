import styles from "./Personal.module.css";
import DragSlider from "../../components/dragSlider/DragSlider";
import ContainerSection from "../../components/containerSection/ContainerSection";
import { personalInfo, hobbies } from "../../data/personalInformation.js";

const Personal = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Cristian Pino Pacheco</h2>
      <hr />
      <DragSlider />
      <hr />
      <h2 className={styles.title}>Sobre mí</h2>
      <ContainerSection obj={personalInfo} />

      <h2 className={styles.title}>Pasatiempos </h2>
      {hobbies.map((hobbie, index) => (
        <ContainerSection key={index} obj={hobbie} />
      ))}
    </div>
  );
};

export default Personal;
