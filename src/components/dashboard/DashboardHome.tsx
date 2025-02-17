import React from 'react';
import { 
  Plus, 
  TrendingUp, 
  DollarSign, 
  Wrench, 
  Clock,
  Car,
  BarChart3,
  Calendar,
  ArrowRight,
} from 'lucide-react';

const DashboardHome = () => {
  const recentActivities = [
    { 
      id: 1, 
      title: 'Engine Tuning Started', 
      time: '2 hours ago',
      status: 'In Progress',
      icon: <Wrench className="w-4 h-4" />,
    },
    { 
      id: 2, 
      title: 'New Order: LED Kit', 
      time: '5 hours ago',
      status: 'Pending',
      icon: <DollarSign className="w-4 h-4" />,
    },
    { 
      id: 3, 
      title: 'Suspension Upgrade', 
      time: '1 day ago',
      status: 'Completed',
      icon: <Clock className="w-4 h-4" />,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Welcome back, John!</h1>
          <p className="text-primary-light/60">Here's what's happening with your projects.</p>
        </div>
        <button className="flex items-center space-x-2 bg-accent hover:bg-accent-bright px-4 py-2 rounded-lg transition-colors">
          <Plus className="w-5 h-5" />
          <span>New Project</span>
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-secondary/20 border border-secondary rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-accent/20 p-2 rounded-lg">
              <Wrench className="w-6 h-6 text-accent" />
            </div>
            <span className="text-green-500 flex items-center text-sm">
              <TrendingUp className="w-4 h-4 mr-1" />
              +12.5%
            </span>
          </div>
          <h3 className="text-lg font-semibold">Active Modifications</h3>
          <p className="text-3xl font-bold mt-2">3</p>
        </div>
        <div className="bg-secondary/20 border border-secondary rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-yellow-500/20 p-2 rounded-lg">
              <Clock className="w-6 h-6 text-yellow-500" />
            </div>
            <span className="text-yellow-500 flex items-center text-sm">
              2 Due Soon
            </span>
          </div>
          <h3 className="text-lg font-semibold">Pending Orders</h3>
          <p className="text-3xl font-bold mt-2">2</p>
        </div>
        <div className="bg-secondary/20 border border-secondary rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-green-500/20 p-2 rounded-lg">
              <DollarSign className="w-6 h-6 text-green-500" />
            </div>
            <span className="text-green-500 flex items-center text-sm">
              <TrendingUp className="w-4 h-4 mr-1" />
              +8.2%
            </span>
          </div>
          <h3 className="text-lg font-semibold">Total Spending</h3>
          <p className="text-3xl font-bold mt-2">$4,320</p>
        </div>
        <div className="bg-secondary/20 border border-secondary rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-blue-500/20 p-2 rounded-lg">
              <Car className="w-6 h-6 text-blue-500" />
            </div>
            <span className="text-blue-500 flex items-center text-sm">
              2 Active
            </span>
          </div>
          <h3 className="text-lg font-semibold">Vehicles</h3>
          <p className="text-3xl font-bold mt-2">3</p>
        </div>
      </div>

      {/* Projects and Activity Section */}
      <div className="grid md:grid-cols-7 gap-6">
        {/* Current Projects */}
        <div className="md:col-span-4 bg-secondary/20 border border-secondary rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Current Projects</h2>
            <button className="text-accent hover:text-accent-bright flex items-center">
              View All <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
          <div className="space-y-4">
            <div className="bg-secondary/40 p-4 rounded-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold">BMW M3 Customization</h3>
                  <p className="text-sm text-primary-light/60">Started 3 days ago</p>
                </div>
                <span className="px-2 py-1 bg-green-500/20 text-green-500 rounded-full text-sm">
                  In Progress
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>65%</span>
                </div>
                <div className="w-full bg-secondary/40 rounded-full h-2">
                  <div className="bg-accent h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>
            </div>
            <div className="bg-secondary/40 p-4 rounded-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold">Audi RS6 Engine Mod</h3>
                  <p className="text-sm text-primary-light/60">Started 1 week ago</p>
                </div>
                <span className="px-2 py-1 bg-yellow-500/20 text-yellow-500 rounded-full text-sm">
                  Pending
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>30%</span>
                </div>
                <div className="w-full bg-secondary/40 rounded-full h-2">
                  <div className="bg-accent h-2 rounded-full" style={{ width: '30%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="md:col-span-3 bg-secondary/20 border border-secondary rounded-lg p-6">
          <h2 className="text-xl font-bold mb-6">Recent Activity</h2>
          <div className="space-y-6">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-4">
                <div className="bg-secondary/40 p-2 rounded-lg">
                  {activity.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{activity.title}</h3>
                  <p className="text-sm text-primary-light/60">{activity.time}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs
                  ${activity.status === 'In Progress' ? 'bg-blue-500/20 text-blue-500' :
                    activity.status === 'Pending' ? 'bg-yellow-500/20 text-yellow-500' :
                    'bg-green-500/20 text-green-500'
                  }`}
                >
                  {activity.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Schedule */}
      <div className="bg-secondary/20 border border-secondary rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Upcoming Schedule</h2>
          <button className="text-accent hover:text-accent-bright flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            View Calendar
          </button>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-secondary/40 p-4 rounded-lg">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-semibold">Vehicle Inspection</h3>
              <span className="text-xs text-primary-light/60">Tomorrow</span>
            </div>
            <p className="text-sm text-primary-light/60">10:00 AM - 11:30 AM</p>
          </div>
          <div className="bg-secondary/40 p-4 rounded-lg">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-semibold">Parts Delivery</h3>
              <span className="text-xs text-primary-light/60">Mar 15</span>
            </div>
            <p className="text-sm text-primary-light/60">2:00 PM - 3:00 PM</p>
          </div>
          <div className="bg-secondary/40 p-4 rounded-lg">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-semibold">Installation</h3>
              <span className="text-xs text-primary-light/60">Mar 16</span>
            </div>
            <p className="text-sm text-primary-light/60">9:00 AM - 5:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome; 