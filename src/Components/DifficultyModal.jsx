function DifficultyModal({ handleLevelChangeSubmit, handleCancelClick }) {
  console.log("Difficulty modal was rendered");
  return (
    <div className="gameDifficulty">
      <dialog className="modal" id="difficulty-modal">
        <form action="dialog" id="difficulty-form">
          <fieldset>
            <legend>Select a difficulty:</legend>
            <div className="level-choice">
              <input
                type="radio"
                id="easy"
                name="level"
                value="6"
                defaultChecked
              />
              <label htmlFor="easy"> Easy(6 cards)</label>
            </div>

            <div className="level-choice">
              <input type="radio" id="medium" name="level" value="8" />
              <label htmlFor="medium"> Medium (8 cards)</label>
            </div>

            <div className="level-choice">
              <input type="radio" id="hard" name="level" value="10" />
              <label htmlFor="louie"> Hard (10 cards)</label>
            </div>
          </fieldset>
          <div className="form-buttons">
            <button id="cancelBtn" onClick={handleCancelClick}>
              Cancel
            </button>
            <button id="confirmBtn" onClick={handleLevelChangeSubmit}>
              Confirm
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
}

export default DifficultyModal;
