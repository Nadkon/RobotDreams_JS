const API_posts = "https://jsonplaceholder.typicode.com/posts";
const API_users = "https://jsonplaceholder.typicode.com/users";
const id = getIDFromFriend();

const friendCard = document.querySelector(".friend-card");

class Friend {
  constructor(id) {
    this.id = id;
  }
  async getFriend() {
    const response = await fetch(`${API_URL}/${this.id}`);
    const friend = await response.json();
    this.name = friend.name;
  }
}

function getIDFromFriend() {
  const params = new URL(document.location).searchParams;

  return params.get("id");
}

function createErrorMessage(message) {
  const errorMessageBox = document.createElement("div");
  errorMessageBox.classList.add("alert", "alert-danger");
  errorMessageBox.innerText = message;
  return errorMessageBox;
}

async function getFriendCard() {
  return fetch(API_posts)
    .then((response) => response.json())
    .then((friends) => {
      const id = getIDFromFriend();

      friends.forEach((post) => {
        if (post.userId == id) {
          card = createFriendCardPost(post);
          friendCard.appendChild(card);
        }
      });
    });
}

async function getFriendName() {
  return fetch(API_users)
    .then((response) => {
      if (!response.ok) {
        throw new Error ('User has no posts')
      }
      response.json();
     })
    .then((friends) => {
      const id = getIDFromFriend();
      friends.forEach((friend) => {
        if (friend.id == id) {
          const friendName = document.querySelector(".friend-name");
          friendName.innerText = friend.name;
        }
      });
    })
      .catch(error=>{
      const errorMessageBox = createErrorMessage(error.message);
      friendCard.appendChild(errorMessageBox);
    })
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
  postTitle.href = `post.html?id=${post.id}`;
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
