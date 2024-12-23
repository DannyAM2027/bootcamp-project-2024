
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Comment from "./comment";
import CommentForm from "./commentForm";
import styles from "./blogDetail.module.css";

type BlogDetailProps = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  comments: { user: string; comment: string; time: Date }[];
  blogStory: string;
  slug: string; // Add slug to props
};

export default function BlogDetail({
  title,
  date,
  description,
  image,
  imageAlt,
  comments: initialComments,
  blogStory,
  slug, // Accept slug as a prop
}: BlogDetailProps) {
  const [comments, setComments] = useState(initialComments);

  const handleNewComment = (newComment: {
    user: string;
    comment: string;
    time: Date;
  }) => {
    setComments((prev) => [...prev, newComment]);
  };

  return (
    <div >
      {/* Blog Content */}
      <main>
          <article className={styles.blogPost}>
            <h1 className={styles.title}>{title}</h1>
            <img src={`/images/${image}`} alt={imageAlt} className={styles.image} />
            <p className={styles.date}>Published on: {date}</p>
            <p className={styles.description}><strong>{description}</strong></p>
            <p className={styles.blogStory}>{blogStory}</p>
          </article>
      </main>

      {/* Comments Section */}
      <div className={styles.commentsSection}>
        <h2>Comments</h2>
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <Comment key={index} comment={comment} />
          ))
        ) : (
          <p>No comments yet. Be the first to comment!</p>
        )}
        {/* Add type explicitly */}
        <CommentForm slug={slug} type="blog" onCommentAdded={handleNewComment} />
      </div>
    </div>
  );
}