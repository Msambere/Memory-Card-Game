function LevelSelector({ handleLevelChangeSubmit }) {
  return (
    <div className="level-status-container">
      <h2>Choose a level:</h2>
      <div className="level-button-container">
        <button
          className="level-button easy clicked"
          value="6"
          onClick={handleLevelChangeSubmit}
        >
          Easy
        </button>
        <button
          className="level-button medium"
          value="8"
          onClick={handleLevelChangeSubmit}
        >
          Medium
        </button>
        <button
          className="level-button hard"
          value="10"
          onClick={handleLevelChangeSubmit}
        >
          Hard
        </button>
      </div>
    </div>
  );
}

export default LevelSelector;
