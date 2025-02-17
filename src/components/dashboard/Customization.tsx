import React, { useState } from 'react';
import { 
  Car, 
  Wrench, 
  Palette,
  Gauge, 
  Plus,
  Search,
  SlidersHorizontal,
  ArrowRight,
  Camera,
  Share2
} from 'lucide-react';

const Customization = () => {
  const [activeTab, setActiveTab] = useState('current');
  
  const currentProjects = [
    {
      id: 1,
      name: 'BMW NT GTR',
      image: '/images/m3 gtr.webp',
      progress: 65,
      status: 'In Progress',
      mods: ['Engine Tune', 'Suspension', 'Exhaust'],
      lastUpdated: '2 hours ago'
    },
    {
      id: 2,
      name: 'BENZ w124',
      image: '/images/benz w.jpg',
      progress: 30,
      status: 'Planning',
      mods: ['Performance Chip', 'Wheels', 'Body Kit'],
      lastUpdated: '1 day ago'
    }
  ];

  const recommendedMods = [
    {
      id: 1,
      name: 'Sport Exhaust System',
      compatibility: '98%',
      price: '$2,499',
      image: '/images/Sport Exhaust System new.jpg'
    },
    {
      id: 2,
      name: 'Lowering Springs',
      compatibility: '95%',
      price: '$899',
      image: '/images/Lowering Springs new.jpeg'
    },
    {
      id: 3,
      name: 'Carbon Fiber Hood',
      compatibility: '92%',
      price: '$1,299',
      image: '/images/Carbon Fiber Hood.jpeg'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Customization Projects</h1>
          <p className="text-primary-light/60">Manage and track your vehicle modifications</p>
        </div>
        <button className="flex items-center space-x-2 bg-accent hover:bg-accent-bright px-4 py-2 rounded-lg transition-colors">
          <Plus className="w-5 h-5" />
          <span>New Project</span>
        </button>
      </div>

      {/* Search and Filter Bar */}
      <div className="flex items-center justify-between gap-4 bg-secondary/20 p-4 rounded-lg">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-light/60" />
          <input
            type="text"
            placeholder="Search projects..."
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-secondary/40 border border-secondary focus:border-accent"
          />
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-secondary/40 hover:bg-secondary/60 transition-colors">
          <SlidersHorizontal className="w-5 h-5" />
          <span>Filters</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 border-b border-secondary">
        <button
          className={`pb-2 px-4 ${activeTab === 'current' ? 'border-b-2 border-accent text-accent' : 'text-primary-light/60'}`}
          onClick={() => setActiveTab('current')}
        >
          Current Projects
        </button>
        <button
          className={`pb-2 px-4 ${activeTab === 'completed' ? 'border-b-2 border-accent text-accent' : 'text-primary-light/60'}`}
          onClick={() => setActiveTab('completed')}
        >
          Completed
        </button>
      </div>

      {/* Current Projects Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {currentProjects.map(project => (
          <div key={project.id} className="bg-secondary/20 border border-secondary rounded-lg overflow-hidden hover:border-accent transition-colors">
            <div className="relative h-48">
              <img 
                src={project.image} 
                alt={project.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <div>
                  <h3 className="text-xl font-bold">{project.name}</h3>
                  <p className="text-sm text-primary-light/80">Last updated {project.lastUpdated}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm
                  ${project.status === 'In Progress' ? 'bg-blue-500/20 text-blue-500' : 'bg-yellow-500/20 text-yellow-500'}`}
                >
                  {project.status}
                </span>
              </div>
            </div>
            <div className="p-4 space-y-4">
              <div className="flex flex-wrap gap-2">
                {project.mods.map((mod, index) => (
                  <span key={index} className="px-3 py-1 bg-secondary/40 rounded-full text-sm">
                    {mod}
                  </span>
                ))}
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Overall Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <div className="w-full bg-secondary/40 rounded-full h-2">
                  <div 
                    className="bg-accent h-2 rounded-full transition-all duration-300" 
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>
              <div className="flex justify-between items-center pt-2">
                <div className="flex space-x-2">
                  <button className="p-2 hover:bg-secondary/40 rounded-lg transition-colors">
                    <Camera className="w-5 h-5" />
                  </button>
                  <button className="p-2 hover:bg-secondary/40 rounded-lg transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
                <button className="flex items-center space-x-2 text-accent hover:text-accent-bright">
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recommended Modifications */}
      <div className="bg-secondary/20 border border-secondary rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Recommended Modifications</h2>
          <button className="text-accent hover:text-accent-bright flex items-center">
            View All <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {recommendedMods.map(mod => (
            <div key={mod.id} className="bg-secondary/40 rounded-lg overflow-hidden">
              <img 
                src={mod.image} 
                alt={mod.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold mb-2">{mod.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-green-500">{mod.compatibility} Compatible</span>
                  <span className="font-semibold">{mod.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Customization; 