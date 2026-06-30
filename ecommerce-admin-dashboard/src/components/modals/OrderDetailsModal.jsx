import React from 'react';
import { X, MapPin, CreditCard, Package } from 'lucide-react';
import StatusBadge from '../common/StatusBadge';

const OrderDetailsModal = ({ isOpen, onClose, order }) => {
  if (!isOpen || !order) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <div className="relative bg-white rounded-xl shadow-xl max-w-2xl w-full mx-4 p-6 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-800">Order Details</h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-gray-200">
            <div>
              <p className="text-sm text-gray-500">Order ID</p>
              <p className="text-lg font-semibold text-gray-800">{order.id}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Status</p>
              <StatusBadge status={order.status} />
            </div>
          </div>

          {/* Customer Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500 mb-1">Customer</p>
              <p className="font-medium text-gray-800">{order.customer}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Date</p>
              <p className="font-medium text-gray-800">{order.date}</p>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <MapPin size={16} className="text-gray-600" />
              <p className="text-sm font-medium text-gray-700">Shipping Address</p>
            </div>
            <p className="text-sm text-gray-600">{order.shippingAddress}</p>
          </div>

          {/* Payment Method */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <CreditCard size={16} className="text-gray-600" />
              <p className="text-sm font-medium text-gray-700">Payment Method</p>
            </div>
            <p className="text-sm text-gray-600">{order.paymentMethod}</p>
          </div>

          {/* Items */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Package size={16} className="text-gray-600" />
              <p className="text-sm font-medium text-gray-700">Items ({order.items})</p>
            </div>
            <div className="space-y-2">
              {Array.from({ length: order.items }).map((_, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Item {index + 1}</span>
                  <span className="text-gray-800">${(order.total / order.items).toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Total */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
            <p className="text-lg font-semibold text-gray-800">Total</p>
            <p className="text-2xl font-bold text-primary-600">${order.total.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsModal;