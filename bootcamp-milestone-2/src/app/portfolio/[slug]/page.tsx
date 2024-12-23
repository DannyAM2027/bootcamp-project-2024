import { notFound } from "next/navigation";
import connectDB from "@/database/db";
import PortfolioDetail from "@/components/portfolioDetail";
import BlogPreview from "@/components/blogPreview";
import Portfolio from "@/database/portfolioSchema";

// Fetch a single blog by slug
async function getSinglePortfolio(slug: string) {
  await connectDB(); // Ensure database connection

  try {
    const portfolio = await Portfolio.findOne({ slug }).orFail(); // Find a single blog by slug
    return JSON.parse(JSON.stringify(portfolio)); // Convert Mongoose document to plain object
  } catch (err) {
    console.error(`Error fetching portfolio with slug "${slug}":`, err);
    return null; // Return null if the portfolio is not found or an error occurs
  }
}


export default async function PortfolioPage({
  params,
}: {
  params: { slug: string };
}) {
  const portfolio = await getSinglePortfolio(params.slug); 

  if (!portfolio) {
    notFound(); 
  }

  return (

    <PortfolioDetail
    title={portfolio.title}
    date={new Date(portfolio.date).toLocaleDateString()}
    description={portfolio.description}
    image={portfolio.image}
    imageAlt={portfolio.imageAlt}
    portfolioStory={portfolio.blogStory}
  />

  );
}
