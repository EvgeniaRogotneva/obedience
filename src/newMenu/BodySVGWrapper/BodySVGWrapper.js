import { useContext } from "react";
import { Context } from "../../state/Context";

const BodySVGWrapper = ({ children }) => {
  const value = useContext(Context);
  const [state] = value;
  const fieldWidth = state.field.coord.valueX * 10;
  const fieldHeight = state.field.coord.valueY * 10;
  const viewBox = `0 0 ${fieldWidth} ${fieldHeight}`;
  return (
    <svg
      className="Field"
      width={fieldWidth}
      height={fieldHeight}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
};

export default BodySVGWrapper;
