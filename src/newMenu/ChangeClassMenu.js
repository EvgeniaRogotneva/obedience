import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Context } from "../state/Context";
import FieldRange from "./FieldRange";

const ChangeClassMenu = ({ children }) => {
  const [state, dispatch] = useContext(Context);
  const [fieldSize, setFieldSize] = useState(false);
  const setChoosedClass = ({ choosedClass }) => {
    dispatch({
      type: "setChoosedClass",
      payload: { choosedClass: choosedClass },
    });
  };

  return (
    <Container>
      <Row>
        <Col className="text-primary " xs={2}>
          <p>Choosed Class: {state.choosedClass}</p>
        </Col>
        <Col xs={10}>
          <Button
            className="w-10 flex-fill btn-sm"
            variant="outline-primary"
            onClick={() => {
              setChoosedClass({ choosedClass: 0 });
            }}
          >
            Change class
          </Button>
        </Col>
        <Col>
          <p>Field Width in meters: </p>
          <FieldRange label="xRange" />
        </Col>
        <Col>
          <p>Field Length in meters: </p>
          <FieldRange label="yRange" />
        </Col>
      </Row>
      {children}
    </Container>
  );
};

export default ChangeClassMenu;
