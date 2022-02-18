import "./ProgressBar.css";
import { useEffect, useState } from "react";
import colors from "../../../utils/colors";

function ProgressBar(props) {
  const [progress, setProgress] = useState([]);

  useEffect(() => {
    randomise();
  }, []);

  function randomise() {
    let maxValue = 100;
    const values = [];

    for (let i = 0; i < 5; i++) {
      let current = Math.round(Math.random() * maxValue);
      maxValue -= current;
      values.push(current);
    }
    values.push(maxValue);
    setProgress(values);
  }

  return (
    <div className="progress-container" onClick={randomise}>
      <p className="progress-title">{props.title}</p>
      <div className="outer-bar">
        {progress.map((bar, index) => {
          return (
            <div
              className="inner-bar"
              style={{ backgroundColor: colors[index], width: `${bar}%` }}
              key={index}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default ProgressBar;
