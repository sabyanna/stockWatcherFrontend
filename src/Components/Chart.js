import React, { useContext } from 'react';
import { Line } from 'react-chartjs-2';
import { SymbloDataContext } from '../Contexts/SymbloDataContext'

const Chart = () => {
  const symbolData = useContext(SymbloDataContext)

  const timeSeries = symbolData['Time Series (Daily)'];
  const metaData = symbolData['Meta Data'];
  
  const labels = Object.entries(timeSeries).map((key, value) => key[0]).reverse();
  const data = Object.entries(timeSeries).map((key, value) => key[1]['4. close']).reverse();

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
        options={{
          title:{
            display:true,
            text:'Stocks over time',
            fontSize:20
          },
          legend:{
            display:true,
            position:'right'
          }
        }}
      />
    </>
  )
}

export default Chart
