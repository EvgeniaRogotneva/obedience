import "./App.css";
import Field from "./field/Field";
import Uve from "./svg_exercise/Uve";
function App() {
  return (
    <div className="App">
      <h1>так, ну ок, стало лучше, но все равно говно какое-то</h1>
      <p>
        следующий шаг - взять и сделать Уве с передаваемыми параметрами
        координат. И еще размеры по стенкам подписать !!!! площадь под конусами
        - 0,4-0,5 кв м
      </p>
      <Field x={50} y={50} />
      <Uve />
    </div>
  );
}

export default App;
