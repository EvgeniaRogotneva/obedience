import Col from "react-bootstrap/esm/Col";
import FieldRange from "../FieldRange";
import "./Header.css";

const FieldSizeSliders = () => {
  const setFieldSizeX = "setFieldSizeX";
  const setFieldSizeY = "setFieldSizeY";

  return (
    <>
      <Col className="FieldRangeCol">
        <p>Width:</p>
        <FieldRange label="xRange" type={setFieldSizeX} />
      </Col>
      <Col className="FieldRangeCol">
        <p>Length: </p>
        <FieldRange label="yRange" type={setFieldSizeY} />
      </Col>
    </>
  );
};

export default FieldSizeSliders;
