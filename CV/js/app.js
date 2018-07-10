$(document).ready(function() {
  $('.dropdown-button').dropdown({
    constrainWidth: false,
    hover: true,
    belowOrigin: true,
    alignment: 'left'
  });
  $('.carousel-slider').carousel({ fullWidth: true });
});

const form = document.querySelector('#comment-form');
const commentList = document.querySelector('.collection');
const commentInput = document.querySelector('#comment');

loadEventListeners();

function loadEventListeners() {
  document.addEventListener('DOMContentLoaded', getComments);

  form.addEventListener('submit', addComment);
}

// Load comments from Local Storage
function getComments() {
  let comments;
  if (localStorage.getItem('comments') === null) {
    comments = [];
  } else {
    comments = JSON.parse(localStorage.getItem('comments'));
  }

  comments.forEach(function(comment) {
    const li = document.createElement('li');

    li.className = 'collection-item';

    li.appendChild(document.createTextNode(comment));

    commentList.appendChild(li);
  });
}

// add comment to ul
function addComment(e) {
  e.preventDefault();

  if (commentInput.value === '') {
    alert('Please add a comment');
  }

  const li = document.createElement('li');

  li.className = 'collection-item';

  li.appendChild(document.createTextNode(commentInput.value));

  commentList.appendChild(li);

  storeCommentInlocalStorage(commentInput.value);

  commentInput.value = '';
}

// add comment to Local Storage
function storeCommentInlocalStorage(comment) {
  let comments;
  if (localStorage.getItem('comments') === null) {
    comments = [];
  } else {
    comments = JSON.parse(localStorage.getItem('comments'));
  }

  comments.push(comment);

  localStorage.setItem('comments', JSON.stringify(comments));
}
