export const API_users = "https://jsonplaceholder.typicode.com/users";
export const API_posts = "https://jsonplaceholder.typicode.com/posts";
export const API_comments = "https://jsonplaceholder.typicode.com/comments";
export const friendsList = document.querySelector(".friends-list");
export const postCard = document.querySelector(".post-body");
export const postButton = document.querySelector(".button");
export const friendCard = document.querySelector(".friend-card");


export class Friend {
  constructor(id) {
    this.id = id;
  }
  async getFriend() {
    const response = await fetch(`${API_users}/${this.id}`);
    const friend = await response.json();
    this.name = friend.name;
  }
}