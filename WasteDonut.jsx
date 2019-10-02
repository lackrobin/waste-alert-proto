import React from "react";
import { Doughnut } from "react-chartjs-2";


export const WasteDonut = ({ data }) => {
  const [expanded, setExpanded] = React.useState(false);
  const [chartValue, setChartValue] = React.useState(data.full);

  const handleChartValue = () => {
      console.log(chartValue);
    setChartValue(parseInt(chartValue) + 1);
  };

  const chartData = {
    datasets: [
      {
        data: [chartValue, (chartValue - 100) * -1],
        backgroundColor: [data.color]
      }
    ],
    labels: [data.label]
  };
  return (
            <Doughnut data={chartData} width={0.5} onElementsClick={handleChartValue} />
  );
};
