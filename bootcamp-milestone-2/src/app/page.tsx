import Head from 'next/head';
import Image from "next/image";
import Navbar from "@/components/navbar";
import styles from "./page.module.css";

import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
      <Head>
        <script
          src="https://kit.fontawesome.com/ceaaa19e99.js"
          crossOrigin="anonymous"
          async
        ></script>
      </Head> {/* fix this here */}

      <main className={styles.body}>
        <Navbar />
        <section className={styles.home}>
          <div className={styles["home-img"]}>
            <Image src="/myself.JPEG" alt="Daniel Miranda" width={500} height={500} /> {/* fix image */}
          </div>
          <div className={styles["home-content"]}>
            {<h1>
              Hi, it&apos;s <span className={styles["spanName"]}>Daniel</span>
            </h1>}
            <h3 className={styles["typing-text"]}>
              I&apos;m a <span></span>
            </h3>
            <p>
              I'm a dedicated software developer focused on backend development
              and embedded systems, currently pursuing a Computer Science degree
              @ Cal Poly SLO, graduating in June 2027. I&apos;ve worked on projects
              ranging from web development to embedded systems and thrive in solving
              complex problems with efficient code. I&apos;m always eager to learn and grow
              through new challenges.
            </p>
            <div className={styles["social-icons"]}>
              <a
                href="https://www.linkedin.com/in/daniel-miranda-98b568273/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/DannyAM2027"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.instagram.com/danielmirandapm/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </section>

        {/* You can uncomment and use the blog preview section here */}
        {/* <section className={styles.blogs}>
          {blogs.map((blog) => (
            <BlogPreview key={blog.slug} {...blog} />
          ))}
        </section> */}
      </main>

      <Footer />
    </>
  );
}
