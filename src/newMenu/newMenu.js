import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Field from "../field/Field";
import { Context } from "../state/Context";
import ChangeClassMenu from "./ChangeClassMenu";

const ObdClasses = () => {
  const [state, dispatch] = useContext(Context);

  const setChoosedClass = ({ choosedClass }) => {
    dispatch({
      type: "setChoosedClass",
      payload: { choosedClass: choosedClass },
    });
  };

  if (state.choosedClass === 0) {
    return (
      <Container>
        <h4 className="text-primary">Choose obedience class</h4>

        <ul className="list-group list-group-horizontal-md list-group-flush ">
          <li className="list-group-item">
            <Button
              className="list-group-item list-group-item-action"
              onClick={() => {
                setChoosedClass({ choosedClass: 1 });
              }}
            >
              the 1st
            </Button>
          </li>
          <li className="list-group-item">
            <Button
              className="list-group-item list-group-item-action"
              onClick={() => {
                setChoosedClass({ choosedClass: 2 });
              }}
            >
              the 2nd
            </Button>
          </li>
          <li className="list-group-item">
            <Button
              className="list-group-item list-group-item-action"
              onClick={() => {
                setChoosedClass({ choosedClass: 3 });
              }}
            >
              the 3rd
            </Button>
          </li>
        </ul>
      </Container>
    );
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
              <Button>
                <svg
                  width="50"
                  height="100"
                  viewBox="0 0 40 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="0"
                    x2="100"
                    y1="25"
                    y2="25"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </Button>
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
