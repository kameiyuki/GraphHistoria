import React from 'react';
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables)

const Graph = (props) => {
  var EventLength=Object.keys(props.Event).length
  
  //const labels=[]
  const GraphData=[]

  for(var i=0;i<EventLength;i++){
    //labels.push(props.Event[i]["age"])
    GraphData.push({
      x:props.Event[i]["age"],
      y:props.Event[i]["happiness"]
    })
  }

  const options= {
    scales:{
      y:{
        min:-100,
        max:100,
        ticks:{
          stepSize: 50
        }
      },
      x:{
        min:0,
        max:49,
        type: 'linear'      
      }
    },
    plugins: {
      legend: {
        position:"bottom",
        labels: {
          padding: 10,
          font: {
            size: 20,
          },
        },
      },
    },
  };

  const data = {
    //labels: labels,
    datasets: [
      {
        label: "人生",
        data: GraphData ,
        borderColor: "rgb(75, 192, 192)",
      },
    ],
  }


  return (
    <Line  data={data} options={options}/>
  )
}
export default Graph;
