import React from 'react';
import { Package, Clock, CheckCircle, XCircle, ChevronRight, Filter } from 'lucide-react';

const Orders = () => {
  const upcomingOrders = [
    {
      id: 'ORD-2024-001',
      product: 'Custom Exhaust System',
      date: '2024-03-15',
      status: 'Processing',
      price: '$899.99',
      eta: '5-7 days'
    },
    {
      id: 'ORD-2024-002',
      product: 'LED Headlight Kit',
      date: '2024-03-18',
      status: 'Confirmed',
      price: '$459.99',
      eta: '3-4 days'
    }
  ];

  const completedOrders = [
    {
      id: 'ORD-2024-003',
      product: 'Sport Suspension Kit',
      date: '2024-02-28',
      status: 'Delivered',
      price: '$1,299.99',
      rating: 5
    },
    {
      id: 'ORD-2024-004',
      product: 'Performance Brake Kit',
      date: '2024-02-15',
      status: 'Completed',
      price: '$799.99',
      rating: 4
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Orders</h1>
        <button className="flex items-center space-x-2 bg-secondary/40 hover:bg-secondary/60 px-4 py-2 rounded-lg transition-colors">
          <Filter className="w-4 h-4" />
          <span>Filter</span>
        </button>
      </div>

      {/* Order Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-secondary/20 border border-secondary rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-primary-light/60">Total Orders</p>
              <p className="text-2xl font-bold">28</p>
            </div>
            <Package className="w-8 h-8 text-accent" />
          </div>
        </div>
        <div className="bg-secondary/20 border border-secondary rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-primary-light/60">In Progress</p>
              <p className="text-2xl font-bold">3</p>
            </div>
            <Clock className="w-8 h-8 text-yellow-500" />
          </div>
        </div>
        <div className="bg-secondary/20 border border-secondary rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-primary-light/60">Completed</p>
              <p className="text-2xl font-bold">25</p>
            </div>
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
        </div>
      </div>

      {/* Upcoming Orders */}
      <div className="bg-secondary/20 border border-secondary rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Upcoming Orders</h2>
        <div className="space-y-4">
          {upcomingOrders.map((order) => (
            <div key={order.id} className="flex items-center justify-between p-4 bg-secondary/40 rounded-lg hover:bg-secondary/60 transition-colors cursor-pointer">
              <div className="flex items-center space-x-4">
                <div className="bg-accent/20 p-2 rounded-lg">
                  <Package className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold">{order.product}</h3>
                  <p className="text-sm text-primary-light/60">{order.id}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold">{order.price}</p>
                <p className="text-sm text-primary-light/60">ETA: {order.eta}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-primary-light/60" />
            </div>
          ))}
        </div>
      </div>

      {/* Completed Orders */}
      <div className="bg-secondary/20 border border-secondary rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Completed Orders</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-secondary">
                <th className="pb-4">Order ID</th>
                <th className="pb-4">Product</th>
                <th className="pb-4">Date</th>
                <th className="pb-4">Price</th>
                <th className="pb-4">Status</th>
                <th className="pb-4">Rating</th>
              </tr>
            </thead>
            <tbody>
              {completedOrders.map((order) => (
                <tr key={order.id} className="border-b border-secondary/40 hover:bg-secondary/40 transition-colors">
                  <td className="py-4">{order.id}</td>
                  <td className="py-4">{order.product}</td>
                  <td className="py-4">{order.date}</td>
                  <td className="py-4">{order.price}</td>
                  <td className="py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/20 text-green-500">
                      {order.status}
                    </span>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center">
                      {[...Array(order.rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders; 