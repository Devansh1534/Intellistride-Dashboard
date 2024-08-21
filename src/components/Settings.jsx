import React, { useState } from 'react';

const Settings = () => {
  const [theme, setTheme] = useState('light');
  const [notifications, setNotifications] = useState(true);

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  const handleNotificationsChange = (event) => {
    setNotifications(event.target.checked);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Settings</h2>
      <form>
        
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700">Username</label>
          <input
            type="text"
            id="username"
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Enter your username"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Enter your password"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="confirm-password" className="block text-gray-700">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Confirm your password"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Theme</label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                value="light"
                checked={theme === 'light'}
                onChange={handleThemeChange}
                className="mr-2"
              />
              Light
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="dark"
                checked={theme === 'dark'}
                onChange={handleThemeChange}
                className="mr-2"
              />
              Dark
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={notifications}
              onChange={handleNotificationsChange}
              className="mr-2"
            />
            Enable notifications
          </label>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
        >
          Save Settings
        </button>
      </form>
    </div>
  );
};

export default Settings;
