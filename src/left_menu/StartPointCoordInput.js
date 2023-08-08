const StartPointCoordInput = ({ max, min, valueX, valueY }) => {
  return (
    <>
      X:{" "}
      <input
        className="start-point-coord-input-x"
        type="number"
        label="X"
        min={min}
        max={max}
        value={valueX}
      />
      Y:{" "}
      <input
        className="start-point-coord-input-y"
        type="number"
        label="Y"
        min={min}
        max={max}
        value={valueY}
      />
      <button className="submit-coord">Ok</button>
    </>
  );
};
export default StartPointCoordInput;
