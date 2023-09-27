import { useContext } from "react";
import { Context } from "../state/Context";
import AddText from "./AddMeters";
import FieldPattern from "./FieldPattern";

const Field = () => {
  const value = useContext(Context);
  const [state] = value;
  const fieldWidth = state.field.coord.valueX * 10;
  const fieldHeight = state.field.coord.valueY * 10;
  const fieldStartPointX = state.BoxWithExercises.valueX * 10;
  const fieldStartPointY = state.BoxWithExercises.valueY * 10;

  return (
    <>
      <FieldPattern />
      <rect
        fill="url(#meter)"
        x={state.BoxWithExercises.valueX * 10}
        y="0"
        width={fieldWidth}
        height={fieldHeight}
      />
      <AddText lenght={state.field.coord.valueX} isWidth={true} />
      <AddText lenght={state.field.coord.valueY} isWidth={false} />
    </>
  );
};
export default Field;
