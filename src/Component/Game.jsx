import Circle from "../UI _components/Circles";
function Game() {
  return (
    <div>
      <p>{score}</p>
      <div>
        {circles.map((_,i) =>
        Circle key={i})}
         />
       
      </div>
      <buttom onClick={stopHandler}>Stop Game</buttom>
    </div>
  );
}
