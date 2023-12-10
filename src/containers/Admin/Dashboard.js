import React from "react";
import helloAdmin from "../../assets/helloAdmin.png";
import Widget from "../../components/widget/Widget";
import LineChart from "../../components/charts/LineChart";
import Card from "../../components/card";
import { FaDollarSign } from 'react-icons/fa';

const earningsText = "$340.5";
const earningsLabel = "Earnings";
export const lineChartDataTotalSpent = [
  {
    name: "Revenue",
    data: [50, 64, 48, 66, 49, 68],
    color: "#4318FF",
  },
  {
    name: "Profit",
    data: [30, 40, 24, 46, 20, 46],
    color: "#6AD2FF",
  },
];

export const lineChartOptionsTotalSpent = {
  legend: {
    show: false,
  },

  theme: {
    mode: "light",
  },
  chart: {
    type: "line",

    toolbar: {
      show: false,
    },
  },

  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },

  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: undefined,
      backgroundColor: "#000000",
    },
    theme: "dark",
    x: {
      format: "dd/MM/yy HH:mm",
    },
  },
  grid: {
    show: false,
  },
  xaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      style: {
        colors: "#A3AED0",
        fontSize: "12px",
        fontWeight: "500",
      },
    },
    type: "text",
    range: undefined,
    categories: ["SEP", "OCT", "NOV", "DEC", "JAN", "FEB"],
  },

  yaxis: {
    show: false,
  },
};

function CustomerList() {
  return (
    <div>
      <img src={helloAdmin} alt="Hello Admin" className="w-full" />
      <div className="mt-3 mx-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        {[...Array(3)].map((_, index) => (
          <Widget
            key={index}
            icon={
              <div className="rounded-full bg-darkPrimary p-1 border-2 border-darkPrimary">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Money_Flat_Icon_GIF_Animation.gif"
                  alt="money"
                  className="h-10 w-10 rounded-full"
                />
              </div>
            }
            title={<span style={{ color: "#000" }}>{earningsLabel}</span>}
            subtitle={<span style={{ color: "#000" }}>{earningsText}</span>}
          />
        ))}

<Card extra="!p-[20px] text-center">
      <div className="flex h-full w-full flex-row justify-between sm:flex-wrap lg:flex-nowrap 2xl:overflow-hidden">
        <div className="flex flex-col">
          <p className="mt-[20px] text-3xl font-bold text-navy-700 dark:text-white">
            $37.5K
          </p>
          <div className="flex flex-col items-start">
  <p className="mt-2 text-sm text-gray-600">Total Spent</p>
  <div className="flex flex-row items-center justify-center">
    <FaDollarSign className="font-medium text-green-500" />
    <p className="text-sm font-bold text-green-500"> +2.45% </p>
  </div>
</div>
        </div>
        <div className="h-full w-full">
          <LineChart
            options={lineChartOptionsTotalSpent}
            series={lineChartDataTotalSpent}
          />
        </div>
      </div>
    </Card>
      </div>
    </div>
  );
}

export default CustomerList;
