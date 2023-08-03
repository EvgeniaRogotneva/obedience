const ConesMarker = () => {
  return (
    <marker
      id="cones"
      viewBox="0 0 30 30"
      refX="0"
      refY="15"
      markerWidth="20"
      markerHeight="20"
      orient="auto-start-reverse"
      markerUnits="userSpaceOnUse"
    >
      <polygon points="0,15 15,15 7,0" fill="purple" />
      <polygon points="15,15 30,15 22,0" fill="blue" />
      <polygon points="7.5,30 22.5,30 15,15" fill="orange" />
    </marker>
  );
};
export default ConesMarker;
