import React, { useEffect, useState } from "react";
import { aboutInfo } from "../data/products";

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    year: 0,
    customers: 0,
    products: 0
  });

  useEffect(() => {
    setIsVisible(true);
    
    // Animate counters
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    
    const yearTarget = parseInt(aboutInfo.year);
    const customersTarget = parseInt(aboutInfo.customers.replace(/\D/g, ''));
    const productsTarget = parseInt(aboutInfo.products.replace(/\D/g, ''));

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounters({
        year: Math.floor(yearTarget * progress),
        customers: Math.floor(customersTarget * progress),
        products: Math.floor(productsTarget * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounters({
          year: yearTarget,
          customers: customersTarget,
          products: productsTarget
        });
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Header with Animation */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
            {aboutInfo.title}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
        </div>
        
        {/* Main Content Card */}
        <div 
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12 border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
          style={{ 
            animation: `fadeInUp 0.8s ease-out 0.2s both`
          }}
        >
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white text-2xl animate-bounce-slow">
                👟
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
            </div>
            
            <p className="text-gray-700 text-lg leading-relaxed animate-fade-in-delay">
              {aboutInfo.description}
            </p>
            
            <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-6 border-l-4 border-red-500 transform hover:scale-105 transition-transform duration-300">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-red-500">🎯</span> Our Mission
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                {aboutInfo.mission}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="text-red-500">✨</span> Our Values
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {aboutInfo.values.map((value, index) => (
                  <li 
                    key={index} 
                    className="flex items-center bg-gradient-to-r from-gray-50 to-white p-4 rounded-lg hover:from-red-50 hover:to-pink-50 transition-all duration-300 transform hover:scale-105 hover:shadow-md border border-gray-100 group"
                    style={{ 
                      animation: `slideInLeft 0.6s ease-out ${0.5 + index * 0.1}s both`
                    }}
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mr-4 group-hover:rotate-360 transition-transform duration-500">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-lg font-semibold group-hover:text-red-600 transition-colors duration-300">
                      {value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Stats Cards with Counter Animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div 
            className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl shadow-xl p-8 text-center text-white transform hover:scale-110 hover:rotate-2 transition-all duration-500 group"
            style={{ 
              animation: `fadeInScale 0.8s ease-out 0.4s both`
            }}
          >
            <div className="text-6xl font-bold mb-3 group-hover:scale-125 transition-transform duration-300">
              {counters.year}+
            </div>
            <div className="text-xl font-semibold opacity-90">Years of Experience</div>
            <div className="mt-4 text-4xl animate-bounce-slow">📅</div>
          </div>
          
          <div 
            className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-xl p-8 text-center text-white transform hover:scale-110 hover:-rotate-2 transition-all duration-500 group"
            style={{ 
              animation: `fadeInScale 0.8s ease-out 0.6s both`
            }}
          >
            <div className="text-6xl font-bold mb-3 group-hover:scale-125 transition-transform duration-300">
              {counters.customers.toLocaleString()}+
            </div>
            <div className="text-xl font-semibold opacity-90">Happy Customers</div>
            <div className="mt-4 text-4xl animate-bounce-slow">😊</div>
          </div>
          
          <div 
            className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-xl p-8 text-center text-white transform hover:scale-110 hover:rotate-2 transition-all duration-500 group"
            style={{ 
              animation: `fadeInScale 0.8s ease-out 0.8s both`
            }}
          >
            <div className="text-6xl font-bold mb-3 group-hover:scale-125 transition-transform duration-300">
              {counters.products}+
            </div>
            <div className="text-xl font-semibold opacity-90">Products Available</div>
            <div className="mt-4 text-4xl animate-bounce-slow">👟</div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-white text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Journey</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            We're committed to providing the best footwear experience. Your comfort and style are our top priorities.
          </p>
          <div className="flex justify-center gap-8 text-5xl">
            <span className="animate-bounce" style={{ animationDelay: '0s' }}>👥</span>
            <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>💪</span>
            <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>🌟</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fade-in-delay {
          animation: fadeInUp 1s ease-out 0.4s both;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default About;
