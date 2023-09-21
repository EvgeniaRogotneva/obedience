import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Context } from "../state/Context";

const ChangeClassMenu = () => {
  const [state, dispatch] = useContext(Context);
  const setChosenClass = ({ chosenClass }) => {
    dispatch({
      type: "setChosenClass",
      payload: { chosenClass: chosenClass },
    });
  };

  return (
    <Container>
      <Row>
        <Col className="text-primary ">
          <h4 className="text-primary">
            Choosed Class: {state.class.chosenClass}
          </h4>
        </Col>
        <Col>
          <Button
            className="w-10 flex-fill btn-sm"
            variant="outline-primary"
            onClick={() => {
              setChosenClass({ chosenClass: 0 });
            }}
          >
            Change class
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ChangeClassMenu;
