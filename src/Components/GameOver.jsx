function GameOver({ closeHandler, name, score, level, text }) {
  return (
    <div className="overlay">
      <div className="gameover_box">
        <h2>Game over here</h2>
        <div>
          <p>
            {name} {score} snowball on level {level}.{text}
          </p>
        </div>

        <button onClick={closeHandler}>Try again</button>
      </div>
    </div>
  );
}

export default GameOver;
