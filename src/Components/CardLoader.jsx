import Card from "./Card";

export default function CardLoader({ renderList }) {
  console.table(renderList);
  const cards = renderList.map((pokemon) => {
    console.log(pokemon);
    return (
      <Card
        key={pokemon.id}
        trackingNum={pokemon.id}
        pokemonName={pokemon.name}
      />
    );
  });

  console.log(cards);
  return <>{cards}</>;
}
