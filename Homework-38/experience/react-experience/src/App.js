import React from "react";
import "./App.css";
import Works from "./components/works";
import AddWork from "./components/addWork";

export function ShowCurrentJob() {
  const currentExperience = {
    id: 1,
    name: "Worldwide Clinical Trials",
    title: "Depot Maganer",
    description: "Manage Depot's operations",
    link: "www.worldwide.com",
    currentWork: true,
  };

  return (
    <div className="current-job">
      <h1>Currect Position</h1>

      <div className="work">
        <div>Company: {currentExperience.name}</div>
        <div>Job title: {currentExperience.title}</div>
        <div>Job description: {currentExperience.description}</div>
        <a href={currentExperience.link}>Visit the site</a>
      </div>
    </div>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      works: [
        {
          id: 1,
          name: "Worldwide Clinical Trials",
          title: "Depot Maganer",
          description: "Manage Depot's operations",
          link: "www.worldwide.com",
          currentWork: true,
        },
        {
          id: 2,
          name: "East Site Managemen and Research",
          title: "Office Maganer",
          description: "Manage office operations",
          link: "",
          currentWork: false,
        },
        {
          id: 3,
          name: "Samsung Electronics",
          title: "General Assisstant of the Customer Contact Center",
          description:
            "Answering the telephone calls and providing information ",
          link: "",
          currentWork: false,
        },
      ],
    };
    this.addWork = this.addWork.bind(this);
  }
  render() {
    return (
      <div className="prev-experience">
        <h1>Work experience</h1>
        <div className="main">
          <Works works={this.state.works} />
        </div>
        <aside>
          <AddWork onAdd={this.addWork} />
        </aside>
      </div>
    );
  }
  addWork(work) {
    const id = this.state.works.length + 1;
    this.setState({ works: [...this.state.works, { id, ...work }] });
  }
}
export default App;
