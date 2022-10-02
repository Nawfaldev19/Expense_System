import React from "react";
import "./Chart.css";

import ChartBar from "./ChartBar";

const Chart = (props) => {

    const dataPointsValues=props.dataPoints.map(dataPoints=> dataPoints.value);
    const totalMaximum=Math.max(...dataPointsValues);// spread operator for spreading all the array elements out and make them indivisual elements

    return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar 
        key={dataPoint.label}
        value={dataPoint.value} 
        maxVal={totalMaximum}
        label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
