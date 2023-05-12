import React from "react";

class Work extends React.Component {
  work = this.props.work;
  render() {
    return (
      <div className="work">
        <div><span className="bold">Company:</span> {this.work.name}</div>
        <div><span className="bold">Job title:</span> {this.work.title}</div>
        <div><span className="bold">Job description:</span> {this.work.description}</div>
        <a href={this.work.link}>Visit the site</a>
      </div>
    );
  }
}

export default Work