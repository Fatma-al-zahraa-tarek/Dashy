import { 
  dashboardStats, 
  salesData, 
  productsData, 
  ordersData, 
  customersData,
  bestSellingProducts 
} from '../data/mockData';

// Placeholder API functions - easily replaceable with real API calls
export const api = {
  getDashboardStats: async () => {
    // Replace with: return axios.get('/api/dashboard/stats')
    return new Promise((resolve) => {
      setTimeout(() => resolve(dashboardStats), 500);
    });
  },

  getSalesData: async () => {
    // Replace with: return axios.get('/api/dashboard/sales')
    return new Promise((resolve) => {
      setTimeout(() => resolve(salesData), 500);
    });
  },

  getBestSellingProducts: async () => {
    // Replace with: return axios.get('/api/dashboard/best-selling')
    return new Promise((resolve) => {
      setTimeout(() => resolve(bestSellingProducts), 500);
    });
  },

  getProducts: async (filters = {}) => {
    // Replace with: return axios.get('/api/products', { params: filters })
    return new Promise((resolve) => {
      let filteredProducts = [...productsData];
      
      if (filters.search) {
        filteredProducts = filteredProducts.filter(p => 
          p.name.toLowerCase().includes(filters.search.toLowerCase())
        );
      }
      
      if (filters.category && filters.category !== 'All') {
        filteredProducts = filteredProducts.filter(p => 
          p.category === filters.category
        );
      }
      
      setTimeout(() => resolve(filteredProducts), 500);
    });
  },

  addProduct: async (productData) => {
    // Replace with: return axios.post('/api/products', productData)
    return new Promise((resolve) => {
      const newProduct = {
        id: Date.now(),
        ...productData,
        status: 'In Stock'
      };
      setTimeout(() => resolve(newProduct), 500);
    });
  },

  updateProduct: async (id, productData) => {
    // Replace with: return axios.put(`/api/products/${id}`, productData)
    return new Promise((resolve) => {
      setTimeout(() => resolve({ id, ...productData }), 500);
    });
  },

  deleteProduct: async (id) => {
    // Replace with: return axios.delete(`/api/products/${id}`)
    return new Promise((resolve) => {
      setTimeout(() => resolve({ success: true }), 500);
    });
  },

  getOrders: async (filters = {}) => {
    // Replace with: return axios.get('/api/orders', { params: filters })
    return new Promise((resolve) => {
      let filteredOrders = [...ordersData];
      
      if (filters.status && filters.status !== 'All') {
        filteredOrders = filteredOrders.filter(o => 
          o.status === filters.status
        );
      }
      
      setTimeout(() => resolve(filteredOrders), 500);
    });
  },

  getOrderById: async (id) => {
    // Replace with: return axios.get(`/api/orders/${id}`)
    return new Promise((resolve) => {
      const order = ordersData.find(o => o.id === id);
      setTimeout(() => resolve(order), 500);
    });
  },

  getCustomers: async (filters = {}) => {
    // Replace with: return axios.get('/api/customers', { params: filters })
    return new Promise((resolve) => {
      let filteredCustomers = [...customersData];
      
      if (filters.search) {
        filteredCustomers = filteredCustomers.filter(c => 
          c.name.toLowerCase().includes(filters.search.toLowerCase()) ||
          c.email.toLowerCase().includes(filters.search.toLowerCase())
        );
      }
      
      setTimeout(() => resolve(filteredCustomers), 500);
    });
  }
};