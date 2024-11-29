type Blog = {
    title: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
  };
  
  const blogs: Blog[] = [
    {
      title: "Painful Lesson!",
      date: "2024-10-15",
      description: "The Time I Realized I Need Basketball Shoes!",
      image: "./images/blog1.png",
      imageAlt: "An image of blog 1",
      slug: "my-first-blog" //change this to the titles
    },
    {
      title: "Definitely Not A Chef!",
      date: "2024-10-18",
      description: "The Time I Made The Worst Pasta!",
      image: "./images/blog2.png",
      imageAlt: "An image of blog 2",
      slug: "another-blog-post" //change this to the titles
    }
  ];

  // DOM Manipulation
  const blogContainer = document.getElementById('blog-container');

function appendBlogs() {
  blogs.forEach((blog) => {
    const blogDiv = document.createElement('div');

    const blogTitle = document.createElement('h1');
    //const blogDate = document.createElement('h3');
    blogTitle.textContent = blog.title;
    //blogDate.textContent = blog.date;

    const blogImage = document.createElement('img');
    blogImage.src = blog.image;
    blogImage.alt = blog.imageAlt;

    const blogDescription = document.createElement('p');
    blogDescription.textContent = blog.description;

    const blogLink = document.createElement('a');
    blogLink.href = `${blog.slug}.html`;
    blogLink.textContent = "Read more";

    blogDiv.appendChild(blogTitle);
    //blogDiv.appendChild(blogDate);
    blogDiv.appendChild(blogImage);
    blogDiv.appendChild(blogDescription);
    blogDiv.appendChild(blogLink);

    blogContainer?.appendChild(blogDiv);
  });
}

appendBlogs();