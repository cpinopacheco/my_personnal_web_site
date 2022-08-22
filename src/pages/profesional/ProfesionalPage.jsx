import styles from "./ProfesionalPage.module.css";
import ProjectSection from "../../components/projectSection/ProjectSection";
import { profesionalInformation } from "../../data/profesionalInformation";
import ContainerSection from "../../components/containerSection/ContainerSection";

const ProfesionalPage = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Profesional</h2>
      <hr />
      <ContainerSection obj={profesionalInformation} />
      <hr />
      <ProjectSection />
    </div>
  );
};

export default ProfesionalPage;
