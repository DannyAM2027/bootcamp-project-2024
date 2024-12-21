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
      image: "bootcamp-milestone-2/public/basketball.png",
      imageAlt: "An image of blog 1",
      slug: "my-first-blog" //change this to the titles
    },
    {
      title: "Definitely Not A Chef!",
      date: "2024-10-18",
      description: "The Time I Made The Worst Pasta!",
      image: "bootcamp-milestone-2/public/spaghetti.png",
      imageAlt: "An image of blog 2",
      slug: "another-blog-post" 
    }
  ];

  // DOM Manipulation
  const blogContainer = document.getElementById('blog-container');

function appendBlogs() {
  blogs.forEach((blog) => {
    const blogDiv = document.createElement('div');
    blogDiv.classList.add('blog-post');//

    const blogTitle = document.createElement('h1');
    blogTitle.textContent = blog.title;
    blogTitle.classList.add('blog-title')//


    const blogImage = document.createElement('img');
    blogImage.src = blog.image;
    blogImage.alt = blog.imageAlt;
    blogImage.classList.add('blog-image');  //

    const blogDescription = document.createElement('p');
    blogDescription.textContent = blog.description;
    blogDescription.classList.add('blog-description');  //

    const blogLink = document.createElement('a');
    blogLink.href = `${blog.slug}.html`;
    blogLink.textContent = "Read more";
    blogLink.classList.add('blog-link');//

    blogDiv.appendChild(blogTitle);
    blogDiv.appendChild(blogImage);
    blogDiv.appendChild(blogDescription);
    blogDiv.appendChild(blogLink);

    blogContainer?.appendChild(blogDiv);
  });
}

appendBlogs();
