import GraphLegend from "../BottomContent/GraphLegend/GraphLegend";
import "./ContentContainer.css";
import colors from "../../utils/colors";
import CallDetails from "../TopContent/CallDetails/CallDetails";
import ProgressBar from "../BottomContent/ProgressBar/ProgressBar";

const legendName = [
  "Adherance",
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
      <section className="top-container">
        <h2>Overview</h2>
        <CallDetails />
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
        {titles.map((name, index) => {
          return <ProgressBar title={name} key={index} />;
        })}
      </section>
    </main>
  );
}

export default ContentContainer;
