import React, { Component } from "react";
import Accordion from "./Accordion";

class SideMenu extends Component {
  render(){
    const panels = [
      {
        label: 'Home',
        sublink1: "Homepage",
        linkTo1: "/"
      },
      {
        label: 'About',
        sublink1: "About Product",
        linkTo1: "/about",
        sublink2: "About Company",
        linkTo2: "/company"
      }
    ];

    return (
      <div className="sideMenu">
          <Accordion panels={panels} />
    </div>
    );
  }
}

export default SideMenu;