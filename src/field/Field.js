import { useContext } from "react";
import { Context } from "../state/Context";
import AddText from "./AddMeters";
import FieldPattern from "./FieldPattern";

const Field = ({ children }) => {
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
      <FieldPattern />
      <rect
        fill="url(#meter)"
        x="0"
        y="0"
        width={fieldWidth}
        height={fieldHeight}
      />
      <AddText lenght={state.field.coord.valueX} isWidth={true} />
      <AddText lenght={state.field.coord.valueY} isWidth={false} />
      {children}
    </svg>
  );
};
export default Field;
