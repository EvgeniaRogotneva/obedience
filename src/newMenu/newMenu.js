import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Context } from "../state/Context";

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
        <h1 className="text-primary">Choose obedience class</h1>

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
      <Container>
        <Row>
          Choosed Class:{" "}
          {() => {
            return state.choosedClass;
          }}
          <Button
            className="list-group-item list-group-item-action"
            onClick={() => {
              setChoosedClass({ choosedClass: 0 });
            }}
          >
            Change class
          </Button>
        </Row>
        <Row></Row>
      </Container>
    );
  } else if (state.choosedClass === 2) {
  } else if (state.choosedClass === 3) {
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
