import { createContext, useReducer } from "react";
export const Context = createContext();
const initialState = {
  field: { coord: { valueX: 50, valueY: 50 }, limit: { min: 10, max: 100 } },
  Uve: { on: false, coord: { valueX: 10, valueY: 10 }, rotation: 0 },
  choosedClass: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "setFieldSizeX":
      let newState = state;
      newState.field.coord.valueX = action.payload.value;
      return newState;
    case "setFieldSizeY":
      return {
        ...state,
        field: {
          ...state.field,
          coord: { valueY: action.payload.value, ...state.field.coord },
        },
      };
    case "setFieldSize":
      return {
        ...state,
        field: { ...state.field, coord: action.payload.coord },
      };
    case "setUveData":
      return {
        ...state,
        Uve: { ...state.Uve, coord: action.payload.coord, on: true },
      };
    case "setUveRoration":
      return {
        ...state,
        Uve: { ...state.Uve, rotation: action.payload.rotation },
      };
    case "switchOffUve":
      return {
        ...state,
        Uve: { ...state.Uve, on: false },
      };
    case "setChoosedClass":
      return {
        ...state,
        choosedClass: action.payload.choosedClass,
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
