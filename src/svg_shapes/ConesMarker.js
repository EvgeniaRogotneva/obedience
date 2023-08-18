const ConesMarker = () => {
  return (
    <marker
      id="cones"
      viewBox="0 0 30 30"
      refX="0"
      refY="8"
      markerWidth="20"
      markerHeight="20"
      orient="auto-start-reverse"
      markerUnits="userSpaceOnUse"
    >
      <polygon points="0,12 4,0 8,12" fill="blue" />
      <polygon points="8,12 12,0 16,12" fill="blue" />
      <polygon points="4,16 8,2 12,16" fill="orange" />
    </marker>
  );
};
export default ConesMarker;
