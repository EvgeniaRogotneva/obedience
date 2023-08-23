import { useContext } from "react";
import "./App.css";
import Field from "./field/Field";
import LeftMenu from "./left_menu/LeftMenu";
import { Context } from "./state/Context";
import Uve from "./svg_exercise/Uve";

function App() {
  const [state] = useContext(Context);
  return (
    <div className="App">
      <h1 className="DogObedienceStewartToolHeader">
        Dog Obedience Stewart Tool
      </h1>
      <LeftMenu />
      <Field>{state.Uve.on && <Uve metersFromStartToBariers={5} />}</Field>

      <p>когда у Уве меняешь одну координату, вторая выставляется в 50</p>
      <p>
        и в окошке с координатами минимальное значение на уве = 10, хотя может
        быть любое
      </p>
      <p>а еще надо всплывающую подсказку сделать на поле с координатами</p>
      <p>при удалении упражнения скидывать данные в полях </p>
      <p>
        при нажатии кнопки Повернуть с пустым полем пофиксить ошибку в консоли,
        поведение ок
      </p>
    </div>
  );
}

export default App;
