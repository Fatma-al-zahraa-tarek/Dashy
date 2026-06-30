import React, { useState, useEffect } from 'react';
import { Search, User } from 'lucide-react';
import DataTable from '../components/common/DataTable';
import { api } from '../services/api';

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async (filters = {}) => {
    try {
      setLoading(true);
      const data = await api.getCustomers(filters);
      setCustomers(data);
    } catch (error) {
      console.error('Error fetching customers:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    fetchCustomers({ search: value });
  };

  const columns = [
    { 
      key: 'name', 
      header: 'Customer',
      render: (val, row) => (
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
            <User size={16} className="text-primary-600" />
          </div>
          <div>
            <p className="font-medium text-gray-800">{val}</p>
          </div>
        </div>
      )
    },
    { key: 'email', header: 'Email' },
    { key: 'totalOrders', header: 'Total Orders' },
    { key: 'totalSpent', header: 'Total Spent', render: (val) => `$${val.toFixed(2)}` },
    { key: 'joinDate', header: 'Join Date' },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Customers</h1>
        <div className="text-sm text-gray-500">
          Total Customers: {customers.length}
        </div>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <DataTable columns={columns} data={customers} />
      </div>
    </div>
  );
};

export default Customers;