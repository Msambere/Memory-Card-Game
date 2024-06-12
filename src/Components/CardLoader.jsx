import Card from "./Card";

export default function CardLoader({
  renderList,
  setClickedList,
  clickedList,
  handleCardClick,
}) {
  // Create list with the pokemon in random order
  function randomizeRenderList(renderList) {
    let randomizedList = [];
    let usedIndexNums = [];
    let newList = renderList;
    while (randomizedList.length != newList.length) {
      let randomIndex = Math.floor(Math.random() * renderList.length);
      if (usedIndexNums.includes(randomIndex)) {
        continue;
      } else {
        usedIndexNums.push(randomIndex);
        randomizedList.push(newList[randomIndex]);
      }
    }
    return randomizedList;
  }
  let newRenderList = randomizeRenderList(renderList);
  const cards = newRenderList.map((pokemon) => {
    return (
      <Card
        key={pokemon.id}
        trackingNum={pokemon.id}
        pokemonName={pokemon.name}
        handleCardClick={handleCardClick}
      />
    );
  });
  return <>{cards}</>;
}
