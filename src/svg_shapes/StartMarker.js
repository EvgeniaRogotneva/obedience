const StartMarker = () => {
  return (
    <marker
      id="start"
      viewBox="0 0 10 10"
      refX="5"
      refY="5"
      markerWidth="10"
      markerHeight="10"
      orient="auto-start-reverse"
      markerUnits="userSpaceOnUse"
    >
      <circle r="4" cx="5" cy="5" stroke="red" fill="yellow" />
    </marker>
  );
};

export default StartMarker;
