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

  if (state.choosedClass === 0) {
    return <ChooseClass />;
  }
  if (state.choosedClass === 1) {
    return (
      <ChangeClassMenu>
        <Row>Children1</Row>
      </ChangeClassMenu>
    );
  } else if (state.choosedClass === 2) {
    return <ChangeClassMenu>Children2</ChangeClassMenu>;
  } else if (state.choosedClass === 3) {
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

{
  /* <Router>
        <div class="conteiner bg-primary text-white px-2 py-1 rounded-2 ">
          {" "}
          Choose class:
          <NavLink to="/" class="bg-info d-inline rounded-2 px-2 py-1 m-auto">
            1
          </NavLink>
          <NavLink to="/" class="bg-info d-inline rounded-2 px-2 py-1 m-auto">
            2
          </NavLink>
          <NavLink to="/" class="bg-info d-inline rounded-2 px-2 py-1 m-auto">
            3
          </NavLink>
        </div>
      </Router> */
}
