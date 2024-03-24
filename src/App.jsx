import { useState } from "react";
import NewGame from "./Components/NewGame";
import Game from "./Components/Game";
import GameOver from "./Components/GameOver";
import { levels } from "./levels";

const getRndInt = (min, max) => {
  return Math.floor(Math.random() * (max - min) + max) + min;
};

function App() {
  const [player, setPlayer] = useState();
  const [circles, setCircles] = useState([]);
  const [score, setScore] = useState(0);
  const [gameLaunch, setGameLaunch] = useState(true);
  const [gameOn, setGameOn] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [current, setCurrent] = useState(0);

  let pace = 1000;
  let levelsAmount;

  const gameSetHandler = (level, name) => {
    const levelIndex = levels.findIndex((el) => el.name === level);
    const levelAmount = levels[levelIndex].amount;
    const circlesArray = Array.from({ length: levelAmount }, (x, i) => i);

    //based on level, we find the matching object from levels array, and then make an array for the circles, with amount in the objects.
    setCircles(circlesArray);
    setPlayer({
      level: level,
      name: name,
    });
    setPlayer({ level: level, name: name });
    setGameLaunch((prevLunch) => !prevLunch);
    setGameOn(!gameOn);
    randomNumb();
  };

  const stopHandler = () => {
    setGameOn((prevState) => !prevState);
    setGameOver((prevState) => !prevState);
  };
  const closeHandler = () => {
    setGameOver((prevState) => !prevState);
    setGameLaunch((prevState) => !prevState);
    setScore(0);
  };
  const clickHandler = (id) => {
    if (current !== id) {
      stopHandler();
      return;
    }
  };
  const randomNumb = () => {
    if (rounds.current >= 100) {
      stopHandler();
      return;
    }
    let nextActive;
    do {
      nextActive = getRndInt(0, levelsAmount);
    } while (nextActive === currentInt.current);

    setCurrent(nextActive);
    rounds.current += 1;

    timeoutIdRef.current = setTimeout(randomNumb, pace);
    console.log(nextActive);
  };

  return (
    <>
      <h1>Catch the snow</h1>
      {gameLaunch && <NewGame onclick={gameSetHandler} />}
      {gameOn && (
        <Game
          score={score}
          circles={circles}
          stopHandler={stopHandler}
          clickHandler={clickHandler}
          current={current}
        />
      )}
      {gameOver && (
        <GameOver closeHandler={closeHandler} {...player} score={score} />
      )}
    </>
  );
}
export default App;
