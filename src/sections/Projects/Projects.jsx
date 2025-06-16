import styles from "./ProjectsStyles.module.css";
import quizGame from "../../assets/Quiz-Game.png";
import calculator from "../../assets/Calculator.png";
import ticTacToe from "../../assets/Tic-Tac-Toe.png";
import etchSketch from "../../assets/Etch-A-Sketch.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={quizGame}
          link="https://noory007.github.io/Quiz-Game/"
          h3="Quiz Game"
          p="Interactive Game App"
        />
        <ProjectCard
          src={calculator}
          link="https://noory007.github.io/Calculator/"
          h3="Calculator"
          p="Arithmetic Calculator"
        />
        <ProjectCard
          src={ticTacToe}
          link="https://noory007.github.io/Tic-Tac-Toe/"
          h3="Tic-Tac-Toe"
          p="Tic-Tac-Toe Game App"
        />

        <ProjectCard
          src={etchSketch}
          link="https://noory007.github.io/Etch-a-Sketch/"
          h3="Etch-A-Sketch"
          p="Draw by moving cursor"
        />
      </div>
    </section>
  );
}

export default Projects;
