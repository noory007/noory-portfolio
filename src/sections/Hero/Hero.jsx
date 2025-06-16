import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/Abdul Satar Noory.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import Abdul_Satar_Noory_CV_Internship_2025 from "../../assets/Abdul_Satar_Noory_CV_Internship_2025.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Abdul Satar Noory"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>Abdul Satar Noory</h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://x.com/SatarNoory" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/noory007" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/abdul-satar-noory-b716a5330/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          I am Abdul Satar Noory, a Frontend Developer based in Stockholm with a
          background in Computer Science and 7+ years in IT. Currently studying
          at Hyper Island, I specialize in React, HTML, CSS, and JavaScript.
          Open to internships in Sweden from (Sept 2025–Mar 2026). CSN-funded
          and ready to contribute.
        </p>
        <a href={Abdul_Satar_Noory_CV_Internship_2025} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
