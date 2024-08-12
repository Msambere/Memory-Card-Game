import "./App.css";
import { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import CardLoader from "./Components/CardLoader";
import { pokemonList } from "./assets/PokemonList";
import GameOverModal from "./Components/GameOverModal";
import DifficultyModal from "./Components/DifficultyModal.jsx";

const randomizeRenderList = (difficultyLevel) => {
  console.log(difficultyLevel);
  let randomizedList = [];
  let usedIndexNums = [];
  while (randomizedList.length != difficultyLevel) {
    let randomIndex = Math.floor(Math.random() * pokemonList.length);
    if (usedIndexNums.includes(randomIndex)) {
      continue;
    } else {
      usedIndexNums.push(randomIndex);
      randomizedList.push(pokemonList[randomIndex]);
    }
  }
  return randomizedList;
};

function App() {
  const [clickedList, setClickedList] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameStatus, setGameStatus] = useState("won");
  const [difficultyLevel, setDifficultyLevel] = useState(6);
  const [gameBoardColumns, setGameBoardColumns] = useState(3);
  const [renderList, setRenderList] = useState(
    randomizeRenderList(difficultyLevel)
  );

  const highestScore = renderList.length;
  const statusDialog = document.querySelector(".status-modal");
  const difficultyDialog = document.getElementById("difficulty-modal");

  //Handler functions
  const handleChangeDifficultyClick = () => {
    const difficultyDialog = document.getElementById("difficulty-modal");
    difficultyDialog && difficultyDialog.showModal();
  };

  const handleLevelChangeSubmit = (event) => {
    const difficultyDialog = document.getElementById("difficulty-modal");
    event.preventDefault();
    let level = document.querySelector('input[name="level"]:checked').value;
    setDifficultyLevel(level);
    console.log("Difficulty level UseState: ", difficultyLevel);
    difficultyDialog.close();
    setGameBoardColumns(Math.floor(parseInt(level) / 2));
    console.log("gameBoardColumns UseState: ", gameBoardColumns);
    setRenderList(randomizeRenderList(level));
    console.log("Post Level Change list: ");
    console.table(renderList);
    setCurrentScore(0);
    setClickedList([]);
    setGameStatus("playing");
    setBestScore(0);
  };

  const handleCancelClick = (event) => {
    const difficultyDialog = document.getElementById("difficulty-modal");
    event.preventDefault();
    difficultyDialog.close();
  };

  const resetGameClick = () => {
    setCurrentScore(0);
    setClickedList([]);
    setRenderList(randomizeRenderList(difficultyLevel));
    setGameStatus("playing");
    statusDialog.close();
  };

  const handleCardClick = (e) => {
    console.log("Card clicked");
    let pokemon = e.target.closest(".card-box").querySelector("h3").textContent;
    if (clickedList.includes(pokemon)) {
      setGameStatus("lost");
      statusDialog.showModal();
    } else {
      if (currentScore + 1 > bestScore) {
        setBestScore(bestScore + 1);
      }
      setCurrentScore(currentScore + 1);
      setClickedList([...clickedList, pokemon]);
      console.log("Current clicked list:");
      console.table(clickedList);
    }
    if (clickedList.length + 1 == highestScore) {
      setGameStatus("won");
      statusDialog.showModal();
    }
  };

  return (
    <>
      <GameOverModal gameStatus={gameStatus} resetGameClick={resetGameClick} />
      <DifficultyModal
        handleLevelChangeSubmit={handleLevelChangeSubmit}
        handleCancelClick={handleCancelClick}
      />
      <div className="visuals">
        <Header
          currentScore={currentScore}
          bestScore={bestScore}
          handleChangeDifficultyClick={handleChangeDifficultyClick}
          difficultyLevel={difficultyLevel}
        />
        <CardLoader
          renderList={renderList}
          handleCardClick={handleCardClick}
          gameBoardColumns={gameBoardColumns}
        />
        <Footer />
      </div>
    </>
  );
}

export default App;
