import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import { Chart as Ct } from "chart.js/auto";
import CovertDate from "./CovertDate";
import { Select } from "flowbite-react";
const Chart = ({ price ,setDay , changeDay }) => {
  Ct.register(CategoryScale);

  const chartData = {
    labels: price?.map((pt) => CovertDate(pt[0])),
    datasets: [
      {
        label : "Price",
        data: price?.map((pt) => new Date(pt[1])),
        borderColor: "#3a80e9",
        backgroundColor: "rgba(58,128,233,0.1)",
        fill: true,
        tension: 0.25,
        borderWidth: 1,
        pointRadius: 0,
      },
    ],
  };

  //     const options = {
  //         options: {
  //             responsive: true,
  //             interaction: {
  //               mode: 'index',
  //               intersect: false,
  //             },

  //     }
  // }

  return (
    <div>

      <div className=" flex items-center gap-3 mb-3">
        <div className=" text-white text-opacity-75 ">Price Change In</div>
        <Select className=" text-black " onChange={(e)=>{
          setDay(e.target.value);
          changeDay()
        }}>
          <option value={7} className=""> 7days</option>
          <option  value={30}> 30days</option>
          <option  value={60}> 60days</option>
          <option  value={90}> 90days</option>
          <option  value={120}> 120days</option>
          <option  value={365}> 1year</option>
        </Select>
         
      </div>
      <Line data={chartData} />
    </div>
  );
};

export default Chart;
