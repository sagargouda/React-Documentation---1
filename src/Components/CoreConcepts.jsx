export default function CoreConcepts({ img, title, des }) {
  return (
    <li>
      <img src={img} alt="componnet" />
      <h3>{title}</h3>
      <p>{des}</p>
    </li>
  );
}
