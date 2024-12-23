import React from "react";
import styles from "./navbar.module.css"; // Import your CSS module
import Link from "next/link";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>Daniel Miranda</Link>

      <nav className={styles.navbar}>
        <Link href="/" className={styles.navLink}>Home</Link>
        <Link href="/blog" className={`${styles.navLink}`}>
          Blogs</Link>
          <Link href="/portfolio" className={styles.navLink}>Portfolio</Link>
          <Link href="/resume" className={styles.navLink}>Resume</Link>
        <Link href="/contact" className={styles.navLink}>Contact Me</Link>


      </nav>

    </header>
  );
}
