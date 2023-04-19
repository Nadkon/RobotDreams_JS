const img = document.querySelector(".img");
const summary = document.querySelector(".summary");
const skills = document.querySelector(".skills");
const experience = document.querySelector(".experience");
const achievements = document.querySelector(".achievements");
const repos = document.querySelector(".repo");

//Загрузка репозиторіїв

async function repoLoad() {
  const allReposRaw = await fetch("https://api.github.com/users/nadkon/repos");
  const repo = await allReposRaw.json();
  reposPrint(repo);
}

function reposPrint(items) {
  let i = 1;

  items.forEach((item) => {
    div = document.createElement("div");
    debugger;
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
repoLoad();
// Збільшення фото
function photoEnlarge(e) {
  img.classList.toggle("animation");
  console.log("click", e.target);
}

img.addEventListener("click", photoEnlarge);

// Навігація
function navigate(event) {
  switch (event.key) {
    case "s":
      summary.scrollIntoView();
      break;
    case "h":
      skills.scrollIntoView();
      break;
    case "e":
      experience.scrollIntoView();
      break;
    case "a":
      achievements.scrollIntoView();
      break;
    default:
      alert("The entry is not valid");
  }
}
document.addEventListener("keypress", navigate);
