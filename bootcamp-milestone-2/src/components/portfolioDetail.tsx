"use client";

import React, { useState } from "react";
import Image from "next/image";
import Comment from "./comment";
import CommentForm from "./commentForm";
import styles from "./portfolioDetail.module.css";

type PortfolioDetailProps = {
  title: string;
  slug: string; // Add slug for identifying the portfolio
  description: string;
  image: string;
  imageAlt: string;
  portfolioStory: string;
  comments: { user: string; comment: string; time: Date }[]; // Add comments prop
};

export default function PortfolioDetail({
  title,
  slug,
  description,
  image,
  imageAlt,
  portfolioStory,
  comments: initialComments,
}: PortfolioDetailProps) {
  const [comments, setComments] = useState(initialComments);

  const handleNewComment = (newComment: { user: string; comment: string; time: Date }) => {
    setComments((prev) => [...prev, newComment]);
  };

  return (
    <div >
      <main>
          <article className={styles.portfolioPost}>
          <img src={`/images/${image}`} alt={imageAlt} className={styles.image} />
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.description}><strong>{description}</strong></p>
            <p className={styles.portfolioStory}>{portfolioStory}</p>
          </article>
      </main>

      {/* Comments Section */}
      <div className={styles.commentsSection}>
        <h2>Comments</h2>
        {comments.length > 0 ? (
          comments.map((comment, index) => <Comment key={index} comment={comment} />)
        ) : (
          <p>No comments yet. Be the first to comment!</p>
        )}
        {/* Add type explicitly */}
        <CommentForm slug={slug} type="portfolio" onCommentAdded={handleNewComment} />
      </div>
    </div>
  );
}