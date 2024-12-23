import React from "react";
import Link from "next/link";
import styles from "./portfolioPreview.module.css";
import Portfolio from "@/database/portfolioSchema";
import Image from "next/image";

type PortfolioProps = {
  title: string;
  description: string;
  image: string;
  slug: string; // Slug for dynamic routing
};

export default function PortfolioPreview({ title, description, image, slug }: PortfolioProps) {
  return (
    <div className={styles.portfolioPost}>
        <Image src={`/images/${image}`} alt={title} width={500} height={300} className={styles.portfolioImage} />
      <h3 className={styles.portfolioTitle}>{title}</h3>
      <p className={styles.portfolioDescription}>{description}</p>
      <Link href={`/portfolio/${slug}`} className={styles.portfolioLink}>Read More</Link>

    </div>
  );
}