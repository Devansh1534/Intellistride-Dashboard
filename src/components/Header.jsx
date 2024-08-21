import React from 'react';

const Header = () => {
  return (
    <header className="bg-indigo-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Energy Meter Dashboard</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:underline">Dashboard</a></li>
          <li><a href="/settings" className="hover:underline">Settings</a></li>
          <li><a href="/reports" className="hover:underline">Reports</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
