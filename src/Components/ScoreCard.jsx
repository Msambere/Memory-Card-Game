export default function Scorecard({ currentScore, bestScore }) {
  return (
    <div className="scorecard">
      <div className="currentScore">
        <h4>Current Score: {currentScore}</h4>
      </div>
      <div className="bestScore">
        <h4>Best Score: {bestScore}</h4>
      </div>
    </div>
  );
}
