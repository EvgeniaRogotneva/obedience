import { useContext } from "react";
import { Context } from "../../state/Context";

const BodySVGWrapper = ({ children }) => {
  const value = useContext(Context);
  const [state] = value;
  const blockWidth =
    (state.field.coord.valueX + state.BoxWithExercises.valueX) * 10;
  const blockHeight =
    (state.field.coord.valueY + state.BoxWithExercises.valueY) * 10;
  const viewBox = `0 0 ${blockWidth} ${blockHeight}`;
  return (
    <svg
      className="Field"
      width={blockWidth}
      height={blockHeight}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
};

export default BodySVGWrapper;
