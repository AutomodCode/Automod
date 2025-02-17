import React, { useState, useEffect } from 'react';
import {
  LayoutDashboard,
  User,
  Wrench,
  ShoppingCart,
  HeadphonesIcon,
  Search,
  Cog,
  CarFront,
  Palette,
  Gauge,
  Plus,
  Settings,
  Bell,
  MessageSquare,
  Home,
} from 'lucide-react';
import { Link, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import DashboardHome from './dashboard/DashboardHome';
import MyAccount from './dashboard/MyAccount';
import Customization from './dashboard/Customization';
import Support from './dashboard/Support';
import Orders from './dashboard/Orders';
import CategoryView from './dashboard/CategoryView';

const Dashboard = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  return (
    <div className="min-h-screen bg-black text-primary-light flex">
      {/* Sidebar */}
      <aside className="w-64 bg-secondary/20 border-r border-secondary fixed h-full">
        <div className="p-4">
          <img 
            src="/images/logo.png" 
            alt="AutoMod AI Logo"
            className="h-8 mb-8"
          />
          
          {/* Main Navigation */}
          <nav className="space-y-2">
            <Link 
              to="/dashboard"
              className={`flex items-center space-x-3 px-4 py-2 rounded-lg ${
                location.pathname === '/dashboard' ? 'bg-accent text-white' : 'hover:bg-secondary/40'
              }`}
            >
              <LayoutDashboard className="w-5 h-5" />
              <span>Dashboard</span>
            </Link>
            <Link 
              to="/dashboard/account"
              className={`flex items-center space-x-3 px-4 py-2 rounded-lg ${
                location.pathname === '/dashboard/account' ? 'bg-accent text-white' : 'hover:bg-secondary/40'
              }`}
            >
              <User className="w-5 h-5" />
              <span>My Account</span>
            </Link>
            <Link 
              to="/dashboard/customization"
              className={`flex items-center space-x-3 px-4 py-2 rounded-lg ${
                location.pathname === '/dashboard/customization' ? 'bg-accent text-white' : 'hover:bg-secondary/40'
              }`}
            >
              <Wrench className="w-5 h-5" />
              <span>Customization</span>
            </Link>
            <Link 
              to="/dashboard/orders"
              className={`flex items-center space-x-3 px-4 py-2 rounded-lg ${
                location.pathname === '/dashboard/orders' ? 'bg-accent text-white' : 'hover:bg-secondary/40'
              }`}
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Orders</span>
            </Link>
            <Link 
              to="/dashboard/support"
              className={`flex items-center space-x-3 px-4 py-2 rounded-lg ${
                location.pathname === '/dashboard/support' ? 'bg-accent text-white' : 'hover:bg-secondary/40'
              }`}
            >
              <HeadphonesIcon className="w-5 h-5" />
              <span>Support</span>
            </Link>
          </nav>

          {/* Categories */}
          <div className="mt-8">
            <h3 className="px-4 text-sm font-semibold text-primary-light/60 uppercase">Categories</h3>
            <nav className="mt-4 space-y-2">
              <Link 
                to="/dashboard/category/engine"
                className={`flex items-center space-x-3 px-4 py-2 rounded-lg ${
                  location.pathname === '/dashboard/category/engine' ? 'bg-accent text-white' : 'hover:bg-secondary/40'
                }`}
              >
                <Cog className="w-5 h-5" />
                <span>Engine</span>
              </Link>
              <Link 
                to="/dashboard/category/exterior"
                className={`flex items-center space-x-3 px-4 py-2 rounded-lg ${
                  location.pathname === '/dashboard/category/exterior' ? 'bg-accent text-white' : 'hover:bg-secondary/40'
                }`}
              >
                <CarFront className="w-5 h-5" />
                <span>Exterior</span>
              </Link>
              <Link 
                to="/dashboard/category/interior"
                className={`flex items-center space-x-3 px-4 py-2 rounded-lg ${
                  location.pathname === '/dashboard/category/interior' ? 'bg-accent text-white' : 'hover:bg-secondary/40'
                }`}
              >
                <Palette className="w-5 h-5" />
                <span>Interior</span>
              </Link>
              <Link 
                to="/dashboard/category/performance"
                className={`flex items-center space-x-3 px-4 py-2 rounded-lg ${
                  location.pathname === '/dashboard/category/performance' ? 'bg-accent text-white' : 'hover:bg-secondary/40'
                }`}
              >
                <Gauge className="w-5 h-5" />
                <span>Performance</span>
              </Link>
            </nav>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 flex-1">
        {/* Header */}
        <header className="h-16 bg-secondary/20 border-b border-secondary flex items-center justify-between px-6">
          {/* Left Side - Back to Homepage Button */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 px-4 py-2 bg-accent hover:bg-accent-bright rounded-lg transition-colors duration-300"
            >
              <Home className="w-4 h-4" />
              <span>Back to Homepage</span>
            </button>
            
            {/* Timer Display */}
            <div className="px-4 py-2 bg-secondary/30 rounded-lg flex items-center space-x-2">
              <span className="font-medium">{formatTime(currentTime)}</span>
              <span className="text-sm text-primary-light/60"> : to be launched</span>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-xl">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-light/60" />
                <input
                  type="text"
                  placeholder="Search for car models, parts..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-secondary/20 border border-secondary focus:border-accent focus:ring-1 focus:ring-accent"
                />
              </div>
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-secondary/40 rounded-lg">
              <Bell className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-secondary/40 rounded-lg">
              <MessageSquare className="w-5 h-5" />
            </button>
            <div className="relative">
              <button 
                className="flex items-center space-x-2"
                onClick={() => setIsProfileOpen(!isProfileOpen)}
              >
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop"
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
                <Settings className="w-5 h-5" />
              </button>
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-secondary/95 border border-secondary rounded-lg shadow-lg">
                  <a href="#" className="block px-4 py-2 hover:bg-secondary/40">Profile</a>
                  <a href="#" className="block px-4 py-2 hover:bg-secondary/40">Settings</a>
                  <a href="#" className="block px-4 py-2 hover:bg-secondary/40">Sign Out</a>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Routes Content */}
        <div className="p-6">
          <Routes>
            <Route index element={<DashboardHome />} />
            <Route path="account" element={<MyAccount />} />
            <Route path="customization" element={<Customization />} />
            <Route path="orders" element={<Orders />} />
            <Route path="support" element={<Support />} />
            <Route path="category/:type" element={<CategoryView />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default Dashboard; 