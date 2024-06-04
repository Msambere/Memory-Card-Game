import Card from "./Card";

export default function CardLoader() {
  const cards = [];
  for (let i = 0; i < 7; i++) {
    cards.push(<Card key={i} />);
  }

  return <>{cards}</>;
}
