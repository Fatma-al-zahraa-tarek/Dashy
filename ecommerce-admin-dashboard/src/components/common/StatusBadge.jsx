import React from 'react';

const StatusBadge = ({ status }) => {
  const statusConfig = {
    'Delivered': { color: 'bg-green-100 text-green-800' },
    'Processing': { color: 'bg-blue-100 text-blue-800' },
    'Shipped': { color: 'bg-purple-100 text-purple-800' },
    'Pending': { color: 'bg-yellow-100 text-yellow-800' },
    'Cancelled': { color: 'bg-red-100 text-red-800' },
    'In Stock': { color: 'bg-green-100 text-green-800' },
    'Low Stock': { color: 'bg-orange-100 text-orange-800' },
    'Out of Stock': { color: 'bg-red-100 text-red-800' },
  };

  const config = statusConfig[status] || { color: 'bg-gray-100 text-gray-800' };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${config.color}`}>
      {status}
    </span>
  );
};

export default StatusBadge;