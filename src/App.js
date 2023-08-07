import { useState } from "react";
import "./App.css";
import Field from "./field/Field";
import LeftMenu from "./left_menu/LeftMenu";
function App() {
  const [fieldSize, setFieldSize] = useState({ x: 60, y: 20 });
  return (
    <div className="App">
      <h1 className="DogObedienceStewartToolHeader">
        Dog Obedience Stewart Tool
      </h1>
      <LeftMenu />
      <Field x={fieldSize["x"]} y={fieldSize["y"]} />

      <p>
        следующий шаг - передавать размер поля и координаты для точки старта из
        браузера.
      </p>
      <p> !!!! площадь под конусами - 0,4-0,5 кв м</p>
      <p>а еще надо всплывающую подсказку сделать на поле с координатами</p>
      <p></p>
    </div>
  );
}

export default App;
