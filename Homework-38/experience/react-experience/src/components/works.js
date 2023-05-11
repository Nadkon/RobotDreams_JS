import React from "react";
import Work from "./work";

class Works extends React.Component {
  render() {
    if (this.props.works.length > 0)
      return (
        <div>
          {this.props.works.map((el) => (
            <Work key={el.id} work={el} />
          ))}
        </div>
      );
    else
      return (
        <div className="work">
          <h3>Work expirence is absent</h3>
        </div>
      );
  }
}

export default Works;
