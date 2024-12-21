import styles from "./page.module.css";
import Footer from "@/components/footer";

export default function Resume() {
  return (
    <div>
      <div className={styles.resumeTitle}>
        <h1>
          Check out my <span>Resume</span>!
        </h1>
      </div>

      <div>
        <a
          className={styles.resumeLink}
          href="Resume_1.4* copy.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume
        </a>
      </div>

      <main>
        <section className={styles.resumeInfo}>
          {/* Summary Section */}
          <p className={styles.summary}>
            Seeking opportunities in backend development or embedded systems
            where I can leverage my technical skills and project experience to
            solve complex problems and contribute to innovative solutions.
          </p>

          {/* Education Section */}
          <h1 className={styles.sectionTitle}>Education</h1>
          <div className={styles.entry}>
            <h3 className={styles.entryTitle}>
              Bachelor of Science in Computer Science
            </h3>
            <p className={styles.entryInfo}>
              California Polytechnic State University, San Luis Obispo, CA
              <br />
              Sept. 2023 - June 2027
            </p>
            <p className={styles.entryDescription}>
              Relevant coursework: Proj-Based Object-Oriented Programming &
              Design*, Introduction to Computer Organization*, Data Structures,
              Fundamentals of Computer Science (* indicates currently taking)
              <br />
              Activities & Societies: Society of Hispanic Professional Engineers
              (SHPE)
            </p>
          </div>

          {/* Experience Section */}
          <h1 className={styles.sectionTitle}>Experience</h1>

          <div className={styles.entry}>
            <h3 className={styles.entryTitle}>Front-End Web Developer</h3>
            <p className={styles.entryInfo}>Milli Transportation Inc., June 2024</p>
            <p className={styles.entryDescription}>
              Designed a front-end page for a trucking company using Python,
              HTML, CSS, and JavaScript to streamline client interaction.
              Collaborated with the company to adapt the webpage to specific
              business goals.
            </p>
          </div>

          <div className={styles.entry}>
            <h3 className={styles.entryTitle}>Back-End Software Engineer</h3>
            <p className={styles.entryInfo}>GeoGroove, June 2024 - Aug 2024</p>
            <p className={styles.entryDescription}>
              Developed a location-based music recommendation system utilizing
              Python, Leaflet.js, and various APIs to recommend music based on
              user location and preferences. Integrated learning algorithms to
              enhance user experience over time.
            </p>
          </div>

          <div className={styles.entry}>
            <h3 className={styles.entryTitle}>Front-End Software Engineer</h3>
            <p className={styles.entryInfo}>Abuelita's Kitchen, 2020-2021</p>
            <p className={styles.entryDescription}>
              Created a multi-page cooking and recipe website focusing on
              user-friendly navigation and visual appeal. Featured a collection
              of diverse recipes, allowing users to post reviews and sort dishes
              by relevance and ratings.
            </p>
          </div>

          <div className={styles.entry}>
            <h3 className={styles.entryTitle}>Software Engineer</h3>
            <p className={styles.entryInfo}>Nuke Type, Oct 2023 - Nov 2023</p>
            <p className={styles.entryDescription}>
              Co-developed a pop-up typing game using Python, Flask, and
              Tkinter, designed to improve typing speed and accuracy. Built core
              functionality and collaborated with a partner to ensure seamless
              gameplay.
            </p>
          </div>

          {/* Skills Section */}
          <h1 className={styles.sectionTitle}>Skills</h1>
          <ul className={styles.skillList}>
            <li>
              Front End: Python, Javascript, TypeScript, CSS, JSON,
              styled-components
            </li>
            <li>Back End: C, C++, MySQL, Flask, JQuery</li>
            <li>Developer Tools: Insomnia, Git, GitHub, Slack, npm</li>
          </ul>
        </section>
      </main>

      <Footer />

    </div>
  );
}
