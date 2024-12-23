import { notFound } from "next/navigation";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema"; // Import Blog model
import BlogDetail from "@/components/blogDetail";
import Comment from "@/components/comment"; // Import Comment component
import { Key } from "react";

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
    <div>
      <BlogDetail
        title={blog.title}
        date={new Date(blog.date).toLocaleDateString()}
        description={blog.description}
        image={blog.image}
        imageAlt={blog.imageAlt}
        blogStory={blog.blogStory}
      />
      <div>
        <h2>Comments</h2>
        {blog.comments && blog.comments.length > 0 ? (
          blog.comments.map((comment: { user?: string | undefined; comment?: string | undefined; time?: string | undefined; } | undefined, index: Key | null | undefined) => {
            return <Comment key={index} comment={comment} />;
          })
        ) : ( 
          <p>No comments yet.</p>
        )}
      </div>
    </div>
  );
}

/* import { notFound } from "next/navigation";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema"; // Import Blog model
import BlogDetail from "@/components/blogDetail";
import Comment from "@/components/comment"; // Import Comment component

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

  //console.log("Fetched blog comments:", blog.comments);

  return (
    <div>
      <BlogDetail
        title={blog.title}
        date={new Date(blog.date).toLocaleDateString()}
        description={blog.description}
        image={blog.image}
        imageAlt={blog.imageAlt}
        blogStory={blog.blogStory}
      />
      <div>
        <h2>Comments</h2>
        {blog.comments && blog.comments.length > 0 ? (
          blog.comments.map((comment, index) => {
            //console.log("Rendering   comment:", comment);
            return <Comment key={index} comment={comment} />;
          })
        ) : ( 
          <p>No comments yet.</p>
        )}
      </div>
    </div>
  );
}

 */

