import Card from "./Card";
import { pokemonList } from "../assets/PokemonList";

function CardLoader({ renderList, handleCardClick, gameBoardColumns }) {
  //Shuffle cards
  const shuffleRenderList = (list) => {
    let shuffledList = [];
    let usedIndexNums = [];
    while (shuffledList.length != list.length) {
      let randomIndex = Math.floor(Math.random() * list.length);
      if (usedIndexNums.includes(randomIndex)) {
        continue;
      } else {
        usedIndexNums.push(randomIndex);
        shuffledList.push(list[randomIndex]);
      }
    }
    return shuffledList;
  };
  //Main function
  let cardList = shuffleRenderList(renderList);
  console.log("Current set card order: ");
  console.table(cardList);

  const cards = cardList.map((pokemon) => {
    return (
      <Card
        key={pokemon.id}
        trackingNum={pokemon.id}
        pokemonName={pokemon.name}
        handleCardClick={handleCardClick}
      />
    );
  });

  const gridStyle = {
    gridTemplateColumns: `repeat(${gameBoardColumns}, 1fr)`,
  };

  return (
    <div className="gameBoard" style={gridStyle}>
      {cards}
    </div>
  );
}

export default CardLoader;
