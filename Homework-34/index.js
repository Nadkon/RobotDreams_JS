//Загрузка репозиторіїв
const repos = document.querySelector(".repo");
// token is valid only for 30 days srtated from 24Apr2023
const token = "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";
const userName = "Nadkon";

class Api {
  constructor(token, name) {
    this.token = token;
    this.name = name;
  }
}
const nadKon = new Api(token, userName);
nadKon.getRepos = getRepos();

async function getRepos() {
  const content = nadKon.token;
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "text/plain");
  myHeaders.append("Content-Length", content.length.toString());
  myHeaders.append("X-Custom-Header", "ProcessThisImmediately");
  const allReposRaw = await fetch(`https://api.github.com/users/nadkon/repos`);
  const repo = await allReposRaw.json();
  reposPrint(repo);
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
nadKon.getRepos;
