import { useContext, useState } from "react";
import RangeSlider from "react-bootstrap-range-slider";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { Context } from "../state/Context";

function FieldRange({ label }) {
  const [value, setValue] = useState(50);
  const [state, dispatch] = useContext(Context);

  const setChoosedClass = ({ choosedClass }) => {
    dispatch({
      type: "setChoosedClass",
      payload: { choosedClass: choosedClass },
    });
  };

  const [inputX, setInputX] = useState(50);
  const [inputY, setInputY] = useState(50);

  const setCoord = ({ type }) => {
    dispatch({
      type: type,
      payload: { coord: { valueX: inputX, valueY: inputY } },
    });
  };

  return (
    <Form>
      <Form.Group as={Row}>
        <Col xs="9">
          <RangeSlider
            value={value}
            onChange={(e) => setValue(e.target.value)}
            min={10}
            max={100}
          />
        </Col>
        <Col xs="3">
          <Form.Control value={value} min={10} max={100} />
        </Col>
      </Form.Group>
    </Form>
  );
}

export default FieldRange;
