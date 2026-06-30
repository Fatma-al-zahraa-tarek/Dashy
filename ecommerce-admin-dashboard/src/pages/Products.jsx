import React, { useState, useEffect } from 'react';
import { Plus, Search, Edit2, Trash2 } from 'lucide-react';
import DataTable from '../components/common/DataTable';
import StatusBadge from '../components/common/StatusBadge';
import AddProductModal from '../components/modals/AddProductModal';
import { api } from '../services/api';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const categories = ['All', 'Electronics', 'Accessories', 'Clothing'];

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async (filters = {}) => {
    try {
      setLoading(true);
      const data = await api.getProducts(filters);
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    fetchProducts({ search: value, category: categoryFilter });
  };

  const handleCategoryFilter = (category) => {
    setCategoryFilter(category);
    fetchProducts({ search: searchTerm, category });
  };

  const handleAddProduct = async (productData) => {
    try {
      await api.addProduct(productData);
      fetchProducts({ search: searchTerm, category: categoryFilter });
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const handleEditProduct = async (productData) => {
    try {
      await api.updateProduct(editingProduct.id, productData);
      fetchProducts({ search: searchTerm, category: categoryFilter });
      setIsModalOpen(false);
      setEditingProduct(null);
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const handleDeleteProduct = async (product) => {
    if (window.confirm(`Are you sure you want to delete "${product.name}"?`)) {
      try {
        await api.deleteProduct(product.id);
        fetchProducts({ search: searchTerm, category: categoryFilter });
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    }
  };

  const columns = [
    { 
      key: 'image', 
      header: 'Image', 
      render: (val) => (
        <img src={val} alt="Product" className="w-12 h-12 object-cover rounded-lg" />
      )
    },
    { key: 'name', header: 'Name' },
    { key: 'category', header: 'Category' },
    { key: 'price', header: 'Price', render: (val) => `$${val.toFixed(2)}` },
    { key: 'stock', header: 'Stock' },
    { key: 'status', header: 'Status', render: (val) => <StatusBadge status={val} /> },
  ];

  const actions = [
    {
      icon: Edit2,
      className: 'text-blue-600 hover:text-blue-800',
      onClick: (product) => {
        setEditingProduct(product);
        setIsModalOpen(true);
      }
    },
    {
      icon: Trash2,
      className: 'text-red-600 hover:text-red-800',
      onClick: handleDeleteProduct
    }
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
        <h1 className="text-2xl font-bold text-gray-800">Products</h1>
        <button
          onClick={() => {
            setEditingProduct(null);
            setIsModalOpen(true);
          }}
          className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
        >
          <Plus size={18} />
          Add Product
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100 mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <div className="flex gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryFilter(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  categoryFilter === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <DataTable columns={columns} data={products} actions={actions} />
      </div>

      {/* Modal */}
      <AddProductModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingProduct(null);
        }}
        onSave={editingProduct ? handleEditProduct : handleAddProduct}
        editData={editingProduct}
      />
    </div>
  );
};

export default Products;