import { useContext, useState } from "react";
import { PiArrowClockwiseBold } from "react-icons/pi";
import { Context } from "../state/Context";
import "./leftMenu.css";

const Rotation = ({ type }) => {
  const [state, dispatch] = useContext(Context);
  const [degree, setDegree] = useState(0);

  const setDegreeToState = ({ type }) => {
    dispatch({
      type: type,
      payload: { rotation: degree },
    });
  };

  return (
    <>
      Degree:{" "}
      <input
        type="number"
        label="Degree"
        min={0}
        max={360}
        onChange={(e) => setDegree(e.target.value)}
      />
      <PiArrowClockwiseBold
        className="rotate-exercise-arrow"
        onClick={() => {
          setDegreeToState({ type });
        }}
      />
    </>
  );
};
export default Rotation;
