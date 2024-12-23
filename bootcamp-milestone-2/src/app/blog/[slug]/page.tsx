import { notFound } from "next/navigation";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema"; // Import Blog model
import BlogDetail from "@/components/blogDetail";
import BlogPreview from "@/components/blogPreview";

// Fetch a single blog by slug
async function getSingleBlog(slug: string) {
  await connectDB(); // Ensure database connection

  try {
    const blog = await Blog.findOne({ slug }).orFail(); // Find a single blog by slug
    return JSON.parse(JSON.stringify(blog)); // Convert Mongoose document to plain object
  } catch (err) {
    console.error(`Error fetching blog with slug "${slug}":`, err);
    return null; // Return null if the blog is not found or an error occurs
  }
}


export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const blog = await getSingleBlog(params.slug); 

  if (!blog) {
    notFound(); 
  }

  return (

    <BlogDetail
    title={blog.title}
    date={new Date(blog.date).toLocaleDateString()}
    description={blog.description}
    image={blog.image}
    imageAlt={blog.imageAlt}
    blogStory={blog.blogStory}
  />

  );
}
