import React from "react";
import Image from "next/image";
import styles from "./blogDetail.module.css";

type BlogDetailProps = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  blogStory: String;
};

export default function BlogDetail({
  title,
  date,
  description,
  image,
  imageAlt,
  blogStory,

}: BlogDetailProps) {
  return (
    <>
      <main>
          <article className={styles.blogPost}>
            <h1 className={styles.title}>{title}</h1>
            <img src={`/images/${image}`} alt={imageAlt} className={styles.image} />
            <p className={styles.date}>Published on: {date}</p>
            <p className={styles.description}><strong>{description}</strong></p>
            <p className={styles.blogStory}>{blogStory}</p>
          </article>
      </main>

      {/* <Footer /> */}
    </>
  );
}