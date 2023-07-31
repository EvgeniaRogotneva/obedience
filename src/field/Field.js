import AddText from "./AddMeters";
const Field = ({ x, y }) => {
  const fieldWidth = x * 10;
  const fieldHeight = y * 10;
  const viewBox = `0 0 ${fieldWidth} ${fieldHeight}`;

  return (
    <svg
      id="Field"
      width={fieldWidth}
      height={fieldHeight}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
    >
      <pattern id="meter" width="10" height="10" patternUnits="userSpaceOnUse">
        <line x1="0" y1="0" x2="0" y2="10" stroke="blue" />
        <line x1="0" y1="0" x2="10" y2="0" stroke="blue" />
      </pattern>
      <rect
        fill="url(#meter)"
        x="0"
        y="0"
        width={fieldWidth}
        height={fieldHeight}
      />
      <AddText lenght={x} isWidth={true} />
      <AddText lenght={y} isWidth={false} />
    </svg>
  );
};
export default Field;
