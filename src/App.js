import "./App.css";
import Field from "./field/Field";
function App() {
  return (
    <div className="App">
      <h1>ай да я, ай да молодец, поле генерится, уве рисуется</h1>
      <p>
        следующий шаг - взять и сделать Уве и поле с передаваемыми параметрами
        координат и размеров. !!!! площадь под конусами - 0,4-0,5 кв м
      </p>
      <Field x={50} y={50} />
    </div>
  );
}

export default App;
