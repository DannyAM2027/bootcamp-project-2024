import { notFound } from "next/navigation"; // For 404 handling
import blogs from "@/static/blogData"; // Import the blog data
import styles from "./page.module.css";
import Footer from "@/components/footer";

export default function BlogPost({ params }: { params: { slug: string } }) {
  const blog = blogs.find((blog) => blog.slug === params.slug);

  if (!blog) {
    notFound(); // Return a 404 page if the blog isn't found
  }

  return (
    <>
      <main>
          <article className={styles.blogPost}>
            <h1 className={styles.title}>{blog.title}</h1>
            <img src={`/images/${blog.image}`} alt={blog.imageAlt} className={styles.image} />
            <p className={styles.date}>Published on: {blog.date}</p>
            <p className={styles.description}><strong>{blog.description}</strong></p>
            <p className={styles.blogStory}>{blog.blogStory}</p>
          </article>
      </main>

      {/* <Footer /> */}
    </>

  );
}
