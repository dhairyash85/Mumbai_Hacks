import React from "react";
import { Line } from "react-chartjs-2";
import { Link } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const lineData = {
    labels: ["1", "5", "10", "15", "20", "25", "30"],
    datasets: [
      {
        label: "Revenue",
        data: [300, 350, 400, 450, 500, 550, 600,650,700,750,800,850,900,950,1000],
        borderColor: "rgba(99, 102, 241, 1)", // Indigo color
        backgroundColor: "rgba(99, 102, 241, 0.2)",
        fill: true,
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
      },
      y: {
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
      },
    },
  };

  return (
    <div className="bg-black text-white min-h-screen p-6 space-y-6">
      {/* Top navigation */}
      <div className="flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100"
        >
          <img
            src="/logo.png" // Update this path to your logo image
            width="32"
            alt="Logo"
            className="w-8"
          />
          <span>Credify Pro</span>
        </Link>
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Revenue */}
        <div className="col-span-2 p-6 bg-gray-800 rounded-lg">
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold">Credits</h2>
            <div className="flex space-x-2">
              <button>Today</button>
              <button>Week</button>
              <button className="text-purple-500">Month</button>
              <button>Range</button>
            </div>
          </div>
          <div className="text-4xl font-bold mt-4">79,675</div>
          <p className="text-green-400">2.4% increase</p>
          <div className="h-64 mt-4">
            <Line data={lineData} options={lineOptions} />
          </div>
        </div>

        {/* Calendar */}
        <div className="p-6 bg-gray-800 rounded-lg">
          <h2 className="text-xl font-semibold">October 2024</h2>
          <div className="mt-4 grid grid-cols-7 gap-2">
            {[...Array(31).keys()].map((day) => (
              <div key={day} className="p-2 bg-gray-700 rounded-lg text-center">
                {day + 1}
              </div>
            ))}
          </div>
          <div className="text-xl mt-4">$18,434</div>
        </div>

        {/* Installs */}
        <div className="p-6 bg-gray-800 rounded-lg">
          <h2 className="text-xl font-semibold">Total Checks</h2>
          <div className="flex space-x-2 mt-4">
            <button>Today</button>
            <button className="text-purple-500">Week</button>
            <button>Month</button>
            <button>Range</button>
          </div>
          <div className="text-4xl font-bold mt-4">4,365</div>
          <div className="h-32 mt-4 bg-gray-700 rounded-lg flex items-center justify-center text-gray-400">
            Graph Placeholder
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
