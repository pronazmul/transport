
import React, { useEffect, useState } from "react";

import ChartLine from '../components/ChartLine'

const labels = ["January", "February", "March", "April", "May", "June"];

export default function Home({ isConnected }) {
  const [data, setData] = useState([
    { _id: "trey", DATE: ["2023-10-19"], PRICE: ["100"] },
  ]);


  useEffect(() => {

    (async () => {
      const results = await fetch("api/list");
      const resultsJson = await results.json();
 
      setData(resultsJson);
    })();
  }, []);

  let kim = data[0]["DATE"];
  let him = data[0]["PRICE"];

  const pata = {
    labels: kim,
    datasets: [
      {
        label:
          "Producer Price Index by Industry: Deep Sea Freight Transportation",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(0,0,255)",
        data: him,
      },
    ],
  };

  return (
    <div className="h-96">
      <ChartLine data={pata} />
      
    </div>
  );
}
