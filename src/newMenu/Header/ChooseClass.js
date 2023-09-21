import { useContext } from "react";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import { Context } from "../../state/Context";

const ChooseClass = () => {
  const [state, dispatch] = useContext(Context);

  const setChoosedClass = ({ choosedClass }) => {
    dispatch({
      type: "setChoosedClass",
      payload: { choosedClass: choosedClass },
    });
  };
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
};

export default ChooseClass;
