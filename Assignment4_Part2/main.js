/*

         Name: Draedn Groves
                100727783

         File: index.html

         Date: 29th March 2024

         The main.js file for functional pruposes involving our program.

*/

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

// Declaring an array of image filenames
const imgFiles = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

// Declare an object of alternative text for each image
// Incase the user has like screen reader on?
const imgAltText = {
  'pic1.jpg': 'Alt text for pic1',
  'pic2.jpg': 'Alt text for pic2',
  'pic3.jpg': 'Alt text for pic3',
  'pic4.jpg': 'Alt text for pic4',
  'pic5.jpg': 'Alt text for pic5'
};

// A simple for loop to go through the array of filenames
for(let i = 0; i < imgFiles.length; i++) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/' + imgFiles[i]);
  newImage.setAttribute('alt', imgAltText[imgFiles[i]]);
  thumbBar.appendChild(newImage);

  // Add a click event listener to each thumbnail image
  newImage.addEventListener('click', function(e) {
    displayedImage.setAttribute('src', e.target.getAttribute('src'));
    displayedImage.setAttribute('alt', e.target.getAttribute('alt'));
  });
}

// Add a click event listener to the darken/lighten button (Should add a vignette style ish)
btn.addEventListener('click', function() {
  if(btn.getAttribute('class') === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});
