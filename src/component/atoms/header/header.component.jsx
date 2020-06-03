import React from "react";

import "./header.styles.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <nav className="header__container--nav">
          <h3>Zak Turner</h3>
          <h4>Front End Engineer</h4>
        </nav>
      </div>
    </header>
  );
}
