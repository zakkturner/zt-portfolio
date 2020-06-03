import React from "react";

import "./main.styles.scss";

import Header from "../../atoms/header/header.component";
import Frame from "../../molecules/frame/frame.component";
import HomeContainer from "../../molecules/home-container/home-container.component";

export default function Main() {
  return (
    <main className="main">
      <Header />
      <HomeContainer />

      <div className="main__container">
        <Frame />
      </div>
    </main>
  );
}
