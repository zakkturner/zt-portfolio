import React from "react";

import "./home-container.styles.scss";

import Title from "../../atoms/title/title.component";
import CustomButton from "../../atoms/custom-button/custom-button.components";

export default function HomeContainer() {
  return (
    <div className="home-container">
      <CustomButton className="portfolio" value="Portfolio" />

      <Title />
      <CustomButton className="contact" value="Contact" />
    </div>
  );
}
