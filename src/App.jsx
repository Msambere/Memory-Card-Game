import "./App.css";
import { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import CardLoader from "./Components/CardLoader";
import { pokemonList } from "./assets/PokemonList";
import GameOverModal from "./Components/GameOverModal";

function App() {
  const [clickedList, setClickedList] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameStatus, setGameStatus] = useState("won");
  const highestScore = pokemonList.length;
  const dialog = document.querySelector(".modal");

  const resetGameClick = () => {
    setCurrentScore(0);
    setClickedList([]);
    setGameStatus("playing");
    dialog.close();
  };

  const handleCardClick = (e) => {
    let cardBox = e.target.closest(".card-box");
    let pokemon = cardBox.querySelector("h3").textContent;
    if (clickedList.includes(pokemon)) {
      setGameStatus("lost");
      dialog.showModal();
    } else {
      if (currentScore + 1 > bestScore) {
        setBestScore(bestScore + 1);
      }
      setCurrentScore(currentScore + 1);
      setClickedList([...clickedList, pokemon]);
      console.log(clickedList);
      console.log(dialog);
    }
    if (clickedList.length + 1 == highestScore) {
      setGameStatus("won");
      dialog.showModal();
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
      <GameOverModal gameStatus={gameStatus} resetGameClick={resetGameClick} />
      <Footer />
    </>
  );
}

export default App;
