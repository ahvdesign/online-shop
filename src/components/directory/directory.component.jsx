import React from "react";

import "./directory.styles.scss";

import SECTION_DATA from "../../data/sections.data";

import MenuItem from "../menu-item/menu-item.component";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: SECTION_DATA,
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, size, ...otherProps }) => (
          <MenuItem key={id} size={size ? size + " " : ""} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
