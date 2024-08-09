import Scorecard from "./ScoreCard";

export default function Header({ currentScore, bestScore }) {
  return (
    <div className="header-container">
      <div className="title-container">
        <h1 className="title">Memory Card Game</h1>
        <h2 className="subtitle">
          Test your memory. Click each card once and only once.
        </h2>
      </div>
      <Scorecard currentScore={currentScore} bestScore={bestScore} />
    </div>
  );
}
