export default function Scorecard({ currentScore, bestScore }) {
  return (
    <div className="scorecard">
      <div className="currentScore">Current Score: {currentScore}</div>
      <div className="bestScore">Best Score: {bestScore}</div>
    </div>
  );
}
