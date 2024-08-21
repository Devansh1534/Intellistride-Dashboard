import React from 'react';

const Settings = () => {
  return (
    <div className="p-6 bg-gray-800 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <div className="bg-gray-700 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">General Settings</h2>
        <div className="space-y-4">
          <div>
            <label htmlFor="timezone" className="block text-lg">Time Zone</label>
            <select id="timezone" className="w-full p-2 mt-1 bg-gray-600 rounded border border-gray-500">
              <option value="UTC">UTC</option>
              <option value="PST">PST</option>
              <option value="EST">EST</option>
            </select>
          </div>
          <div>
            <label htmlFor="currency" className="block text-lg">Currency</label>
            <select id="currency" className="w-full p-2 mt-1 bg-gray-600 rounded border border-gray-500">
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;