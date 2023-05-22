const repos = document.querySelector(".repo");
const token = "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";
const userName = "Nadkon";


class Api{
  constructor(token, name) {
    this.token = token;
    this.name = name;
  }

  async getRepos(){
  const myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${this.token}`)

  const allReposRaw = await fetch(`https://api.github.com/users/${this.name}/repos`);
  const repo = await allReposRaw.json();
  reposPrint(repo)
}
}



function reposPrint(items) {
  let i = 1;

  items.forEach((item) => {
    div = document.createElement("div");

    if (item.description === null) {
      div.innerHTML = `<h3>${i}. ${item.name}</h3>
      <a href="${item.clone_url}" target='_blank'>Click the link to see files for the project ${item.name}</a>
      `;
    } else {
      div.innerHTML = `<h3>${i}. ${item.name}</h3>
      <a href="${item.clone_url}" target='_blank'>Click the link to see files for the project ${item.name}</a>
      <p>Decription: ${item.description}`;
    }

    i++;
    repos.append(div);
  });
}
const nadkon = new Api(token, userName);
nadkon.getRepos().then(res => {
  console.log(res)
})