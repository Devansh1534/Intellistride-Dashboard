import React from 'react';

const Reports = () => {
  return (
    <div className="p-6 bg-gray-800 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Reports</h1>
      <div className="bg-gray-700 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Monthly Report</h2>
        <p className="text-lg">Here you can view and download your monthly energy consumption reports.</p>
        <button className="mt-4 px-4 py-2 bg-blue-500 rounded text-white">Download Report</button>
      </div>
      <div className="mt-6 bg-gray-700 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Annual Summary</h2>
        <p className="text-lg">Summary of your energy consumption for the year.</p>
        <button className="mt-4 px-4 py-2 bg-blue-500 rounded text-white">View Summary</button>
      </div>
    </div>
  );
};

export default Reports;