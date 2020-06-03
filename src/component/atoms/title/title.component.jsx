import React from "react";

import "./title.styles.scss";

export default function Title() {
  return (
    <div className="title">
      <h1 className="title__welcome">Wel</h1>
      <br />{" "}
      <h1 className="title__welcome">
        Come<span className="title__welcome--period">.</span>
      </h1>
    </div>
  );
}
