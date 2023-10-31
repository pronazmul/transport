// ./components/LineChart.js

import React from "react";
import { Line } from "react-chartjs-2";
import { useState, useEffect } from "react";
import clientPromise from '../lib/mongodb';



const labels = ["January", "February", "March", "April", "May", "June"];

const LineChart = ({isConnected}) => {
    
    // data[1]['PRICE']
    // data[1]['DATE']


    
const [data, setData] = useState([{_id:'trey', DATE:['2023-10-19'], PRICE:['100']}]);

  useEffect(() => {
    (async () => {
      const results = await fetch("api/list");
      const resultsJson = await results.json();
      setData(resultsJson);
    })();
  }, []);

let kim = data[0]['DATE']
let him = data[0]['PRICE']

  const pata = {
    labels: kim,
    datasets: [
      {
        label: "Producer Price Index by Industry: Deep Sea Freight Transportation",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(0,0,255)",
        data: him,
      },
    ],
    
  };




  return (
    <div className="h-96">
      <Line data={pata} 
                    />
      
    </div>
  );
};

export default LineChart;

export async function getServerSideProps(context){
  try{
    await clientPromise

    return {
      props : {isConnected:true}
    }
  } catch (e){
    console.error(e)
    return{
      props : {isConnected: false}
    }
  }


}