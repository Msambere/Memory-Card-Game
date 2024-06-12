import "./App.css";
import { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import CardLoader from "./Components/CardLoader";
import { pokemonList } from "./assets/PokemonList";

function App() {
  const [clickedList, setClickedList] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const handleCardClick = (e) => {
    let cardBox = e.target.closest(".card-box");
    let pokemon = cardBox.querySelector(".card-title").textContent;
    if (clickedList.includes(pokemon)) {
      setCurrentScore(0);
      setClickedList([]);
    } else {
      if (currentScore + 1 > bestScore) {
        setBestScore(bestScore + 1);
      }
      setCurrentScore(currentScore + 1);
      setClickedList([...clickedList, pokemon]);
    }
  };

  return (
    <>
      <Header currentScore={currentScore} bestScore={bestScore} />
      <div className="gameboard">
        <CardLoader
          renderList={pokemonList}
          setClickedList={setClickedList}
          clickedList={clickedList}
          handleCardClick={handleCardClick}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
