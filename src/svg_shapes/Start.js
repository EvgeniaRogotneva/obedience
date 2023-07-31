const Start = ({ cx, cy }) => {
  return (
    <>
      <defs>
        <marker
          id="start"
          viewBox="0 0 10 10"
          refX="5"
          refY="5"
          markerWidth="10"
          markerHeight="10"
          orient="auto-start-reverse"
        >
          <circle r="5" cx={cx} cy={cy} stroke="red" fill="yellow" />
          <text x={cx} y={cy} fill="red">
            Start
          </text>
        </marker>
      </defs>
    </>
  );
};

export default Start;
