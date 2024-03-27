import Circle from "./UI_Components/Circle.jsx";

function Game({ score, circles, stopHandler, clickHandler, current }) {
  return (
    <div>
      <div className="circles">
        <p>{score}</p>
        <div className="circles"></div>
        {circles.map((el, i) => (
          <Circle
            key={i}
            id={i}
            clickHandler={clickHandler}
            current={current === i}
          />
        ))}
      </div>
      <button onClick={stopHandler}>Stop game</button>
    </div>
  );
}

export default Game;
