function ChangeGameDifficulty({
  handleChangeDifficultyClick,
  difficultyLevel,
}) {
  const parseDiffLevel = () => {
    if (difficultyLevel == 6) {
      return "Easy";
    } else if (difficultyLevel == 8) {
      return "Medium";
    } else if (difficultyLevel == 10) {
      return "Hard";
    } else {
      return "Error";
    }
  };
  return (
    <div className="level-display">
      <h4>Current Difficulty Level - </h4>
      <p>{parseDiffLevel(difficultyLevel)}</p>
      <button onClick={handleChangeDifficultyClick}>
        Change Difficulty Level
      </button>
    </div>
  );
}

export default ChangeGameDifficulty;
