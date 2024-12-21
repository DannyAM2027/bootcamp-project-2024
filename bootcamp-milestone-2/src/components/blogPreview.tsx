import React from "react";
import Image from "next/image";
import type { Blog } from "@/static/blogData";
import styles from "./blogPreview.module.css";

export default function BlogPreview({ title, description, image, date, slug }: Blog) {
  return (
    <div className={styles.blogPost}>
      <h3 className={styles.blogTitle}>{title}</h3>
      <Image src={`/images/${image}`} alt={title} width={500} height={300} className={styles.blogImage} />
      <p className={styles.blogDescription}>{description}</p>
      <a href={`/blog/${slug}`} className={styles.blogLink}>
        Read More
      </a>
    </div>
  );
}
