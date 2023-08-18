import { useContext } from "react";
import FieldPattern from "../field/FieldPattern";
import { Context } from "../state/Context";
import BarriersUve from "../svg_shapes/BarriersUve";
import ConesMarker from "../svg_shapes/ConesMarker";
import DumbbellLine from "../svg_shapes/DumbbellLine";
import DumbbellMarker from "../svg_shapes/DumbbellMarker";
import StartConesLine from "../svg_shapes/StartConesLine";
import StartMarker from "../svg_shapes/StartMarker";

const Uve = ({ metersFromStartToBariers }) => {
  const value = useContext(Context);
  const [state] = value;
  const lenghtFromBarriersToCones = 150;
  const lenghtFromMiddleLineToBarrier = 35;
  const lenghtFromBarriersToDumbbell = 60;
  const lenghtFromMiddleLineToDumbbell = 30;
  const lenghtDumbbell = 5;
  const entranceParam = {
    startX: state.Uve.coord.valueX * 10,
    startY: state.Uve.coord.valueY * 10,
    fromStartToBariiers: metersFromStartToBariers * 10,
  };

  const mainLineParam = {
    mainLineX1: entranceParam["startX"],
    mainLineX2:
      entranceParam["startX"] +
      entranceParam["fromStartToBariiers"] +
      lenghtFromBarriersToCones,
    mainLineY1: entranceParam["startY"],
    mainLineY2: entranceParam["startY"],
  };

  const StartToBarriersLenght = {
    5: 45,
    6: 55,
    7: 65,
  };

  const barriersParam = {
    x1: entranceParam["startX"] + entranceParam["fromStartToBariiers"],
    x2: entranceParam["startX"] + entranceParam["fromStartToBariiers"],
    y1: entranceParam["startY"] - lenghtFromMiddleLineToBarrier,
    y2: entranceParam["startY"] + lenghtFromMiddleLineToBarrier,
  };

  const dumbbellParam = {
    x:
      entranceParam["startX"] +
      entranceParam["fromStartToBariiers"] +
      lenghtFromBarriersToDumbbell,
    firstY1: entranceParam["startY"] - lenghtFromMiddleLineToDumbbell,
    firstY2:
      entranceParam["startY"] - lenghtFromMiddleLineToDumbbell + lenghtDumbbell,
    secondY1: entranceParam["startY"] + lenghtFromMiddleLineToDumbbell,
    secondY2:
      entranceParam["startY"] + lenghtFromMiddleLineToDumbbell - lenghtDumbbell,
  };

  const rotation = `rotate(${state.Uve.rotation} ,0, ${state.Uve.coord.valueY})`;
  // const rotation = `rotate(90, 10,10)`;

  console.log(` rotation ${rotation}`);

  return (
    <g transform={rotation}>
      {/* <g transform="rotate(90, 10, 10)"> */}
      <defs>
        <FieldPattern />
        <StartMarker />
        <DumbbellMarker />
        <ConesMarker />
      </defs>
      <StartConesLine
        x1={mainLineParam["mainLineX1"]}
        x2={mainLineParam["mainLineX2"]}
        y1={mainLineParam["mainLineY1"]}
        y2={mainLineParam["mainLineY2"]}
        metersFromStartToBariers={
          StartToBarriersLenght[metersFromStartToBariers]
        }
      />
      <BarriersUve
        x1={barriersParam["x1"]}
        x2={barriersParam["x2"]}
        y1={barriersParam["y1"]}
        y2={barriersParam["y2"]}
      />
      <DumbbellLine
        x={dumbbellParam["x"]}
        y1={dumbbellParam["firstY1"]}
        y2={dumbbellParam["firstY2"]}
      />
      <DumbbellLine
        x={dumbbellParam["x"]}
        y1={dumbbellParam["secondY1"]}
        y2={dumbbellParam["secondY2"]}
      />
    </g>
  );
};

export default Uve;
