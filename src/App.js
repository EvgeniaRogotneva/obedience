import "./App.css";
import Field from "./field/Field";
import LeftMenu from "./left_menu/LeftMenu";
import Uve from "./svg_exercise/Uve";

function App() {
  return (
    <div className="App">
      <h1 className="DogObedienceStewartToolHeader">
        Dog Obedience Stewart Tool
      </h1>
      <LeftMenu />
      <Field>
        <Uve metersFromStartToBariers={5} />
      </Field>

      <p> !!!! площадь под конусами - 0,4-0,5 кв м</p>
      <p>когда у Уве меняешь одну координату, вторая выставляется в 50</p>
      <p>
        и в окошке с координатами минимальное значение на уве = 10, хотя может
        быть любое
      </p>
      <p>добавить нормальные стили на всю страницу</p>
      <p>а еще надо всплывающую подсказку сделать на поле с координатами</p>
      <p></p>
    </div>
  );
}

export default App;
