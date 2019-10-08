import React from "react";
import { Doughnut } from "react-chartjs-2";


export const WasteDonut = ({ data }) => {
  const [chartValue, setChartValue] = React.useState(data.full);

  const handleChartValue = () => {
      console.log(chartValue);
    if (chartValue < 100){
    setChartValue(parseInt(chartValue) + 5);}
    else {
      setChartValue(0);
    }
  };

  const handleKeyPress = (event) => {
    if(event.charCode === 'a'){
      console.log("adfasd")
      handleChartValue();
    }
  }

  const chartData = {
    datasets: [
      {
        data: [chartValue, (chartValue - 100) * -1],
        backgroundColor: [chartValue >=80 ? "red" : data.color]
      }
    ],
    labels: [data.label]
  };
  return (
            <Doughnut data={chartData} width={0.5} onElementsClick={handleChartValue} onKeyPress={handleKeyPress} />
  );
};
