function Circle({ id, current, clickHandler }) {
  let circleName;

  if (id == 0) {
    circleName = "circle0";
  }
  if (id == 1) {
    circleName = "circle1";
  }
  if (id == 2) {
    circleName = "circle2";
  }
  if (id == 3) {
    circleName = "circle3";
  }
  if (id == 4) {
    circleName = "circle4";
  }
  if (id == 5) {
    circleName = "circle5";
  }
  if (id == 6) {
    circleName = "circle6";
  }

  return (
    <button
      className={`circle ${current ? "active" : ""}`}
      id={current ? circleName : null}
      onClick={() => clickHandler(id)}
    ></button>
  );
}

export default Circle;
