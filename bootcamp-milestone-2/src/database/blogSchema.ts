import mongoose, { Schema, Document, Model } from "mongoose";

// Define the TypeScript interface for the Blog document
export interface IBlog extends Document {
  title: string;
  slug: string;
  date: Date;
  description: string;
  content: string;
  image: string;
  image_alt: string;
}

// Define the Blog schema
const blogSchema = new Schema<IBlog>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true }, // Ensure slug is unique
    date: { type: Date, default: () => new Date() }, // Use a function for the default date
    description: { type: String, required: true },
    image: { type: String, required: true },
    image_alt: { type: String, required: true },
    content: { type: String, required: true },
  },
  { collection: "blogs" } // Explicitly set the collection name
);

// Define the Blog model
const Blog: Model<IBlog> =
  mongoose.models.Blog || mongoose.model<IBlog>("Blog", blogSchema);

export default Blog;
