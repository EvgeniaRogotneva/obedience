import "./App.css";
import Field from "./field/Field";
function App() {
  return (
    <div className="App">
      <h1>ай да я, ай да молодец, поле генерится, уве рисуется</h1>
      <p>
        следующий шаг - передавать размер поля и координаты для точки старта из
        браузера.
      </p>
      <p> !!!! площадь под конусами - 0,4-0,5 кв м</p>
      <p>а еще надо всплывающую подсказку сделать на поле с координатами</p>
      <Field x={50} y={50} />
    </div>
  );
}

export default App;
