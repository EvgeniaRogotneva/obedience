const Line = ({ x1, x2, y1, y2, marker_start }) => {
  return (
    <line
      x1={x1}
      x2={x2}
      y1={y1}
      y2={y2}
      marker-start={marker_start}
      stroke="black"
      stroke-width="7"
    />
  );
};

export default Line;
