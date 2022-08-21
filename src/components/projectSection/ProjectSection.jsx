import CardTiltEffect from "../cardTiltEffect/CardTiltEffect";
import styles from "./ProjectSection.module.css";
import projects from "../../data/projects.js";

const ProjectSection = () => {
  return (
    <>
      <h2 className={styles.title}>Mis Proyectos</h2>
      <section className={styles.container_proyect}>
        {projects.map((project) => (
          <CardTiltEffect
            title={project.title}
            image={project.image}
            url={project.url}
            key={project.id}
          />
        ))}
      </section>
    </>
  );
};

export default ProjectSection;
