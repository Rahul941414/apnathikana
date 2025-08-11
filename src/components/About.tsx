import React from 'react';
import { Award, Users, Clock, Leaf } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized as the best bakery in the city for 3 consecutive years'
    },
    {
      icon: Users,
      title: 'Expert Bakers',
      description: 'Our team of skilled artisans brings decades of baking experience'
    },
    {
      icon: Clock,
      title: 'Fresh Daily',
      description: 'Everything is baked fresh every morning using traditional methods'
    },
    {
      icon: Leaf,
      title: 'Organic Ingredients',
      description: 'We source only the finest organic and locally grown ingredients'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Our Story of <span className="text-amber-600">Passion</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Founded in 1998, Earthy Tales began as a small family bakery with a simple mission: 
                to bring the authentic taste of traditional baking to our community. What started 
                as a humble neighborhood bakery has grown into a beloved local institution.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that great bread and pastries are more than just food – they're a way 
                to bring people together, create memories, and nourish both body and soul. Every 
                loaf, every pastry, every cake is crafted with the same care and attention to 
                detail that our founders instilled from day one.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-amber-600 mb-2">25+</div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-amber-600 mb-2">10K+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Baker at work"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-amber-200 rounded-full opacity-50"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-200 rounded-full opacity-30"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Earthy Tales?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;