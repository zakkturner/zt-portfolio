import React from "react";

import "./home-container.styles.scss";

import Title from "../../atoms/title/title.component";

export default function HomeContainer() {
  return (
    <div className="home-container">
      <button>Portfolio</button>
      <Title />
      <button>Contact</button>
    </div>
  );
}
