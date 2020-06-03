import React from "react";

import "./main.styles.scss";

import MainBox from "../../atoms/main-box/main-box.component";
import SideBox from "../../atoms/side-box/side-box.component";
import Header from "../../atoms/header/header.component";

export default function Main() {
  return (
    <main className="main">
      <Header />

      <div className="main__container">
        <MainBox />
        <SideBox />
      </div>
    </main>
  );
}
