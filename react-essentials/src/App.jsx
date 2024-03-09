import React from "react";
import Header from "./components/Header";
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/examples";

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
