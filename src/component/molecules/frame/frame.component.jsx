import React from "react";

import "./frame.styles.scss";
import MainBox from "../../atoms/main-box/main-box.component";
import SideBox from "../../atoms/side-box/side-box.component";
import Title from "../../atoms/title/title.component";

export default function Frame() {
  return (
    <div className="frame">
      <MainBox />
      <SideBox />
    </div>
  );
}
