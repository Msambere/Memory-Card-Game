import Scorecard from "./ScoreCard";

export default function Header() {
  return (
    <div className="header-container">
      <div className="title-container">
        <p className="title">Memory Card Game</p>
        <p className="subtitle">
          Test your memory. Click each card once and only once.
        </p>
      </div>
      <Scorecard />
    </div>
  );
}
