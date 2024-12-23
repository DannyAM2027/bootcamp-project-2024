import mongoose, { Schema, Document, Model } from "mongoose";


export type IComment = {
  user: string;
  comment: string;
  time: Date;
};


export type Blog = {
  title: string;
  slug: string;
  date: Date;
  description: string; 
  image: string;
  imageAlt: string; 
  blogStory: string;
  comments: IComment[] 
};

// Mongoose Document type
export interface BlogDocument extends Blog, Document {}

// Mongoose schema
const blogSchema = new Schema<BlogDocument>({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  date: { type: Date, required: false, default: new Date() },
  description: { type: String, required: true },
  image: { type: String, required: true },
  imageAlt: { type: String, required: true },
  blogStory: { type: String, required: true },
  comments: [
    {
      user: { type: String, required: true },
      comment: { type: String, required: true },
      time: { type: Date, required: true },
    }
  ]
});


const Blog: Model<BlogDocument> =
  mongoose.models["blogs"] || mongoose.model<BlogDocument>("blogs", blogSchema);

export default Blog;