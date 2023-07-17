document.addEventListener('DOMContentLoaded', function() {
    
  

// Get all the portfolio cards
const cards = document.querySelectorAll('.portfolio-card');

// Loop through each card and add a click event listener
cards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('expanded');
  });
});
// Update the image source with your actual image path
const imagePath = 'path/to/image.jpg';

// Get the human photo element
const humanPhoto = document.querySelector('.human-photo');

// Add a load event listener to the image
humanPhoto.addEventListener('load', () => {
  humanPhoto.classList.add('loaded');
});

// Set the image source to trigger the load event
humanPhoto.src = imagePath;
});

