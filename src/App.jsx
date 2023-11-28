import { useState } from "react";
import NewGame from "./components/NewGame";
import { levels } from "./levels";
import Game from "./components/Game";

function App() {
  const [player, setPlayer] = useState();
  const [circles, setCircles] = useState([]);
  const [score, setScore] = useState(0);

  const gameSetHandler = (level, name) => {
    const levelIndex = levels.findindex((el) => el.name === level);
    const levelAmount = level[levelIndex].amount;
    const circlesArray = Array.from(
      { length: levels[levelIndex].amount },
      (x, i) => i
    );
    console.log("circlesArray", circlesArray);

    console.log("Cirles of circles", levelAmount);

    //based on level, we find the matching object from levels array, and then make an array for the circles, with amount in the objects.
    setCircles(circlesArray);
    setPlayer({
      level: level,
      name: name,
    });
  };

  console.log(player);

  return (
    <>
      <h1>Catch the snow</h1>
      <NewGame onclick={gameSetHandler} />
      <Game />
    </>
  );
}
export default App;
