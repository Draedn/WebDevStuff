/*
	Name: Draedn Groves
	File: main.js
	Date: April.12th/2024
	The javascript file actually called main.js that adds our "behind-the-scenes" functionality.
*/


// functionality for showing/hiding the comments section
const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comment-wrapper');

commentWrapper.style.display = 'none';

showHideBtn.onclick = function() {
  let showHideText = showHideBtn.textContent;
  if(showHideText === 'Show comments') {
    showHideBtn.textContent = 'Hide comments';
    commentWrapper.style.display = 'block';
  } else {
    showHideBtn.textContent = 'Show comments';
    commentWrapper.style.display = 'none';
  }
};

// functionality for adding a new comment via the comments form
document.querySelector('.comment-form').addEventListener('submit', function(event) {
  // Prevent the form from being submitted normally
  event.preventDefault();

  // Get the name and comment from the form
  var name = document.querySelector('#name').value;
  var comment = document.querySelector('#comment').value;

  // Create a new comment element
  var newComment = document.createElement('p');
  newComment.textContent = name + ' says: ' + comment;

  // Add the new comment to the comment section
  document.querySelector('.comment-wrapper').appendChild(newComment);

  // Clear the form
  document.querySelector('#name').value = '';
  document.querySelector('#comment').value = '';
});
