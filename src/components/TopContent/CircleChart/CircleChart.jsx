import { Chart } from "react-chartjs-2";
import { useState } from "react";
import "./CircleChart.css";
import "chart.js/auto";
import { useEffect } from "react";

function CircleChart() {
  const [percentage, setPercentage] = useState("");

  useEffect(() => {
    randomise();
  }, []);

  function randomise() {
    let maxValue = 28;
    setPercentage(Math.round(Math.random() * maxValue));
  }
  const data = {
    labels: [],
    datasets: [
      {
        label: "calls per month",
        data: [percentage, 28 - percentage],
        backgroundColor: ["#f68b15", "#dddddd"],
        borderColor: ["#f68b15", "#dddddd"],
        cutout: "90%",
      },
    ],
  };

  return (
    <>
      <div className="chart-container">
        <p className="chart-text">Calls this month</p>
        <div className="chart-sizing" onClick={randomise}>
          <Chart type="doughnut" data={data} />
        </div>
      </div>
    </>
  );
}

export default CircleChart;
