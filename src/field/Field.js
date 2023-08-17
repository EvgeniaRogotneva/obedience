import { useContext } from "react";
import { Context } from "../state/Context";
import Uve from "../svg_exercise/Uve";
import AddText from "./AddMeters";
import FieldPattern from "./FieldPattern";

const Field = () => {
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
      <Uve
        startX={state.Uve.coord.valueX}
        startY={state.Uve.coord.valueY}
        metersFromStartToBariers={5}
      />
    </svg>
  );
};
export default Field;
