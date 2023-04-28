import { createErrorMessage } from "./function.js";
import { API_users, friendsList } from "./constants.js";


function getFriends() {
  return fetch(API_users)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Users are not found!");
      }
      return response.json();
    })
    .then((friends) => {
      friends.forEach((friend) => {
        const card = createFriend(friend);
        friendsList.appendChild(card);
      });
    })
    .catch((error) => {
      const errorMessageBox = createErrorMessage(error.message);
      friendsList.appendChild(errorMessageBox);
    });
}

function createFriend(friend) {
  const card = document.createElement("div");
  const friendEl = document.createElement("a");
  friendEl.classList.add("list-group-item", "list-group-item-action");
  friendEl.href = `friend.html?id=${friend.id}`;
  friendEl.innerText = friend.name;
  card.appendChild(friendEl);
  return card;
}

getFriends();

