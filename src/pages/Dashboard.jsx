import React from 'react'; 
import { Bar, Line } from 'react-chartjs-2'; 
import 'chart.js/auto';

const Dashboard = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Energy Consumption',
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        fill: true,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="p-6 bg-gray-800 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        
        <div className="bg-gray-700 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Total Consumption</h2>
          <p className="text-2xl">1234 kWh</p>
        </div>
        
        <div className="bg-gray-700 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Peak Consumption</h2>
          <p className="text-2xl">200 kWh</p>
        </div>
        
        <div className="bg-gray-700 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Total Cost</h2>
          <p className="text-2xl">$567.89</p>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Consumption Trends</h2>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default Dashboard;