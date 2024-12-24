import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import portfolioSchema from "@/database/portfolioSchema";


type IParams = {
  params: Promise<{
    slug: string;
  }>;
};

export async function GET(req: NextRequest, props: IParams) {
  const params = await props.params;
  await connectDB();
  const { slug } = params; // Extract the slug from params

  try {
    // Find the blog by slug in the database
    const portfolio = await portfolioSchema.findOne({ slug }).orFail();


    return NextResponse.json(portfolio); // Return the blog as JSON
  } catch (err) {
    console.error("Error fetching portfolio:", err);
    return NextResponse.json(
        { error: "Portfolio not found." }, 
        { status: 404 }
    );
  }
}

