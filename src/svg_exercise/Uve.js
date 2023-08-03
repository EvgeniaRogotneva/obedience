import FieldPattern from "../field/FieldPattern";
import ConesMarker from "../svg_shapes/ConesMarker";
import DumbbellMarker from "../svg_shapes/DumbbellMarker";
import StartMarker from "../svg_shapes/StartMarker";
const Uve = ({ startX, startY, metersFromStartToBariiers }) => {
  const parameters = {
    startX: startX * 10,
    startY: startY * 10,
    metersFromStartToBariiers: metersFromStartToBariiers * 10,
  };

  return (
    <g transform="rotate(90 90, 90)">
      <defs>
        <FieldPattern />
        <StartMarker />
        <DumbbellMarker />
        <ConesMarker />
      </defs>
      <line
        x1="20"
        x2="220"
        y1="125"
        y2="125"
        markerEnd="url(#cones)"
        markerStart="url(#start)"
        stroke="black"
        strokeWidth="2"
        strokeDasharray="45 10 145"
        strokeLinecap="round"
      />
      <line
        x1="70"
        y1="90"
        x2="70"
        y2="160"
        stroke="black"
        strokeWidth="1"
        strokeLinecap="round"
        strokeDasharray="15 40"
      />
      <line
        x1="130"
        y1="95"
        x2="130"
        y2="100"
        stroke="black"
        strokeWidth="1"
        strokeLinecap="round"
        strokeDasharray="5 50"
        markerEnd="url(#dumbbell)"
        markerStart="url(#dumbbell)"
      />
      <line
        x1="130"
        y1="150"
        x2="130"
        y2="155"
        stroke="black"
        strokeWidth="1"
        strokeLinecap="round"
        strokeDasharray="5 50"
        markerEnd="url(#dumbbell)"
        markerStart="url(#dumbbell)"
      />
    </g>
  );
};

export default Uve;
