import { useContext } from "react";
import { Context } from "../state/Context";
import Uve from "../svg_exercise/Uve";
import AddText from "./AddMeters";
import FieldPattern from "./FieldPattern";

const Field = ({ x, y }) => {
  const value = useContext(Context);
  const [state] = value;
  const fieldWidth = x * 10;
  const fieldHeight = y * 10;
  const viewBox = `0 0 ${fieldWidth} ${fieldHeight}`;
  console.log(` X ${state.Uve.coord.valueX}`);
  console.log(` Y ${state.Uve.coord.valueY}`);

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
      <AddText lenght={x} isWidth={true} />
      <AddText lenght={y} isWidth={false} />
      <Uve
        startX={state.Uve.coord.valueX}
        startY={state.Uve.coord.valueY}
        metersFromStartToBariers={5}
      />
    </svg>
  );
};
export default Field;
