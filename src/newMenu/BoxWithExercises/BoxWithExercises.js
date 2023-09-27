import { useContext } from "react";
import { Context } from "../../state/Context";

const BoxWithExercises = () => {
  const value = useContext(Context);
  const [state] = value;
  const BoxWithExercisesWidth = state.BoxWithExercises.valueX * 10;
  const BoxWithExercisesHeight = state.BoxWithExercises.valueY * 10;
  return (
    <rect
      style={{ strokeWidth: 3, stroke: "blue", fill: "white" }}
      x="0"
      y="0"
      width={BoxWithExercisesWidth}
      height={BoxWithExercisesHeight}
    />
  );
};

export default BoxWithExercises;
