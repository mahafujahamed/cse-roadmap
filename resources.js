const resourcesGrid = document.getElementById('resources-grid');

fetch('resources.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(resource => {
      const card = document.createElement('div');
      card.classList.add('card');

      const image = document.createElement('img');
      image.src = resource.image;
      card.appendChild(image);

      const title = document.createElement('h3');
      title.textContent = resource.title;
      card.appendChild(title);

      const viewButton = document.createElement('a');
      viewButton.classList.add('view-button');
      viewButton.textContent = 'View';
      viewButton.href = resource.view_link;
      card.appendChild(viewButton);

      resourcesGrid.appendChild(card);
    });
  });
