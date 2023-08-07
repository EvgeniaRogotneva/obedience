import Uve from "../svg_exercise/Uve";
import AddText from "./AddMeters";
import FieldPattern from "./FieldPattern";
const Field = ({ x, y }) => {
  const fieldWidth = x * 10;
  const fieldHeight = y * 10;
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
      <AddText lenght={x} isWidth={true} />
      <AddText lenght={y} isWidth={false} />
      <Uve startX={10} startY={10} metersFromStartToBariers={5} />
    </svg>
  );
};
export default Field;
