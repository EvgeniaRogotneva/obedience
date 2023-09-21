import { useContext, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import { Context } from "../../state/Context";
import FieldRange from "../FieldRange";

const FieldSizeSliders = () => {
  const [state, dispatch] = useContext(Context);
  const [fieldSize, setFieldSize] = useState(false);
  const setFieldSizeX = "setFieldSizeX";
  const setFieldSizeY = "setFieldSizeY";
  const [valueX, setValueX] = useState(50);
  const [valueY, setValueY] = useState(50);

  return (
    <>
      <Col>
        <p>Field Width in meters: </p>
        <FieldRange label="xRange" type={setFieldSizeX} />
      </Col>
      <Col>
        <p>Field Length in meters: </p>
        <FieldRange label="yRange" type={setFieldSizeY} />
      </Col>
    </>
  );
};

export default FieldSizeSliders;
