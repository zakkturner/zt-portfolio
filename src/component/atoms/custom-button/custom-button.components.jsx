import React from "react";

import "./custom-button.styles.scss";

export default function CustomButton({ className, value }) {
  return (
    <>
      <button className={`custom-button ${className}`}>{value}</button>
    </>
  );
}
