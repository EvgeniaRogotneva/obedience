import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Field from "../../field/Field";
import BodySVGWrapper from "../BodySVGWrapper/BodySVGWrapper";
import BoxWithExercises from "../BoxWithExercises/BoxWithExercises";

const Body = () => {
  return (
    <Container>
      <Row>
        {/* <Col className="background-primary">
          <ExerciseIcons />
        </Col> */}
        <Col>
          <BodySVGWrapper>
            <BoxWithExercises />
            <Field />
          </BodySVGWrapper>
        </Col>
      </Row>
    </Container>
  );
};
export default Body;
