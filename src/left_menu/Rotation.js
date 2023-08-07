import { PiArrowClockwiseBold } from "react-icons/pi";
import "./leftMenu.css";
const Rotation = () => {
  return (
    <>
      Degree: <input type="number" label="Degree" min={0} max={360} />
      <PiArrowClockwiseBold className="rotate-exercise-arrow" />
    </>
  );
};
export default Rotation;
