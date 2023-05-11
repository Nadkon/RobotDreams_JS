import React from "react";

class AddWork extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      title: "",
      description: "",
      link: "",
    };
  }
  render() {
    return (
      <form>
        <input
          placeholder="Company name"
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <input
          placeholder="Job title"
          onChange={(e) => this.setState({ title: e.target.value })}
        />
        <textarea
          placeholder="Job description"
          onChange={(e) => this.setState({ description: e.target.value })}
        ></textarea>
        <input
          placeholder="Web-site"
          onChange={(e) => this.setState({ link: e.target.value })}
        />
        <button
          type="button"
          onClick={() =>
            this.props.onAdd({
              name: this.state.name,
              title: this.state.title,
              description: this.state.description,
              link: this.state.link,
            })
          }
        >
          Click to add experience
        </button>
      </form>
    );
  }
}

export default AddWork;
