import React from "react";

const CoreConcept = (props) => {
  return (
    <li key={props.title}>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
};

export default CoreConcept;
