import { notFound } from "next/navigation";
import PortfolioDetail from "@/components/portfolioDetail";
import connectDB from "@/database/db";
import Portfolio from "@/database/portfolioSchema";

async function getSinglePortfolio(slug: string) {
  try {
    await connectDB();
    const portfolio = await Portfolio.findOne({ slug }).orFail();
    return JSON.parse(JSON.stringify(portfolio)); // Convert Mongoose document to plain object
  } catch (err) {
    console.error(`Error fetching portfolio: ${err}`);
    return null;
  }
}

export default async function PortfolioPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const portfolio = await getSinglePortfolio(params.slug);

  if (!portfolio) {
    notFound();
  }

  return (
    <PortfolioDetail
      title={portfolio.title}
      slug={portfolio.slug}
      description={portfolio.description}
      image={portfolio.image}
      imageAlt={portfolio.imageAlt}
      portfolioStory={portfolio.portfolioStory || ''}
      comments={portfolio.comments || []}
    />
  );
}

