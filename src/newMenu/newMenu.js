import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Field from "../field/Field";
import { Context } from "../state/Context";
import ChangeClassMenu from "./ChangeClassMenu";
import ChooseClass from "./Header/ChooseClass";
import "./newMenu.css";

const ObdClasses = () => {
  const [state, dispatch] = useContext(Context);

  if (state.class.chosenClass === 0) {
    return <ChooseClass />;
  }
  if (state.class.chosenClass === 1) {
    return (
      <ChangeClassMenu>
        <Row>Children1</Row>
      </ChangeClassMenu>
    );
  } else if (state.class.chosenClass === 2) {
    return <ChangeClassMenu>Children2</ChangeClassMenu>;
  } else if (state.class.chosenClass === 3) {
    return (
      <ChangeClassMenu>
        <Container className="d-inline">
          <Row>
            <Col xs={2}>
              <h6> This is a menu with exercises</h6>
              <Button>Uve</Button>
              <Button>Complex</Button>
              <Button>Square</Button>
              <Button>Aport</Button>
              <Button>Recall</Button>
              <Button>Heelwork</Button>
              <Button>Positions</Button>
              <Button>Selfcontrol</Button>
              <Button>Viborka</Button>
            </Col>
            <Col>
              <Field />
            </Col>
          </Row>
        </Container>
      </ChangeClassMenu>
    );
  }
};

export default ObdClasses;
