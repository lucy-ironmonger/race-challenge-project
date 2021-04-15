import React, { useState } from "react";
import "../styles/Backgrcolorchange.scss";

const Backgrcolorchange = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const onClickChange = () => {
    if (click) {
      return "container-orange";
    } else if (!click) {
      return "container-white";
    }
  };
  return (
    <div className={click ? "container-orange" : "container-white"}>
      <i className={onClickChange()} />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Backgrcolorchange;
