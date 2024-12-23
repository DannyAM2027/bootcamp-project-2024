import BlogPreview from "@/components/blogPreview";
import Footer from "@/components/footer";
import Comment from "@/components/comment"
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";
import styles from "./page.module.css";

async function getBlogs() {
  await connectDB(); // Connect to the database
  try {
    const blogs = await Blog.find().sort({ date: -1 }).orFail(); // Fetch and sort blogs
    return JSON.parse(JSON.stringify(blogs)); // Convert Mongoose documents to plain objects
  } catch (err) {
    console.error("Error fetching blogs:", err);
    return null; // Return null if an error occurs
  }
}

export default async function BlogPage() {
  const blogs = await getBlogs();

  if (!blogs) {
    return (
      <main>
        <div className={styles.blogPageTitle}>
          <h1>Welcome to My <span>Blog</span>!</h1>
        </div>
        
        <p>No blog posts available. Please check back later.</p>
        <Footer />
      </main>
    );
  }

  return (
    <>
      <main>
        <div className={styles.blogPageTitle}>
          <h1>Welcome to My <span>Blog</span>!</h1>
        </div>
        
        <section>
          {blogs.map((blog: { slug: any; title: any; date: string | number | Date; description: any; image: any; image_alt: any; }) => (
            <BlogPreview
              key={blog.slug}
              title={blog.title}
              date={new Date(blog.date).toLocaleDateString()}
              description={blog.description}
              image={blog.image}
              imageAlt={blog.image_alt}
              slug={blog.slug}
            />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}

/* <section>
          {blogs.map((blog) => (
            <BlogPreview
              key={blog.slug}
              title={blog.title}
              date={new Date(blog.date).toLocaleDateString()}
              description={blog.description}
              image={blog.image}
              imageAlt={blog.image_alt}
              slug={blog.slug}
            />
          ))}
        </section> */