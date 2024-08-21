import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white h-full p-6">
      <nav>
        <ul className="space-y-4">
          <li><Link to="/" className="hover:bg-gray-700 p-2 rounded">Dashboard</Link></li>
          <li><Link to="/settings" className="hover:bg-gray-700 p-2 rounded">Settings</Link></li>
          <li><Link to="/reports" className="hover:bg-gray-700 p-2 rounded">Reports</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
