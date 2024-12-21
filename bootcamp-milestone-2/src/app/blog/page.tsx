import styles from "./page.module.css";
import BlogPreview from "@/components/blogPreview";
import blogs from "@/static/blogData";
import Footer from "@/components/footer";

export default function BlogPage() {
  return (
    <>
    <main className={styles.blogPage}>
        <div className={styles.blogPageTitle}>
            <h1>
                Welcome to My <span>Blog</span>!
            </h1>

        </div>

      <section>
        {blogs.map((blog) => (
          <BlogPreview key={blog.slug} {...blog} />
        ))}
      </section>
      
    </main>

    <Footer />
    </>
  );
}
