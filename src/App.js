import { useContext } from "react";
import "./App.css";
import Field from "./field/Field";
import LeftMenu from "./left_menu/LeftMenu";
import { Context } from "./state/Context";
import Uve from "./svg_exercise/Uve";

function App() {
  const value = useContext(Context);
  const [state] = value;
  return (
    <div className="App">
      <h1 className="DogObedienceStewartToolHeader">
        Dog Obedience Stewart Tool
      </h1>
      <LeftMenu />
      <Field>
        <Uve
          startX={state.Uve.coord.valueX}
          startY={state.Uve.coord.valueY}
          metersFromStartToBariers={5}
        />
      </Field>

      <p> !!!! площадь под конусами - 0,4-0,5 кв м</p>
      <p>добавить нормальные стили на всю страницу</p>
      <p>а еще надо всплывающую подсказку сделать на поле с координатами</p>
      <p></p>
    </div>
  );
}

export default App;
