import NewGame from "./components/NewGame";

function App() {
  const gameSetHandler = (level) => {
    console.log(level);
  };
  return (
    <>
      <h1>Catch the snow</h1>
      <NewGame onclick={gameSetHandler} />
      <input />
    </>
  );
}
export default App;
