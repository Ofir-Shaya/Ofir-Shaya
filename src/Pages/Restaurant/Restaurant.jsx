import * as React from "react";
import { Sidebar } from "./Components/Sidebar";
import ResponsiveAppBar from "./Components/Appbar";
import "./css/style.css";
import { Content } from "./Components/Content";

export const Restaurant = () => {
  const [iconDisplay, setIconDisplay] = React.useState(1);

  const changeIcon = () => {
    if (iconDisplay === 1) {
      setIconDisplay(2);
    } else {
      setIconDisplay(1);
    }
  };

  return (
    <div className="Restaurant">
      <ResponsiveAppBar currentIcon={iconDisplay} changeIcon={changeIcon} />
      <div className="flexDisplay">
        <Sidebar currentIcon={iconDisplay} />
        <Content />
      </div>
    </div>
  );
};
