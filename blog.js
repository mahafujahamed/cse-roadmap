const blogPosts = [  
  {
    "id": 1,
    "title": "Boost your github knowledge",
    "date": "March 19, 2024",
    "image": "images/blog1.jpg",
    "author": "Mahafuj Ahamed",
    "authorImage": "images/mahafuj12.jpeg"
  },
  {
    "id": 2,
    "title": "Exploring the Power of AI",
    "date": "April 5, 2024",
    "image": "images/blog/blog-4.jpg",
    "author": "Jane Doe",
    "authorImage": "images/blog/steve.jpg"
  },
  {
    "id": 2,
    "title": "Exploring the Power of AI",
    "date": "April 5, 2024",
    "image": "images/blog/blog-4.jpg",
    "author": "Jane Doe",
    "authorImage": "images/blog/steve.jpg"
  },
  {
    "id": 2,
    "title": "Exploring the Power of AI",
    "date": "April 5, 2024",
    "image": "images/blog/blog-4.jpg",
    "author": "Jane Doe",
    "authorImage": "images/blog/steve.jpg"
  },
  {
    "id": 3,
    "title": "Building a Better Tomorrow",
    "date": "April 12, 2024",
    "image": "images/blog/blog-4.jpg",
    "author": "John Smith",
    "authorImage": "images/authors/john.jpg"
  }
];

function loadBlogPosts() {
  const blogCardContainer = document.getElementById('blog-post-container');

  blogPosts.forEach(post => {
    const blogCard = document.getElementById('blog-post-template').cloneNode(true);
    blogCard.classList.remove('hidden'); // Ensure visibility

    // Set content using ID references
    blogCard.querySelector('#post-title').textContent = post.title;
    blogCard.querySelector('#post-image').src = post.image; // Adjust path if needed
    blogCard.querySelector('#post-author').textContent = post.author || ""; // Set empty string if author is missing

    // Format and display date (replace with your preferred format)
    const date = new Date(post.date);
    const formattedDate = date.toLocaleDateString(); // Adjust format if needed (e.g., MM/DD/YYYY)
    blogCard.querySelector('#post-date').textContent = formattedDate;

    // Add author image
    const authorImage = document.createElement('img');
    authorImage.classList.add('h-10', 'w-10', 'rounded-full', 'object-cover', 'mr-2'); // Adjust styles as needed
    authorImage.src = post.authorImage; // Access the authorImage property from the JSON data

    // Insert author image before author name (choose one approach)
    // Approach 1: Using class name (assuming a class for author information)
    const authorInfo = blogCard.querySelector('.author-info');
    if (authorInfo) { // Check if element exists
      authorInfo.insertBefore(authorImage, authorInfo.firstChild);
    }
    blogCardContainer.appendChild(blogCard);
  });
}

window.addEventListener('DOMContentLoaded', loadBlogPosts);
