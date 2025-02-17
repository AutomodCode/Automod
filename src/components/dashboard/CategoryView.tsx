import React from 'react';
import { useParams } from 'react-router-dom';
import { 
  Cog, 
  Gauge, 
  ChevronRight, 
  Plus,
  Star,
  DollarSign,
  BarChart3,
  Wrench,
  ShoppingCart,
  Info
} from 'lucide-react';

const CategoryView = () => {
  const { type } = useParams();

  const categoryData = {
    engine: {
      title: 'Engine Modifications',
      description: 'Enhance your vehicle\'s performance with our advanced engine modifications',
      stats: [
        { label: 'Power Gain', value: '+25-40 HP' },
        { label: 'Torque Increase', value: '+30-45 Nm' },
        { label: 'Efficiency', value: '+15%' }
      ],
      products: [
        {
          name: 'Performance ECU Tune',
          price: '$899',
          rating: 4.8,
          image: '/images/Performance ECU Tune.jpg',
          compatibility: '98%'
        },
        {
          name: 'High-Flow Air Intake',
          price: '$299',
          rating: 4.6,
          image: '/images/High-Flow Air Intake.jpg',
          compatibility: '95%'
        }
      ]
    },
    interior: {
      title: 'Interior Customization',
      description: 'Transform your vehicle\'s cabin with premium interior modifications',
      stats: [
        { label: 'Comfort', value: '+40%' },
        { label: 'Style', value: '+35%' },
        { label: 'Value', value: '+20%' }
      ],
      products: [
        {
          name: 'Sport Seats Package',
          price: '$1,499',
          rating: 4.9,
          image: '/images/Sport Seats Package.webp',
          compatibility: '96%'
        },
        {
          name: 'LED Ambient Lighting',
          price: '$249',
          rating: 4.7,
          image: '/images/LED Ambient Lighting.jpg',
          compatibility: '99%'
        }
      ]
    },
    exterior: {
      title: 'Exterior Styling',
      description: 'Elevate your vehicle\'s appearance with premium exterior modifications',
      stats: [
        { label: 'Aerodynamics', value: '+30%' },
        { label: 'Style', value: '+45%' },
        { label: 'Uniqueness', value: '+40%' }
      ],
      products: [
        {
          name: 'Carbon Fiber Kit',
          price: '$2,499',
          rating: 4.9,
          image: '/images/Carbon Fiber Kit.jpeg',
          compatibility: '94%'
        },
        {
          name: 'LED Lighting Package',
          price: '$799',
          rating: 4.8,
          image: '/images/LED Lighting Package.jpeg',
          compatibility: '97%'
        }
      ]
    },
    performance: {
      title: 'Performance Upgrades',
      description: 'Maximize your vehicle\'s potential with our performance modifications',
      stats: [
        { label: 'Speed', value: '+25%' },
        { label: 'Handling', value: '+35%' },
        { label: 'Braking', value: '+30%' }
      ],
      products: [
        {
          name: 'Sport Suspension Kit',
          price: '$1,899',
          rating: 4.9,
          image: '/images/Sport Suspension Kit.jpeg',
          compatibility: '96%'
        },
        {
          name: 'Performance Brakes',
          price: '$1,299',
          rating: 4.8,
          image: '/images/Performance Brakes.jpg',
          compatibility: '98%'
        }
      ]
    }
  };

  const currentCategory = categoryData[type as keyof typeof categoryData];

  if (!currentCategory) {
    return <div>Category not found</div>;
  }

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">{currentCategory.title}</h1>
          <p className="text-primary-light/60">{currentCategory.description}</p>
        </div>
        <button className="flex items-center space-x-2 bg-accent hover:bg-accent-bright px-4 py-2 rounded-lg transition-colors">
          <Plus className="w-5 h-5" />
          <span>New Project</span>
        </button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {currentCategory.stats.map((stat, index) => (
          <div key={index} className="bg-secondary/20 border border-secondary rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold">{stat.label}</h3>
              <BarChart3 className="w-5 h-5 text-accent" />
            </div>
            <p className="text-2xl font-bold text-accent">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Featured Products */}
      <div className="bg-secondary/20 border border-secondary rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Recommended Products</h2>
          <button className="text-accent hover:text-accent-bright flex items-center">
            View All <ChevronRight className="w-4 h-4 ml-2" />
          </button>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {currentCategory.products.map((product, index) => (
            <div key={index} className="bg-secondary/40 rounded-lg overflow-hidden hover:bg-secondary/60 transition-colors">
              <div className="relative h-48">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-sm">
                  {product.compatibility} Compatible
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold">{product.name}</h3>
                  <span className="font-bold text-accent">{product.price}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="ml-1 text-sm">{product.rating}</span>
                  </div>
                  <button className="flex items-center space-x-2 text-accent hover:text-accent-bright">
                    <ShoppingCart className="w-4 h-4" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Installation Guide */}
      <div className="bg-secondary/20 border border-secondary rounded-lg p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Wrench className="w-5 h-5 text-accent" />
          <h2 className="text-xl font-bold">Installation Guide</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <p className="text-primary-light/60">
              Professional installation recommended for optimal performance and warranty coverage.
            </p>
            <button className="flex items-center space-x-2 text-accent hover:text-accent-bright">
              <Info className="w-4 h-4" />
              <span>View Installation Details</span>
            </button>
          </div>
          <div className="bg-secondary/40 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Estimated Installation Time</h3>
            <div className="flex items-center justify-between">
              <span>Professional Install</span>
              <span>2-3 Hours</span>
            </div>
            <div className="flex items-center justify-between mt-2">
              <span>DIY Install</span>
              <span>4-6 Hours</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryView; 