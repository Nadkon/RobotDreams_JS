import React, { useEffect } from "react";

const url = "https://jsonplaceholder.typicode.com/users";
const allReposRaw = fetch(`https://api.github.com/users/nadkon/repos`);

class Repo extends React.Component {
  repo = this.props.repo;
  render() {
    return (
      <div className="repo">
        <div>
          <span className="bold">Repo name:</span> {this.repo.name}
        </div>
        <div>
          <span className="bold">Decription:</span> {this.repo.description}
        </div>
        <a href={this.repo.clone_url}>Visit the site</a>
      </div>
    );
  }
}

class Repos extends React.Component {
  fetchQuotes = () => {
    this.setState({ ...this.state, isFetching: true });
    fetch(url)
      .then((response) => response.json())
      .then((result) => this.setState({ quotes: result, isFetching: false }))
      .catch((e) => console.log(e));
  };

  render() {
    return <div>hi</div>;
  }
}
function ListRepo(repos) {
  return <div>"Hi"</div>;
}

export default Repos;

/*
(useEffect(() => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const repos = data.forEach(repo => ({

          }));
          console.log(repos);
          ListRepo(repos)
        });
    }, [])
    )
*/
