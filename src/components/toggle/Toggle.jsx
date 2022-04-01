import "./toggle.css";
import One from "../../img/One.jpg";
import Two from "../../img/Two.jpg";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });

  };
  return (
    <div className="t">
      <img src={One} alt="" className="t-icon" />
      <img src={Two} alt="" className="t-icon" />
      <div
        className="t-button"
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 0 : 25 }}
      ></div>
    </div>
  );
};

export default Toggle;
