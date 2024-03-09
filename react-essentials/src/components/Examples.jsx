import React, { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../data-with-examples";
import Section from "./Section";
import Tabs from "./Tabs";

const Examples = () => {
  const [tabContent, setTabContent] = useState("");
  function handleSelect(selectedButton) {
    setTabContent(selectedButton);
    console.log(`selectedButton: ${selectedButton}`);
  }
  return (
    <Section id="examples">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={tabContent === "components"}
              onSelect={() => handleSelect("components")}
            >
              Component
            </TabButton>
            <TabButton
              isSelected={tabContent === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={tabContent === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={tabContent === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {!tabContent ? (
          <p>Please Select a Topic</p>
        ) : (
          <div id="tab-content">
            <h3>{EXAMPLES[tabContent].title}</h3>
            <p>{EXAMPLES[tabContent].description}</p>
            <pre>
              <code>{EXAMPLES[tabContent].code}</code>
            </pre>
          </div>
        )}
      </Tabs>
    </Section>
  );
};

export default Examples;
