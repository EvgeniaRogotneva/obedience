import { useContext } from "react";
import { Context } from "../state/Context";

const StartPointCoordInput = () => {
  const value = useContext(Context);
  const [state] = value;

  return (
    <>
      X:{" "}
      <input
        className="start-point-coord-input-x"
        type="number"
        label="X"
        min={state.fieldSize.min}
        max={state.fieldSize.max}
        value={state.fieldSize.valueX}
      />
      Y:{" "}
      <input
        className="start-point-coord-input-y"
        type="number"
        label="Y"
        min={state.fieldSize.min}
        max={state.fieldSize.max}
        value={state.fieldSize.valueY}
      />
      <button className="submit-coord">Ok</button>
    </>
  );
};
export default StartPointCoordInput;
