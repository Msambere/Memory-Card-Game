import "./App.css";
import { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import CardLoader from "./Components/CardLoader";
import { pokemonList } from "./assets/PokemonList";
import GameOverModal from "./Components/GameOverModal";
import DifficultyModal from "./Components/DifficultyModal.jsx";
import ChangeGameDifficulty from "./Components/ChangeGameDifficulty.jsx";

function App() {
  const [clickedList, setClickedList] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameStatus, setGameStatus] = useState("won");
  const [difficultyLevel, setDifficultyLevel] = useState(6);
  const [gameBoardColumns, setGameBoardColumns] = useState(3);

  const highestScore = pokemonList.length;
  const statusDialog = document.querySelector(".status-modal");
  const difficultyDialog = document.querySelector("#difficulty-modal");
  const difficultyForm = document.getElementById("difficulty-form");

  //Handler functions
  const handleChangeDifficultyClick = () => {
    difficultyDialog.showModal();
  };

  const handleLevelChangeSubmit = (event) => {
    event.preventDefault();
    let level = document.querySelector('input[name="level"]:checked').value;
    console.log(level);
    setDifficultyLevel(level);
    console.log("UseState: ", difficultyLevel);
    difficultyDialog.close();
    setGameBoardColumns(Math.floor(parseInt(level) / 2));
    resetGameClick();
    setBestScore(0);
  };

  const resetGameClick = () => {
    setCurrentScore(0);
    setClickedList([]);
    setGameStatus("playing");
    statusDialog.close();
  };

  const handleCardClick = (e) => {
    let cardBox = e.target.closest(".card-box");
    let pokemon = cardBox.querySelector("h3").textContent;
    if (clickedList.includes(pokemon)) {
      setGameStatus("lost");
      statusDialog.showModal();
    } else {
      if (currentScore + 1 > bestScore) {
        setBestScore(bestScore + 1);
      }
      setCurrentScore(currentScore + 1);
      setClickedList([...clickedList, pokemon]);
      console.log(clickedList);
    }
    if (clickedList.length + 1 == highestScore) {
      setGameStatus("won");
      statusDialog.showModal();
    }
  };

  return (
    <>
      <Header
        currentScore={currentScore}
        bestScore={bestScore}
        handleChangeDifficultyClick={handleChangeDifficultyClick}
      />
      <CardLoader
        renderList={pokemonList}
        setClickedList={setClickedList}
        clickedList={clickedList}
        handleCardClick={handleCardClick}
        difficultyLevel={difficultyLevel}
        gameBoardColumns={gameBoardColumns}
      />
      <GameOverModal gameStatus={gameStatus} resetGameClick={resetGameClick} />
      <DifficultyModal handleLevelChangeSubmit={handleLevelChangeSubmit} />
      <Footer />
    </>
  );
}

export default App;
