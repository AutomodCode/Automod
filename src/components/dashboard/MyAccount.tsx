import React from 'react';
import { User, Mail, Phone, MapPin, Shield, Key } from 'lucide-react';

const MyAccount = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">My Account</h1>
      
      {/* Profile Section */}
      <div className="bg-secondary/20 border border-secondary rounded-lg p-6 mb-8">
        <div className="flex items-center space-x-4 mb-6">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop"
            alt="Profile"
            className="w-24 h-24 rounded-full"
          />
          <div>
            <h2 className="text-xl font-semibold">John Doe</h2>
            <p className="text-primary-light/60">Premium Member</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-accent" />
              <span>john.doe@example.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-accent" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-accent" />
              <span>San Francisco, CA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Account Settings */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-secondary/20 border border-secondary rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Shield className="w-5 h-5 mr-2" />
            Security Settings
          </h3>
          <div className="space-y-4">
            <button className="w-full bg-accent hover:bg-accent-bright px-4 py-2 rounded-lg transition-colors">
              Change Password
            </button>
            <button className="w-full bg-secondary hover:bg-secondary/60 px-4 py-2 rounded-lg transition-colors">
              Enable 2FA
            </button>
          </div>
        </div>

        <div className="bg-secondary/20 border border-secondary rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Key className="w-5 h-5 mr-2" />
            Preferences
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Email Notifications</span>
              <input type="checkbox" className="toggle" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <span>SMS Alerts</span>
              <input type="checkbox" className="toggle" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount; 