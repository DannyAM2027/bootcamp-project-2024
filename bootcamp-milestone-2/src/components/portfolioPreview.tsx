import React from "react";
import Image from "next/image";
import styles from "./portfolioPreview.module.css";
import Portfolio from "@/database/portfolioSchema";

export default function portfolioPreview({ title, description, image, slug }: Portfolio) {
  return (
    <div className={styles.portfolioPost}>
        <Image src={`/images/${image}`} alt={title} width={500} height={300} className={styles.portfolioImage} />
      <h3 className={styles.portfolioTitle}>{title}</h3>
      <p className={styles.portfolioDescription}>{description}</p>
      <a href={`/portfolio/${slug}`} className={styles.portfolioLink}>
        Read More
      </a>
    </div>
  );
}
