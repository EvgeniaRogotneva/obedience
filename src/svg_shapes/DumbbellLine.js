const DumbbellLine = ({ x, y1, y2 }) => {
  return (
    <line
      x1={x}
      y1={y1}
      x2={x}
      y2={y2}
      stroke="black"
      strokeWidth="1"
      markerEnd="url(#dumbbell)"
      markerStart="url(#dumbbell)"
    />
  );
};

export default DumbbellLine;
