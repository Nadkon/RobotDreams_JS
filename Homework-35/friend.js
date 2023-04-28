import { createErrorMessage, getIDFromUrl } from "./function.js";
import { API_posts, API_users } from "./constants.js";
import {Friend} from "./constants.js";
const friendCard = document.querySelector(".friend-card");
const friendName = document.querySelector('friend-name');



const friend = new Friend(getIDFromUrl());
friend.getFriend();

async function getFriendCard() {
  return fetch(API_posts)
    .then((response) => {
      if (!response.ok) {
        throw new Error("User has no posts");
      }
      return response.json();
    })
    .then((friends) => {
      const id = friend.id;
      friends.forEach((friend) => {
        if (friend.userId == id) {
          let post = createFriendCardPost(friend);
          friendCard.appendChild(post);
        }
      });
    })
    .catch((error) => {
      const errorMessageBox = createErrorMessage(error.message);
      const btn = document.createElement("a");
      btn.classList.add("btn", "btn-primary");
      btn.href = "index.html";
      btn.innerText = "Click to return back";
      friendCard.appendChild(errorMessageBox);
      friendCard.appendChild(btn);
    });
}

async function getFriendName() {
  return fetch(API_users)
    .then((response) => {
      return response.json();
    })
    .then((friends) => {
      const id = getIDFromUrl();
      friends.forEach((friend) => {
        if (friend.id == id) {
          const friendName = document.querySelector(".friend-name");
          friendName.innerText = friend.name;
        } else {
        }
      });
    });
}

function createFriendCardPost(post) {
  getFriendName();

  const postEl = document.createElement("div");
  const postBody = document.createElement("div");
  const postTitle = document.createElement("a");
  postTitle.classList.add(
    "list-group-item",
    "list-group-item-action",
    "post-link"
  );
  postTitle.href = `post.html?id=${friend.id}:${post.id}`;
  postTitle.innerText = post.title;

  const postText = document.createElement("p");
  postText.classList.add("overflow", "overflow-hidden");
  postText.innerText = post.body;

  postBody.appendChild(postTitle);
  postBody.appendChild(postText);
  postEl.appendChild(postBody);
  return postEl;
}
getFriendCard();
