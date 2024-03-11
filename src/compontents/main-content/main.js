import React from "react";
import Wallet from "../../assets/wallet.png";
import ChartLayer from "../../assets/pie-chart.png";
import Employee from "../../assets/employee.png";
import Spending from "../../assets/spending.png";
import Threedots from "../../assets/three-dots.png";
import ProfileOne from "../../assets/profile_03.jpeg";
import ProfileTwo from "../../assets/profile_04.jpeg";
import ProfileThree from "../../assets/profile_05.jpeg";
import Calender from "../../assets/calendar-note.png";
import Bell from "../../assets/bell.png";
import Message from "../../assets/comment.png";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import LineChart from "../variable/linechart.js";
import { useState } from "react";
import { Data } from "../variable/data.js";
import BarChart from "../variable/chart.js";
import Popup from "../notification/pop-up.js";

Chart.register(CategoryScale);
export default function Main() {
  const [open, setOpen] = useState(false);

  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "#0C2451",
          "#F97474",
          "#45AD42",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "#45AD42",
        borderWidth: 1,
      },
    ],
  });

  const emailData = [
    {
      img: ProfileOne,
      name: "Hannaga Mohan",
      schedule: "Meeting schedule",
      time: "1.24PM",
    },
    {
      img: ProfileTwo,
      name: "Megna Jack",
      schedule: "Updating on marketing compaign",
      time: "12.32PM",
    },
    {
      img: ProfileThree,
      name: "Ally James",
      schedule: "Updating on marketing compaign",
      time: "4.30PM",
    },
  ];

  return (
    <div className="mble-pd-left flex-col lg:flex-row xl:w-9/12 w-full  xl:flex-1 p-7">
      <header className=" pt-16 md:pt-10 lg:pt-2 flex">
        <h1 className="text-2xl font-semibold ">Welcome back Mahadev!</h1>
        <div className="absolute right-5 md:top-5 lg:top-10 top-1 pt-5 md:pt-0 flex flex-row md:w-2/6 w-23 justify-center items-center gap-x-8 ">
          <img src={Calender} alt="calender" className="w-7"></img>
          <img src={Bell} alt="bell" className="w-7"></img>
          <img src={Message} alt="message" className="w-7"></img>
          <img src={ProfileThree} alt="profile" className="profile-img"></img>
        </div>
        {open ? <Popup /> : null}
      </header>
      <div className="flex flex-wrap-content flex-col md:flex-row gap-x-6 gap-y-6 w-full mt-10">
        <div className="bg-white shadow-xl  w-full w-50 lg:w-1/4 px-8 py-6 rounded">
          <div className="flex justify-between items-center">
            <img src={Wallet} className="w-10" alt="wallet" />
            <img
              src={Threedots}
              className="w-8 threedots"
              alt="threedot"
              onClick={() => setOpen(!open)}
            />
          </div>
          <h2 className="text-xl font-medium pt-8">$143,234</h2>
          <p className="text-lg font-normal pt-5">
            Your Bank <br></br> Balance
          </p>
        </div>
        <div className="bg-white shadow-xl  w-full w-50 lg:w-1/4 p-8 rounded">
          <div className="flex justify-between items-center">
            <img src={ChartLayer} className="w-10" alt="chartlayer" />
            <img src={Threedots} className="w-8" alt="threedot" />
          </div>
          <h2 className="text-xl font-medium pt-8">$143,234</h2>
          <p className="text-lg font-normal pt-5">
            Your Bank <br></br> Balance
          </p>
        </div>
        <div className="bg-white shadow-xl  w-full w-50 lg:w-1/4 p-8 rounded">
          <div className="flex justify-between items-center">
            <img src={Employee} className="w-10" alt="employee" />
            <img src={Threedots} className="w-8" alt="threedot" />
          </div>
          <h2 className="text-xl font-medium pt-8">7</h2>
          <p className="text-lg font-normal pt-5">
            Employee <br></br>working today
          </p>
        </div>
        <div className="bg-white shadow-xl w-full w-50 lg:w-1/4 p-8 rounded">
          <div className="flex justify-between items-center">
            <img src={Spending} className="w-10" alt="spending" />
            <img src={Threedots} className="w-8" alt="threedot" />
          </div>
          <h2 className="text-xl font-medium pt-8">$3,234.00</h2>
          <p className="text-lg font-normal pt-5">
            This week's <br></br> Card spending
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-x-6 gap-y-6 w-full mt-10">
        <div className="flex flex-col md:flex-row lg:flex-col w-full md:gap-x-6 lg:w-3/12 gap-y-6">
          <div className="bg-white shadow-xl md:w-1/2 lg:w-full px-8 py-6 rounded">
            <p className="text-lg font-normal">New Clients</p>
            <div className="flex justify-between items-center pt-6 pb-4">
              <h2 className="text-3xl font-semibold">54</h2>
              <button className="bg-green text-sm py-1 px-3 text-white rounded-md">
                +18.7%
              </button>
            </div>
          </div>
          <div className="bg-white shadow-xl md:w-1/2 lg:w-full px-8 py-6 rounded">
            <p className="text-lg font-normal">Invoices overdue</p>
            <div className="flex justify-between items-center pt-6 pb-4">
              <h2 className="text-3xl font-semibold">6</h2>
              <button className="bg-red text-sm py-1 px-3 text-white rounded-md">
                +2.7%
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row  md:w-full lg:w-9/12 gap-y-6">
          <div className="bg-white  shadow-xl w-full px-8 py-6 rounded">
            <LineChart className="w-full" chartData={chartData} />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row  gap-x-6 w-full mt-10 over-hidden">
        <div className="bg-white shadow-xl w-full p-8 rounded over-tabel">
          <h2 className="text-2xl font-medium pb-6">Recent emails</h2>
          <table class="table-auto border-collapse w-full table">
            {emailData &&
              emailData.map((item, index) => {
                return (
                  <tr className="pb-6 flex w-full" key={index}>
                    <td className="w-1/6 rounded-full">
                      <img
                        src={item.img}
                        className="w-7 profile-img"
                        alt="profile"
                      />
                    </td>
                    <td className="w-2/6">{item.name}</td>
                    <td className="w-2/5">{item.schedule}</td>
                    <td className="w-1/5 text-center">{item.time}</td>
                  </tr>
                );
              })}
          </table>
        </div>
      </div>
      <div className="flex flex-col md:flex-row  gap-x-6 w-full mt-10">
        <div className="bg-white  shadow-xl w-full px-8 py-6 rounded">
          <BarChart className="w-full" chartData={chartData} />
        </div>
      </div>
    </div>
  );
}
