import CoreConcepts from "./CoreConcepts";
import { CORE_CONCEPTS } from "../data";

export default function CoreConcept() {
  return (
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
  );
}
