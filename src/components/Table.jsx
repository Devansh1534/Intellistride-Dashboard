import React from 'react';

const Table = ({ data }) => {
  return (
    <table className="min-w-full bg-white dark:bg-gray-800">
      <thead className="bg-gray-200 dark:bg-gray-700">
        <tr>
          <th className="p-3 text-left">Column 1</th>
          <th className="p-3 text-left">Column 2</th>
          {/* Add more columns as needed */}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className="border-t">
            <td className="p-3">{row.column1}</td>
            <td className="p-3">{row.column2}</td>
            {/* Add more columns as needed */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
