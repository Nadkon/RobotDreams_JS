import { getIDFromUrl, createErrorMessage } from "./function.js";
import { API_posts, API_comments, API_users } from "./constants.js";

const postCard = document.querySelector(".post-body");
const postButton = document.querySelector(".button");

postButton.addEventListener("click", () => {
  history.back();
});

function createCommentCard(comment) {
  const commentEl = document.createElement("div");
  const commentBody = document.createElement("div");
  const commentTitle = document.createElement("h4");
  commentTitle.innerText = comment.name;

  const commentText = document.createElement("p");
  commentText.innerText = comment.body;

  commentBody.appendChild(commentTitle);
  commentBody.appendChild(commentText);
  commentEl.appendChild(commentBody);

  return commentEl;
}

async function getPostCard() {
  return fetch(API_comments)
    .then((response) => response.json())
    .then((comments) => {
      const id = getIDFromUrl();
      const postId = id.split(":")[1];
      getPostBody();
      comments.forEach((comment) => {
        if (comment.postId == postId) {
          const card = createCommentCard(comment);
          postCard.appendChild(card);
        }
      });
    });
}

async function getFriendName() {
  return fetch(API_users)
    .then((response) => {
      if (!response.ok) {
        throw new Error("There are no comments to this post");
      }
      return response.json();
    })
    .then((friends) => {
      const id = getIDFromUrl();
      const friendId = id.split(":")[0];
      friends.forEach((friend) => {
        if (friend.id == friendId) {
          const friendName = document.querySelector(".friend-name");
          friendName.innerText = `Name: ${friend.name}`;
        }
      });
    })
    .catch((error) => {
      const errorMessageBox = createErrorMessage(error.message);
      postCard.appendChild(errorMessageBox);
    });
}
async function getPostBody() {
  return fetch(API_posts)
    .then((response) => {
      return response.json();
    })
    .then((posts) => {
      const id = getIDFromUrl();
      const postId = id.split(":")[1];
      posts.forEach((post) => {
        if (post.id == postId) {
          const postBody = document.querySelector(".post-name");
          postBody.innerText = `POST: ${post.body}`;
        } else {
        }
      });
    });
}

getFriendName();
function createPostCard() {}

getPostCard();
