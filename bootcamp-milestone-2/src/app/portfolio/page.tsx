import PortfolioPreview from "@/components/portfolioPreview";
//import Footer from "@/components/footer";
import connectDB from "@/database/db";
import styles from "./page.module.css";
import Portfolio from "@/database/portfolioSchema";

interface Portfolio {
  key: string;
  title: string;
  description: string;
  image: string;
  link: string;
  slug: string;
}

async function getPortfolios() {
  await connectDB(); // Connect to the database
  try {
    const portfolios = await Portfolio.find().sort({ date: -1 }).orFail(); // Fetch and sort blogs
    return JSON.parse(JSON.stringify(portfolios)); // Convert Mongoose documents to plain objects
  } catch (err) {
    console.error("Error fetching portfolio:", err);
    return null; // Return null if an error occurs
  }
}

export default async function PortfolioPage() {
  const portfolios = await getPortfolios();

  if (!portfolios) {
    return (
      <main>
        <div className={styles.portfolioPageTitle}>
          <h1>Check Out My <span>Work</span>!</h1>
        </div>
        
        <p>No Portfolio Posts Available. Please Check Back Later.</p>
        {/* <Footer /> */}
      </main>
    );
  }

  return (
    <>
      <main>
        <div className={styles.portfolioPageTitle}>
        <h1>Check Out My <span>Work</span>!</h1>
        </div>
        
        <section>
          {portfolios.map((portfolio: Portfolio) => (
            <PortfolioPreview
              key={portfolio.key}
              title={portfolio.title}
              description={portfolio.description}
              image={portfolio.image}
              slug={portfolio.slug}
            />
          ))}
        </section>
      </main>
      {/* <Footer /> */}
    </>
  );
}


