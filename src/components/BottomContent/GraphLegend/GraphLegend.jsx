import "./GraphLegend.css";

function GraphLegend(props) {
  return (
    <div className="legend">
      <div className="square" style={{ backgroundColor: props.color }}></div>
      <div className="title">{props.legend}</div>
    </div>
  );
}

export default GraphLegend;
