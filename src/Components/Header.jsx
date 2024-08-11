import Scorecard from "./ScoreCard";
import ChangeGameDifficulty from "./ChangeGameDifficulty";

function Header({ currentScore, handleChangeDifficultyClick, bestScore }) {
  return (
    <div className="header-container">
      <div className="title-container">
        <h1 className="title">Memory Card Game</h1>
        <h2 className="subtitle">
          Test your memory. Click each card once and only once.
        </h2>
      </div>
      <div className="header-right">
        <Scorecard currentScore={currentScore} bestScore={bestScore} />
        <ChangeGameDifficulty
          handleChangeDifficultyClick={handleChangeDifficultyClick}
        />
      </div>
    </div>
  );
}

export default Header;
