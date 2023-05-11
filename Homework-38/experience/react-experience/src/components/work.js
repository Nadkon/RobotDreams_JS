import React from "react";

class Work extends React.Component {
  work = this.props.work;
  render() {
    return (
      <div className="work">
        <div>Company: {this.work.name}</div>
        <div>Job title: {this.work.title}</div>
        <div>Job description: {this.work.description}</div>
        <a href={this.work.link}>Visit the site</a>
      </div>
    );
  }
}

export default Work