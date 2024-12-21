type Blog = {
    title: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
    blogStory: string;
  };
  
  const blogs: Blog[] = [
    {
      title: "Painful Lesson!",
      date: "2024-10-15",
      description: "The Time I Realized I Need Basketball Shoes!",
      image: "basketball.png",
      imageAlt: "An image of blog 1",
      slug: "my-first-blog", //change this to the titles
      blogStory: "I realized I needed proper basketball shoes after playing a game of pick-up where I couldn't last beyond a single 11-point game. I had been wearing old Reeboks that weren't made for basketball, and by the end of the game, I could barely feel my feet. The lack of cushioning and support left me struggling to keep up, and that's when it hit me: I needed shoes that were actually designed for the sport."
    },
    {
      title: "Definitely Not A Chef!",
      date: "2024-10-18",
      description: "The Time I Made The Worst Pasta!",
      image: "spaghetti.png",
      imageAlt: "An image of blog 2",
      slug: "another-blog-post", 
      blogStory: "The time I made the worst pasta was when I tried to make crab pasta with imitation crab. I thought it would be an easy, affordable substitute, but it turned out to be a disaster. The imitation crab was cheap, overly sweet, and didn't mix well with the sauce at all. The whole dish tasted awful, and after a few painful bites, I had no choice but to toss the entire batch in the trash. Definitely a lesson learned!"

    }
  ];

  export default blogs;