const BarriersUve = ({ x1, x2, y1, y2 }) => {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke="black"
      strokeWidth="1"
      strokeLinecap="round"
      strokeDasharray="15 40"
    />
  );
};

export default BarriersUve;
