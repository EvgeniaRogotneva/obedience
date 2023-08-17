import "./App.css";
import Field from "./field/Field";
import LeftMenu from "./left_menu/LeftMenu";

function App() {
  return (
    <div className="App">
      <h1 className="DogObedienceStewartToolHeader">
        Dog Obedience Stewart Tool
      </h1>
      <LeftMenu />
      <Field />

      <p> !!!! площадь под конусами - 0,4-0,5 кв м</p>
      <p>добавить нормальные стили на всю страницу</p>
      <p>а еще надо всплывающую подсказку сделать на поле с координатами</p>
      <p></p>
    </div>
  );
}

export default App;
