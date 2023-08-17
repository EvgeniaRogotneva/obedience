import { useContext, useState } from "react";
import { Context } from "../state/Context";

const StartPointCoordInput = () => {
  const value = useContext(Context);
  const [state, dispatch] = value;

  const [inputX, setInputX] = useState(50);
  const [inputY, setInputY] = useState(50);

  const setCoord = () => {
    dispatch({
      type: "setFieldSize",
      payload: { size: { valueX: inputX, valueY: inputY } },
    });
  };

  return (
    <>
      X:{" "}
      <input
        className="start-point-coord-input-x"
        type="number"
        label="X"
        min={state.field.limit.min}
        max={state.field.limit.max}
        placeholder={state.field.size.valueX}
        onChange={(e) => setInputX(e.target.value)}
      />
      Y:{" "}
      <input
        className="start-point-coord-input-y"
        type="number"
        label="Y"
        min={state.field.limit.min}
        max={state.field.limit.max}
        placeholder={state.field.size.valueY}
        onChange={(e) => setInputY(e.target.value)}
      />
      <button className="submit-coord" onClick={setCoord}>
        Ok
      </button>
    </>
  );
};
export default StartPointCoordInput;
