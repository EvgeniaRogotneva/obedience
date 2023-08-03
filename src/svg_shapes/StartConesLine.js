const StartConesLine = ({ x1, x2, y1, y2, metersFromStartToBariers }) => {
  const strokeDasharray = `${metersFromStartToBariers} 10, 145`;
  return (
    <line
      x1={x1}
      x2={x2}
      y1={y1}
      y2={y2}
      markerEnd="url(#cones)"
      markerStart="url(#start)"
      stroke="black"
      strokeWidth="2"
      strokeDasharray={strokeDasharray}
      strokeLinecap="round"
    />
  );
};

export default StartConesLine;
