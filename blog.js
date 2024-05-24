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
    "title": "Do you know Web Tecnologies",
    "date": "April 5, 2024",
    "image": "images/blogweb.jpg",
    "author": "sumaiya",
    "authorImage": "images/sumaya.jpg"
  },
  {
    "id": 2,
    "title": "Programmers Guidline",
    "date": "April 5, 2024",
    "image": "images/blog/blog-4.jpg",
    "author": "Jane Doe",
    "authorImage": "images/blog/steve.jpeg"
  },
  {
    "id": 2,
    "title": "Programmers Guidline",
    "date": "April 5, 2024",
    "image": "images/programmerweb.jpg",
    "author": "Mr. Amit Chakraborty",
    "authorImage": "images/amit.jpeg"
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
    blogCard.classList.remove('hidden'); 

    
    blogCard.querySelector('#post-title').textContent = post.title;
    blogCard.querySelector('#post-image').src = post.image; 
    blogCard.querySelector('#post-author').textContent = post.author || ""; 
    
    const date = new Date(post.date);
    const formattedDate = date.toLocaleDateString(); 
    blogCard.querySelector('#post-date').textContent = formattedDate;

    
    const authorImage = document.createElement('img');
    authorImage.classList.add('h-10', 'w-10', 'rounded-full', 'object-cover', 'mr-2'); 
    authorImage.src = post.authorImage; 

    const authorInfo = blogCard.querySelector('.author-info');
    if (authorInfo) { 
      authorInfo.insertBefore(authorImage, authorInfo.firstChild);
    }
    blogCardContainer.appendChild(blogCard);
  });
}

window.addEventListener('DOMContentLoaded', loadBlogPosts);
