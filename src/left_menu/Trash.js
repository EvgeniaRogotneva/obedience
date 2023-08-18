import { FaTrashAlt } from "react-icons/fa";

import { useContext } from "react";
import { Context } from "../state/Context";
import "./leftMenu.css";

const Trash = ({ type }) => {
  const [state, dispatch] = useContext(Context);

  const switchOfExercise = ({ type }) => {
    dispatch({
      type: type,
      payload: { on: false },
    });
  };

  return (
    <FaTrashAlt
      className="switch-of-exrecise"
      color="red"
      onClick={() => {
        switchOfExercise({ type });
      }}
    />
  );
};
export default Trash;
