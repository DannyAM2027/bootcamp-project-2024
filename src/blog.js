var blogs = [
    {
        title: "Painful Lesson!",
        date: "2024-10-15",
        description: "The Time I Realized I Need Basketball Shoes!",
        image: "basketball.png",
        imageAlt: "An image of blog 1",
        slug: "my-first-blog" //change this to the titles
    },
    {
        title: "Definitely Not A Chef!",
        date: "2024-10-18",
        description: "The Time I Made The Worst Pasta!",
        image: "spaghetti.png",
        imageAlt: "An image of blog 2",
        slug: "another-blog-post"
    }
];
// DOM Manipulation
var blogContainer = document.getElementById('blog-container');
function appendBlogs() {
    blogs.forEach(function (blog) {
        var blogDiv = document.createElement('div');
        blogDiv.classList.add('blog-post'); //
        var blogTitle = document.createElement('h1');
        blogTitle.textContent = blog.title;
        blogTitle.classList.add('blog-title'); //
        var blogImage = document.createElement('img');
        blogImage.src = blog.image;
        blogImage.alt = blog.imageAlt;
        blogImage.classList.add('blog-image'); //
        var blogDescription = document.createElement('p');
        blogDescription.textContent = blog.description;
        blogDescription.classList.add('blog-description'); //
        var blogLink = document.createElement('a');
        blogLink.href = "".concat(blog.slug, ".html");
        blogLink.textContent = "Read more";
        blogLink.classList.add('blog-link'); //
        blogDiv.appendChild(blogTitle);
        blogDiv.appendChild(blogImage);
        blogDiv.appendChild(blogDescription);
        blogDiv.appendChild(blogLink);
        blogContainer === null || blogContainer === void 0 ? void 0 : blogContainer.appendChild(blogDiv);
    });
}
appendBlogs();
