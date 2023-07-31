const Uve = () => {
  return (
    <g transform="rotate(90 90, 90)">
      <defs>
        <pattern
          id="meter"
          width="10"
          height="10"
          patternUnits="userSpaceOnUse"
        >
          <line x1="0" y1="0" x2="0" y2="10" stroke="blue" />
          <line x1="0" y1="0" x2="10" y2="0" stroke="blue" />
        </pattern>
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
        <marker
          id="dumbbell"
          viewBox="0 0 4 4"
          refX="2"
          refY="2"
          markerWidth="4"
          markerHeight="4"
          orient="auto-start-reverse"
          markerUnits="userSpaceOnUse"
        >
          <circle r="1" cx="2" cy="2" fill="black" />
        </marker>
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
