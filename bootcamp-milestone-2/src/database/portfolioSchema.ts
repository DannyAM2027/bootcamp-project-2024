import mongoose, { Schema, Document, Model } from "mongoose";

// TypeScript type for a single comment
export type IComment = {
  user: string;
  comment: string;
  time: Date;
};

// TypeScript type for Portfolio portfolio
export type Portfolio = {
  title: string;
  slug: string;
  description: string; // Description of the Portfolio
  image: string; // URL for the image
  imageAlt: string;
  comments: IComment[]; // List of comments
};

// Mongoose Document type
export interface PortfolioDocument extends Portfolio, Document {}

// Mongoose schema
const portfolioSchema = new Schema<PortfolioDocument>({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  imageAlt: { type: String, required: true },
  comments: [
    {
      user: { type: String, required: true },
      comment: { type: String, required: true },
      time: { type: Date, required: true},
    },
  ],
});

// Collection and model def
const Portfolio: Model<PortfolioDocument> =
  mongoose.models["portfolios"] || mongoose.model<PortfolioDocument>("portfolios", portfolioSchema);

export default Portfolio;

