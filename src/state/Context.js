import { createContext, useReducer } from "react";
export const Context = createContext();
const initialState = {
  field: { coord: { valueX: 50, valueY: 50 }, limit: { min: 10, max: 100 } },
  Uve: { coord: { valueX: 10, valueY: 10 }, rotation: 0 },
};

function reducer(state, action) {
  switch (action.type) {
    case "setFieldSize":
      return {
        ...state,
        field: { ...state.field, coord: action.payload.coord },
      };
    case "setUveData":
      return {
        ...state,
        Uve: { ...state.Uve, coord: action.payload.coord },
      };
    case "setUveRoration":
      return {
        ...state,
        Uve: { ...state.Uve, rotation: action.payload.rotation },
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
