import React from "react";
import ImageSrc from "../assets/react-core-concepts.png";
const dynamicContent = ["React", "JS", "Vanilla JS"];
function getRandom(max) {
  return Math.floor(Math.random() * (max + 1));
}

const Header = () => {
  const title = dynamicContent[getRandom(2)];
  return (
    <header>
      <img src={ImageSrc} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {title} React concepts you will need for almost any app you are going to
        build!
      </p>
    </header>
  );
};

export default Header;
