const StartPointCoordInput = ({ max, min, valueX, valueY }) => {
  return (
    <>
      X: <input type="number" label="X" min={min} max={max} value={valueX} />
      Y: <input type="number" label="Y" min={min} max={max} value={valueY} />
      <button>Ok</button>
    </>
  );
};
export default StartPointCoordInput;
