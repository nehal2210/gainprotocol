import React from "react";
export default class Layout extends React.Component {
  componentDidMount() {
    if (typeof window !== "undefined") {
      window.WOW = require("wowjs");
    }
    new WOW.WOW().init();
  }
  render(props) {
    return (
      <>
        <main>{props.children}</main>
      </>
    );
  }
}
