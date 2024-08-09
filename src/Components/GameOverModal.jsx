function GameOverModal({ gameStatus, resetGameClick }) {
  if (gameStatus == "playing") {
    return (
      <div className="gameOver">
        <dialog className="modal playing"></dialog>
      </div>
    );
  } else if (gameStatus == "won") {
    return (
      <div className="gameOver">
        <dialog className="modal won">
          <h1>You won!</h1>
          <button onClick={resetGameClick}> Restart game</button>
        </dialog>
      </div>
    );
  } else if (gameStatus == "lost") {
    return (
      <div className="gameOver">
        <dialog className="modal lost">
          <h1>Sorry! You lost..</h1>
          <button onClick={resetGameClick}> Restart game</button>
        </dialog>
      </div>
    );
  }
}

export default GameOverModal;
