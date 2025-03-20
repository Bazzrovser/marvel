export default function Hero({ title, description, foto }) {
  return (
    <ul className="listHero">
      <li>
        <p>
          <img className="photoHero" src={foto} alt={"logo"} />
          <strong>{title}</strong>
          {description}
        </p>
      </li>
    </ul>
  );
}
