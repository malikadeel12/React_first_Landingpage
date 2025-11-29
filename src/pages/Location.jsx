import React, { useEffect, useState } from "react";
import { locations } from "../data/products";

function Location() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
            Our Locations
          </h1>
          <p className="text-gray-600 text-lg">
            Visit us at any of our stores. We're here to help you find the perfect pair!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div
              key={location.id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 border-l-4 border-red-500 group"
              style={{ 
                animation: `slideInUp 0.6s ease-out ${index * 0.2}s both`
              }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white text-xl font-bold mr-3 group-hover:rotate-360 transition-transform duration-500">
                  {location.id}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 group-hover:text-red-500 transition-colors duration-300">
                  {location.name}
                </h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start group/item">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-3 group-hover/item:bg-red-500 transition-colors duration-300">
                    <svg
                      className="w-5 h-5 text-red-500 group-hover/item:text-white transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-700 font-semibold">{location.address}</p>
                    <p className="text-gray-600">{location.city}</p>
                  </div>
                </div>

                <div className="flex items-center group/item">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-3 group-hover/item:bg-red-500 transition-colors duration-300">
                    <svg
                      className="w-5 h-5 text-red-500 group-hover/item:text-white transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <a
                    href={`tel:${location.phone}`}
                    className="text-gray-700 hover:text-red-500 font-semibold transition-all duration-300 transform hover:translate-x-2"
                  >
                    {location.phone}
                  </a>
                </div>

                <div className="flex items-start group/item">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-3 group-hover/item:bg-red-500 transition-colors duration-300">
                    <svg
                      className="w-5 h-5 text-red-500 group-hover/item:text-white transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-600">{location.hours}</p>
                </div>
              </div>

              <button className="mt-6 w-full bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-3 rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 font-semibold">
                📍 Get Directions
              </button>
            </div>
          ))}
        </div>

        {/* Map Section */}
        <div className="mt-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-8 text-white text-center animate-pulse-slow">
          <h3 className="text-3xl font-bold mb-4">Find Us on Map</h3>
          <p className="text-red-100 mb-6">Click on any location above to get directions</p>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
            <div className="text-4xl mb-2">🗺️</div>
            <p className="text-lg">Interactive map coming soon!</p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.9;
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default Location;
