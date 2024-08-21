import React from 'react';

const Card = ({ title, value, icon }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 flex items-center space-x-4">
      <div className="text-indigo-500">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
};

export default Card;
