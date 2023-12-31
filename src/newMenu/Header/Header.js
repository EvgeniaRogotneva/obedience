import { useContext, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { BsArrowDownUp } from "react-icons/bs";
import { Context } from "../../state/Context";
import ChangeClassMenu from "../ChangeClassMenu";
import ChooseClass from "./ChooseClass";
import FieldSizeSliders from "./FieldSizeSliders";

const Header = () => {
  const [state, dispatch] = useContext(Context);
  const [hideHeader, setHideHeader] = useState(false);

  const response = !hideHeader ? (
    <Container className="Header">
      <Row>
        <Col>
          {state.class.chosenClass === 0 ? (
            <ChooseClass />
          ) : (
            <ChangeClassMenu />
          )}
        </Col>
        <Col>
          <FieldSizeSliders />
        </Col>
        <Col xs={1}>
          <Button
            variant="outline-primary"
            onClick={() => setHideHeader(!hideHeader)}
          >
            {" "}
            Hide
            <BsArrowDownUp />
          </Button>
        </Col>
      </Row>
    </Container>
  ) : (
    <Container className="Header">
      <Row>
        <Col className="HideHeaderArrowCol">
          <Button
            className="HideHeaderArrowCol"
            variant="outline-primary"
            size="lg"
            onClick={() => setHideHeader(!hideHeader)}
          >
            <BsArrowDownUp />
            <h6>Choose obedience class & change field size</h6>
            <BsArrowDownUp />
          </Button>
        </Col>
      </Row>
    </Container>
  );

  return response;
};
export default Header;
