import Col from "react-bootstrap/esm/Col";
import FieldRange from "../FieldRange";

const FieldSizeSliders = () => {
  const setFieldSizeX = "setFieldSizeX";
  const setFieldSizeY = "setFieldSizeY";

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
