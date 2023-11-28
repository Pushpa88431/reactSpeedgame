import { useState } from "react";

function NewGame({ onclick }) {
  const [name, setName] = useState("");
  const inputHandler = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <h2>Start a game by choosing difficulty</h2>
      <input type="text" onChange={inputHandler} />
      <div>
        <button onClick={() => onclick("easy")}>Easy</button>
        <button onClick={() => onclick("medium")}>Medium</button>
        <button onClick={() => onclick("hard")}>Hard</button>
      </div>
    </div>
  );
}
export default NewGame;
