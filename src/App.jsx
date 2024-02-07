import reactImg from "./assets/react-core-concepts.png";
import Header from "./Components/Headers";
import CoreConcepts from "./Components/CoreConcepts";
import { CORE_CONCEPTS } from "./data";
import TabButton from "./Components/TabButton";
import { useState } from "react";
import { EXAMPLES } from "./data";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  return (
    <div>
      <Header image={reactImg} />
      <main>
        <section id="core-concepts">
          <h2>Core Concept</h2>
          <ul>
            {CORE_CONCEPTS.map((core, index) => {
              return (
                <CoreConcepts
                  key={index}
                  title={core.title}
                  des={core.description}
                  img={core.image}
                />
              );
            })}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isActive={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isActive={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
            <TabButton
              isActive={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isActive={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
          </menu>

          {!selectedTopic ? <p>Please select a topic</p> : null}
          {selectedTopic ? (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          ) : null}
        </section>
      </main>
    </div>
  );
}

export default App;
