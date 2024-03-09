import React from "react";

const Tabs = ({ children, buttons, ButtonContainer = "menu" }) => {
  return (
    <>
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </>
  );
};

export default Tabs;
