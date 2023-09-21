import { useContext } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { Context } from "../../state/Context";
import ChangeClassMenu from "../ChangeClassMenu";
import ChooseClass from "./ChooseClass";
import FieldSizeSliders from "./FieldSizeSliders";

const Header = () => {
  const [state, dispatch] = useContext(Context);

  return (
    <Container className="Header">
      <Row>
        <Col>
          {state.choosedClass === 0 ? <ChooseClass /> : <ChangeClassMenu />}
        </Col>
        <Col>
          <FieldSizeSliders />
        </Col>
      </Row>
    </Container>
  );
};
export default Header;
