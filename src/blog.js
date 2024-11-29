var blogs = [
    {
        title: "Painful Lesson Learned",
        date: "2024-10-15",
        description: "The Time I Realized I Need Basketball Shoes!",
        image: "./images/blog1.png",
        imageAlt: "An image of blog 1",
        slug: "my-first-blog"
    },
    {
        title: "Definitely Not a Chef",
        date: "2024-10-18",
        description: "The Time I Made The Worst Pasta!",
        image: "./images/blog2.png",
        imageAlt: "An image of blog 2",
        slug: "another-blog-post"
    }
];
// DOM Manipulation
var blogContainer = document.getElementById('blog-container');
function appendBlogs() {
    blogs.forEach(function (blog) {
        var blogDiv = document.createElement('div');
        var blogTitle = document.createElement('h1');
        blogTitle.textContent = blog.title;
        //var blogDate = document.createElement('h3');
        //blogDate.textContent = blog.date;
        var blogImage = document.createElement('img');
        blogImage.src = blog.image;
        blogImage.alt = blog.imageAlt;
        var blogDescription = document.createElement('p');
        blogDescription.textContent = blog.description;
        var blogLink = document.createElement('a');
        blogLink.href = "".concat(blog.slug, ".html");
        blogLink.textContent = "Read more";
        blogDiv.appendChild(blogTitle);
        //blogDiv.appendChild(blogDate);
        blogDiv.appendChild(blogImage);
        blogDiv.appendChild(blogDescription);
        blogDiv.appendChild(blogLink);
        blogContainer === null || blogContainer === void 0 ? void 0 : blogContainer.appendChild(blogDiv);
    });
}
appendBlogs();
