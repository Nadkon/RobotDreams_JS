import React from "react";
import "./App.css";
import Works from "./components/works";
import AddWork from "./components/addWork";

export function Photo(props) {
  return (
    <div className="img">
      <h1>Nadiia Kononykhina</h1>
      <img src={props.src} className="photo" alt="photo" />
    </div>
  );
}

export function ContactInfo() {
  return (
    <div className="contact">
      <h2>Contact information</h2>
      <h3>Address</h3>
      <span className="element"> Kyiv, Ukraine</span>
      <h3>Phone</h3>

      <span className="element">
        <a href="tel:+380999030943"></a>+380999030943
      </span>
      <h3>E-mail</h3>

      <span className="element">
        <a href="mailto:nadkon@gmail.com">nadkon@gmail.com</a>
      </span>
    </div>
  );
}

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
        <div>
          <span className="bold">Company:</span> {currentExperience.name}
        </div>
        <div><span className="bold">Job title:</span> {currentExperience.title}</div>
        <div><span className="bold">Job description:</span> {currentExperience.description}</div>
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
