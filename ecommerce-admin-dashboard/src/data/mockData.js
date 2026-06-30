export const dashboardStats = {
  totalSales: 84792,
  totalOrders: 1234,
  totalCustomers: 567,
  pendingOrders: 23
};

export const salesData = [
  { date: '2024-01-01', sales: 2400 },
  { date: '2024-01-02', sales: 1398 },
  { date: '2024-01-03', sales: 9800 },
  { date: '2024-01-04', sales: 3908 },
  { date: '2024-01-05', sales: 4800 },
  { date: '2024-01-06', sales: 3800 },
  { date: '2024-01-07', sales: 4300 },
  { date: '2024-01-08', sales: 6200 },
  { date: '2024-01-09', sales: 5100 },
  { date: '2024-01-10', sales: 7800 },
  { date: '2024-01-11', sales: 4900 },
  { date: '2024-01-12', sales: 5600 },
  { date: '2024-01-13', sales: 6700 },
  { date: '2024-01-14', sales: 8200 },
  { date: '2024-01-15', sales: 7100 },
  { date: '2024-01-16', sales: 5900 },
  { date: '2024-01-17', sales: 6400 },
  { date: '2024-01-18', sales: 8300 },
  { date: '2024-01-19', sales: 9200 },
  { date: '2024-01-20', sales: 10100 },
  { date: '2024-01-21', sales: 8700 },
  { date: '2024-01-22', sales: 7600 },
  { date: '2024-01-23', sales: 9400 },
  { date: '2024-01-24', sales: 10500 },
  { date: '2024-01-25', sales: 11300 },
  { date: '2024-01-26', sales: 9800 },
  { date: '2024-01-27', sales: 8900 },
  { date: '2024-01-28', sales: 10200 },
  { date: '2024-01-29', sales: 11600 },
  { date: '2024-01-30', sales: 12400 },
];

export const bestSellingProducts = [
  { name: 'Wireless Headphones', sales: 245 },
  { name: 'Smart Watch', sales: 189 },
  { name: 'Laptop Backpack', sales: 156 },
  { name: 'USB-C Hub', sales: 134 },
  { name: 'Phone Case', sales: 120 },
];

export const productsData = [
  {
    id: 1,
    name: 'Wireless Headphones Pro',
    category: 'Electronics',
    price: 89.99,
    stock: 45,
    status: 'In Stock',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop'
  },
  {
    id: 2,
    name: 'Smart Watch Series 5',
    category: 'Electronics',
    price: 199.99,
    stock: 23,
    status: 'In Stock',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop'
  },
  {
    id: 3,
    name: 'Laptop Backpack Premium',
    category: 'Accessories',
    price: 49.99,
    stock: 12,
    status: 'Low Stock',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=100&h=100&fit=crop'
  },
  {
    id: 4,
    name: 'USB-C Multi Hub',
    category: 'Electronics',
    price: 34.99,
    stock: 0,
    status: 'Out of Stock',
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=100&h=100&fit=crop'
  },
  {
    id: 5,
    name: 'Phone Case Ultra',
    category: 'Accessories',
    price: 19.99,
    stock: 78,
    status: 'In Stock',
    image: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=100&h=100&fit=crop'
  },
  {
    id: 6,
    name: 'Wireless Charger Pad',
    category: 'Electronics',
    price: 29.99,
    stock: 34,
    status: 'In Stock',
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=100&h=100&fit=crop'
  },
];

export const ordersData = [
  {
    id: 'ORD-001',
    customer: 'John Doe',
    date: '2024-01-15',
    items: 3,
    total: 345.97,
    status: 'Delivered',
    shippingAddress: '123 Main St, New York, NY 10001',
    paymentMethod: 'Credit Card'
  },
  {
    id: 'ORD-002',
    customer: 'Jane Smith',
    date: '2024-01-16',
    items: 2,
    total: 229.98,
    status: 'Processing',
    shippingAddress: '456 Oak Ave, Los Angeles, CA 90001',
    paymentMethod: 'PayPal'
  },
  {
    id: 'ORD-003',
    customer: 'Bob Johnson',
    date: '2024-01-17',
    items: 5,
    total: 289.95,
    status: 'Shipped',
    shippingAddress: '789 Pine Rd, Chicago, IL 60601',
    paymentMethod: 'Debit Card'
  },
  {
    id: 'ORD-004',
    customer: 'Alice Brown',
    date: '2024-01-18',
    items: 1,
    total: 199.99,
    status: 'Pending',
    shippingAddress: '321 Elm St, Houston, TX 77001',
    paymentMethod: 'Credit Card'
  },
  {
    id: 'ORD-005',
    customer: 'Charlie Wilson',
    date: '2024-01-19',
    items: 4,
    total: 159.96,
    status: 'Cancelled',
    shippingAddress: '654 Maple Dr, Phoenix, AZ 85001',
    paymentMethod: 'Apple Pay'
  },
  {
    id: 'ORD-006',
    customer: 'Diana Martinez',
    date: '2024-01-20',
    items: 2,
    total: 279.98,
    status: 'Delivered',
    shippingAddress: '987 Cedar Ln, Philadelphia, PA 19101',
    paymentMethod: 'Credit Card'
  },
  {
    id: 'ORD-007',
    customer: 'Eva Garcia',
    date: '2024-01-21',
    items: 3,
    total: 124.97,
    status: 'Processing',
    shippingAddress: '147 Walnut St, San Diego, CA 92101',
    paymentMethod: 'PayPal'
  },
];

export const customersData = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@email.com',
    totalOrders: 12,
    totalSpent: 1243.89,
    joinDate: '2023-06-15'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@email.com',
    totalOrders: 8,
    totalSpent: 876.45,
    joinDate: '2023-08-22'
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob.johnson@email.com',
    totalOrders: 15,
    totalSpent: 2134.67,
    joinDate: '2023-03-10'
  },
  {
    id: 4,
    name: 'Alice Brown',
    email: 'alice.brown@email.com',
    totalOrders: 5,
    totalSpent: 432.18,
    joinDate: '2023-11-01'
  },
  {
    id: 5,
    name: 'Charlie Wilson',
    email: 'charlie.wilson@email.com',
    totalOrders: 20,
    totalSpent: 3456.22,
    joinDate: '2022-12-05'
  },
  {
    id: 6,
    name: 'Diana Martinez',
    email: 'diana.martinez@email.com',
    totalOrders: 9,
    totalSpent: 987.33,
    joinDate: '2023-09-18'
  },
  {
    id: 7,
    name: 'Eva Garcia',
    email: 'eva.garcia@email.com',
    totalOrders: 6,
    totalSpent: 543.21,
    joinDate: '2024-01-02'
  },
];