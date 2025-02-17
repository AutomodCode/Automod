import React, { useState } from 'react';
import { 
  MessageSquare, 
  Phone, 
  Mail, 
  Search,
  Plus,
  Clock,
  CheckCircle,
  AlertCircle,
  ChevronRight,
  Send,
  FileText,
  HelpCircle,
  Book,
  Video
} from 'lucide-react';

const Support = () => {
  const [activeTab, setActiveTab] = useState('tickets');

  const tickets = [
    {
      id: 'TKT-001',
      title: 'Installation Guide Request',
      status: 'Open',
      priority: 'Medium',
      category: 'Technical',
      lastUpdate: '2 hours ago',
      messages: 3
    },
    {
      id: 'TKT-002',
      title: 'Compatibility Check',
      status: 'In Progress',
      priority: 'High',
      category: 'Parts',
      lastUpdate: '1 day ago',
      messages: 5
    }
  ];

  const faqs = [
    {
      category: 'Installation',
      questions: [
        { title: 'How to install performance chips?', views: '2.5k' },
        { title: 'Suspension upgrade guide', views: '1.8k' }
      ]
    },
    {
      category: 'Compatibility',
      questions: [
        { title: 'Check part compatibility', views: '3.2k' },
        { title: 'Vehicle modification limits', views: '2.1k' }
      ]
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Support Center</h1>
          <p className="text-primary-light/60">Get help with your customization projects</p>
        </div>
        <button className="flex items-center space-x-2 bg-accent hover:bg-accent-bright px-4 py-2 rounded-lg transition-colors">
          <Plus className="w-5 h-5" />
          <span>New Ticket</span>
        </button>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-secondary/20 border border-secondary rounded-lg p-6 hover:border-accent transition-colors cursor-pointer">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-500/20 p-3 rounded-lg">
              <MessageSquare className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <h3 className="font-semibold">Live Chat</h3>
              <p className="text-sm text-primary-light/60">Talk to an expert</p>
            </div>
          </div>
        </div>
        <div className="bg-secondary/20 border border-secondary rounded-lg p-6 hover:border-accent transition-colors cursor-pointer">
          <div className="flex items-center space-x-4">
            <div className="bg-green-500/20 p-3 rounded-lg">
              <Phone className="w-6 h-6 text-green-500" />
            </div>
            <div>
              <h3 className="font-semibold">Call Support</h3>
              <p className="text-sm text-primary-light/60">24/7 available</p>
            </div>
          </div>
        </div>
        <div className="bg-secondary/20 border border-secondary rounded-lg p-6 hover:border-accent transition-colors cursor-pointer">
          <div className="flex items-center space-x-4">
            <div className="bg-purple-500/20 p-3 rounded-lg">
              <Mail className="w-6 h-6 text-purple-500" />
            </div>
            <div>
              <h3 className="font-semibold">Email Support</h3>
              <p className="text-sm text-primary-light/60">Get email support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search Knowledge Base */}
      <div className="bg-secondary/20 border border-secondary rounded-lg p-8">
        <h2 className="text-xl font-bold mb-4 text-center">Search Our Knowledge Base</h2>
        <div className="max-w-2xl mx-auto relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary-light/60" />
          <input
            type="text"
            placeholder="Search for guides, FAQs, and documentation..."
            className="w-full pl-12 pr-4 py-3 rounded-lg bg-secondary/40 border border-secondary focus:border-accent"
          />
        </div>
      </div>

      {/* Support Resources */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-secondary/20 border border-secondary rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Book className="w-5 h-5 text-accent" />
            <h3 className="font-semibold">Documentation</h3>
          </div>
          <p className="text-sm text-primary-light/60 mb-4">
            Detailed guides and documentation for all modifications
          </p>
          <button className="text-accent hover:text-accent-bright flex items-center">
            Browse Docs <ChevronRight className="w-4 h-4 ml-2" />
          </button>
        </div>
        <div className="bg-secondary/20 border border-secondary rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Video className="w-5 h-5 text-accent" />
            <h3 className="font-semibold">Video Tutorials</h3>
          </div>
          <p className="text-sm text-primary-light/60 mb-4">
            Step-by-step video guides for installations
          </p>
          <button className="text-accent hover:text-accent-bright flex items-center">
            Watch Videos <ChevronRight className="w-4 h-4 ml-2" />
          </button>
        </div>
        <div className="bg-secondary/20 border border-secondary rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <HelpCircle className="w-5 h-5 text-accent" />
            <h3 className="font-semibold">FAQs</h3>
          </div>
          <p className="text-sm text-primary-light/60 mb-4">
            Common questions and answers
          </p>
          <button className="text-accent hover:text-accent-bright flex items-center">
            View FAQs <ChevronRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>

      {/* Support Tickets */}
      <div className="bg-secondary/20 border border-secondary rounded-lg p-6">
        <h2 className="text-xl font-bold mb-6">Your Support Tickets</h2>
        <div className="space-y-4">
          {tickets.map(ticket => (
            <div key={ticket.id} className="bg-secondary/40 p-4 rounded-lg hover:bg-secondary/60 transition-colors">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center space-x-3">
                    <FileText className="w-5 h-5 text-accent" />
                    <h3 className="font-semibold">{ticket.title}</h3>
                  </div>
                  <p className="text-sm text-primary-light/60 mt-1">Ticket ID: {ticket.id}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs
                  ${ticket.status === 'Open' ? 'bg-green-500/20 text-green-500' : 
                    'bg-blue-500/20 text-blue-500'}`}
                >
                  {ticket.status}
                </span>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center space-x-4 text-sm text-primary-light/60">
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {ticket.lastUpdate}
                  </span>
                  <span className="flex items-center">
                    <MessageSquare className="w-4 h-4 mr-1" />
                    {ticket.messages} messages
                  </span>
                </div>
                <button className="text-accent hover:text-accent-bright flex items-center text-sm">
                  View Details <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular FAQs */}
      <div className="bg-secondary/20 border border-secondary rounded-lg p-6">
        <h2 className="text-xl font-bold mb-6">Popular Articles</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4">{section.category}</h3>
              <div className="space-y-3">
                {section.questions.map((q, qIndex) => (
                  <div key={qIndex} className="flex items-center justify-between p-3 bg-secondary/40 rounded-lg hover:bg-secondary/60 transition-colors cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <HelpCircle className="w-4 h-4 text-accent" />
                      <span>{q.title}</span>
                    </div>
                    <span className="text-sm text-primary-light/60">{q.views} views</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Support; 