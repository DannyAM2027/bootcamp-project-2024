import React from "react";
import styles from "./page.module.css";
import connectDB from "../../database/db";
import Blog from "../../database/blogSchema";
import BlogPreview from "../../components/blogPreview";

// Define a TypeScript interface for the blog data
interface Blog {
  title: string;
  slug: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
}

// To fetch blogs from MongoDB
async function getBlogs() {
  await connectDB(); // Connect to the database

  try {
    const blogs = await Blog.find().sort({ date: -1 }).orFail(); // Fetch and sort blogs
    return JSON.parse(JSON.stringify(blogs)); // Convert Mongoose documents to plain objects
  } catch (err) {
    console.error("Error fetching blogs:", err);
    return null; 
  }
}

export default async function BlogListPage() {
  const blogs = await getBlogs(); // Fetch blogs dynamically

  // When no blogs are found or an error occurs
  if (!blogs) {
    return (
      <main className={styles.container}>
        <div className={styles.title}>
          <h1>Hey It&apos;s My <span>Blog</span>!</h1>
        </div>
        <p>No blog posts available. Please check back later.</p>
      </main>
    );
  }

  // Render the blog list using BlogPreview
  return (
    <main className={styles.container}>
      <div className={styles.title}>
       <h1 >Hey It&apos;s My <span>Blog</span>!</h1>
      </div>
      <div className={styles.blogList}>
        {blogs.map((blog: Blog) => (
          <BlogPreview
            key={blog.slug}
            title={blog.title}
            date={new Date(blog.date).toLocaleDateString()}
            description={blog.description}
            image={blog.image}
            imageAlt={blog.imageAlt}
            slug={blog.slug}
          />
        ))}
      </div>
    </main>
  );
}