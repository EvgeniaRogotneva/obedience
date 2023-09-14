import { useContext } from "react";
import { Context } from "../state/Context";

const DnDExercisesMenu = ({ children, exercise }) => {
  const value = useContext(Context);
  const [state] = value;

  const exerciseWidth = state.field.coord.valueX * 10;
  const exerciseHeight = state.field.coord.valueY * 10;
  const viewBox = `0 0 ${exerciseWidth} ${exerciseHeight}`;

  return (
    <svg
      className="Field"
      width={exerciseWidth}
      height={exerciseHeight}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        fill="url(#meter)"
        x="0"
        y="0"
        width={exerciseWidth}
        height={exerciseHeight}
      />
      {children}
    </svg>
  );
};
export default DnDExercisesMenu;
