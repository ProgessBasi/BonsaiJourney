// Get the social container element
const socialContainer = document.querySelector('.footer-social-container');

// Add event listener for hover effect on social icons
socialContainer.addEventListener('mouseover', (event) => {
  // Check if the target element is a social icon
  if (event.target.classList.contains('social-icon')) {
    event.target.style.color = '#3b5998';
  }
});

socialContainer.addEventListener('mouseout', (event) => {
  // Check if the target element is a social icon
  if (event.target.classList.contains('social-icon')) {
    event.target.style.color = '#fff';
  }
});
