import { useContext, useState } from "react";
import RangeSlider from "react-bootstrap-range-slider";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { Context } from "../state/Context";

function FieldRange({ label, type }) {
  const [state, dispatch] = useContext(Context);
  const [value, setValue] = useState(50);

  const setFieldSide = ({ type, value }) => {
    dispatch({
      type: type,
      payload: { value: value },
    });
  };

  const connectFieldSizeEverywhere = (e) => {
    setValue(e.target.value);
    setFieldSide({ type, value });
  };

  return (
    <Form>
      <Form.Group as={Row}>
        <Col xs="9">
          <RangeSlider
            value={value}
            onChange={(e) => connectFieldSizeEverywhere(e)}
            min={state.field.limit.min}
            max={state.field.limit.max}
          />
        </Col>
        <Col xs="3">
          <Form.Control
            value={value}
            min={state.field.limit.min}
            max={state.field.limit.max}
            onChange={(e) => connectFieldSizeEverywhere(e)}
          />
        </Col>
      </Form.Group>
    </Form>
  );
}

export default FieldRange;
