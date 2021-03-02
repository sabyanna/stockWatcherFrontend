import React from 'react';
import { Line } from 'react-chartjs-2';

const Chart = ({ timeSeries }) => {
  const labels = timeSeries.map(data => data.date );
  const data = timeSeries.map(data => data.close );

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Close',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data
      }
    ]
  };

  return (
    <>
      <Line
        data={ chartData }
        options={ {
          title: {
            display: true,
            text: 'Stocks over time',
            fontSize: 20
          },
          legend: {
            display: true,
            position: 'right'
          }
        } }
      />
    </>
  );
};

export default Chart;
