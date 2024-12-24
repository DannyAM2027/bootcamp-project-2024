import { notFound } from "next/navigation";
import BlogDetail from "@/components/blogDetail";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";

async function getSingleBlog(slug: string) {
  try {
    await connectDB();
    const blog = await Blog.findOne({ slug }).orFail();
    return JSON.parse(JSON.stringify(blog)); // Convert Mongoose document to plain object
  } catch (err) {
    console.error(`Error fetching blog: ${err}`);
    return null;
  }
}

// Dynamic blog page
export default async function BlogPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const blog = await getSingleBlog(params.slug); // Fetch the blog using slug

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
        comments={blog.comments || []} // Pass the comments array to BlogDetail
        blogStory={blog.blogStory}
        slug={params.slug} // Pass slug to BlogDetail
      />
    </div>
  );
}