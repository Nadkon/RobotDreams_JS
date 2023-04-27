
const API_URL = "https://jsonplaceholder.typicode.com/users";
const friendsList = document.querySelector(".friends-list");

function getFriends() {
  return fetch(API_URL)
    .then((Response) => {
      if (!Response.ok) {
        throw new Error("Users are not found!");
}
     return Response.json()
    })

    .then((friends ) => {
      console.log(friends);
      friends.forEach((friend) => {
        const card = createFriend(friend);
        friendsList.appendChild(card);
      });
    })
    .catch(error=>{
      const errorMessageBox = createErrorMessage(error.message);
      friendsList.appendChild(errorMessageBox);
    })
}


function createFriend(friend) {

  const card = document.createElement('div')
  const friendEl = document.createElement("a");
  friendEl.classList.add("list-group-item", "list-group-item-action");
//   if (friend.status === 'inactive') {
//     friendEl.classList.add('red');
//   } else if (friend.status === "active") {
// friendEl.classList.add("green");
//   } else {
//     friendEl.classList.add("grey");
//   }
  friendEl.href = `friend.html?id=${friend.id}`;
  friendEl.innerText = friend.name;
  card.appendChild(friendEl)
  return card;
}


function createErrorMessage(message) {
  const errorMessageBox = document.createElement("div");
  errorMessageBox.classList.add("alert", "alert-danger");
  errorMessageBox.innerText = message;
  return errorMessageBox;
}


getFriends();
