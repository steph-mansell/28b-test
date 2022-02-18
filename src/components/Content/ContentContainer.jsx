import GraphLegend from "../BottomContent/GraphLegend/GraphLegend";
import "./ContentContainer.css";
import colors from "../../utils/colors";
import CallDetails from "../TopContent/CallDetails/CallDetails";
import ProgressBar from "../BottomContent/ProgressBar/ProgressBar";
import CircleChart from "../TopContent/CircleChart/CircleChart";

const legendName = [
  "Adherence",
  "Combination Therapy",
  "Dosing",
  "Guidelines",
  "Safety",
  "Other",
];

const titles = ["Avg. all", "Cautious", "Complacent", "Confident"];

function ContentContainer() {
  return (
    <main className="main">
      <h2 className="overview">Overview</h2>
      <section className="top-container">
        <CallDetails />
        <CircleChart />
      </section>
      <section className="bottom-container">
        <h5>Detailing topic breakdown</h5>
        <div className="legend-container">
          {colors.map((x, index) => {
            return (
              <GraphLegend color={x} legend={legendName[index]} key={index} />
            );
          })}
        </div>
        <div className="progress-container">
          {titles.map((name, index) => {
            return <ProgressBar title={name} key={index} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default ContentContainer;
