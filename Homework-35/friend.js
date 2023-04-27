const API_URL = "https://gorest.co.in/public/v2/posts";
const id = getIDFromFriend();

class Friend {
  constructor(id) {
    this.id = id
  }
  async getFriend() {
    const response = await fetch(`${API_URL}/${this.id}`);
    const friend = await ressponse.json();

    this.name = friend.name;
  }
}

const friendName = document.querySelector(".friend-name");
const postBody = document.querySelector(".card-body");

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
return fetch(API_URL)
  .then((response) => response.json())
  .then((friends) => {
    const userId = getIDFromFriend();
    console.log(userId);
    friends.forEach((friend) => {
      if (friend.user_id === userId) {
        console.log(`found ${friend}`);
      } else {
        console.log(`not found ${friend}`);
      }

    }
    )


  })
}




console.log(getIDFromFriend());
console.log(getFriendCard())

