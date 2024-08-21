import React from 'react';

const Settings = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Settings</h2>
      <form>
        {/* Add form elements here */}
        <div className="mb-4">
          <label className="block text-gray-700">Username</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded-lg" />
        </div>
        {/* More settings options */}
      </form>
    </div>
  );
};

export default Settings;
