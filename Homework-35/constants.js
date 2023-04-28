export const API_users = "https://jsonplaceholder.typicode.com/users";
export const API_posts = "https://jsonplaceholder.typicode.com/posts";
export const API_comments = "https://jsonplaceholder.typicode.com/comments";


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