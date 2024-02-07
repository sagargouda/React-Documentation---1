import reactImg from "./assets/react-core-concepts.png";
import Header from "./Components/Headers";

import CoreConcept from "./Components/CoreConcept";
import Example from "./Components/Example";

function App() {
  return (
    <div>
      <Header image={reactImg} />
      <main>
        <CoreConcept />
        <Example />
      </main>
    </div>
  );
}

export default App;
