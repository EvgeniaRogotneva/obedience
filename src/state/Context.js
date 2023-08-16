import { createContext, useReducer } from "react";
export const Context = createContext();
const initialState = {
  fieldSize: { valueX: 50, valueY: 50, min: 10, max: 100 },
  Uve: { start: { x: 50, y: 50 }, rotation: 0 },
};

function reducer(state, action) {
  switch (action.type) {
    case "setFieldSize":
      return {
        ...state,
        fieldSize: action.payload.fieldSize,
      };
    case "setUveData":
      return {
        ...state,
        Uve: action.payload.Uve,
      };
    default:
      return state;
  }
}

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};
export default Provider;
