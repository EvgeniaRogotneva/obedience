import React from "react";
const AddText = ({ lenght, isWidth }) => {
  function range(lenght) {
    const myArray = [];
    for (let j = 0; j < lenght; j += 10) {
      if (j !== 0) myArray.push(j);
    }

    return myArray;
  }

  const meters = range(lenght);

  return (
    <>
      {meters.map((meter) => (
        <>
          {console.log(`meter ${meter}, isWidth ${isWidth}`)}
          <text
            x={isWidth ? meter * 10 : "0 "}
            y={isWidth ? "10" : meter * 10 - 2}
            fontSize={10}
            key={() => {
              let key = isWidth ? `${meter}x` : `${meter}y`;
              console.log(key);
            }}
          >
            {meter}m
          </text>
          <line
            x1={isWidth ? meter * 10 : "0"}
            x2={isWidth ? meter * 10 : "20 "}
            y1={isWidth ? "0" : meter * 10}
            y2={isWidth ? "20" : meter * 10}
            stroke="blue"
            strokeWidth="2"
          />
        </>
      ))}
    </>
  );
};
export default AddText;
