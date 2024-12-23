import React from "react";
import Image from "next/image";
import styles from "./portfolioDetail.module.css";

type BlogDetailProps = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  portfolioStory: String;
};

export default function portfolioDetail({
  title,
  date,
  description,
  image,
  imageAlt,
  portfolioStory,

}: BlogDetailProps) {
  return (
    <>
      <main>
          <article className={styles.portfolioPost}>
          <img src={`/images/${image}`} alt={imageAlt} className={styles.image} />
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.date}>Published on: {date}</p>
            <p className={styles.description}><strong>{description}</strong></p>
            <p className={styles.portfolioStory}>{portfolioStory}</p>
          </article>
      </main>

      {/* <Footer /> */}
    </>
  );
}