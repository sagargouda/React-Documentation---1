const desc = ["Fundamental", "Crucial", "Important"];

function genRandom(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header({ image }) {
  return (
    <header>
      <img src={image} />
      <h1>React Essentials</h1>
      <p>
        {desc[genRandom(3)]} React concepts you will need for almost any app you
        are going to build!
      </p>
    </header>
  );
}
