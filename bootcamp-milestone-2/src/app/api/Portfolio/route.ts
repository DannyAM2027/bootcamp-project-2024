import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import portfolioSchema from "@/database/portfolioSchema";


type IParams = {
  params: {
    slug: string;
  };
};

export async function GET(req: NextRequest, { params }: IParams) {
  await connectDB(); // Connect to the database
  const { slug } = params; // Extract the slug from params

  try {
    // Find the portfolio by slug in the database
    const portfolio = await portfolioSchema.findOne({ slug }).orFail();

    return NextResponse.json(portfolio);
  } catch (err) {
    console.log(err)
    return NextResponse.json("Portfolio not found.", { status: 404 });
  }
}

