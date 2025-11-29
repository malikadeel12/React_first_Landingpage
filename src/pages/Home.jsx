import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BrandLogo from '../assets/Images/brand_logo.png';
import ShoesImage from '../assets/Images/shoe_image.png';
import shops from '../assets/Images/shops.png';
import { products, features, testimonials } from '../data/products';

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [popularProducts] = useState(products.slice(0, 4));

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      {/* Hero Section with Animations */}
      <section className="bg-gradient-to-br from-white via-red-50 to-white px-6 md:px-16 py-12 flex flex-col md:flex-row items-center justify-between gap-10 min-h-[80vh]">
        <div className={`max-w-xl space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight animate-fade-in">
            YOUR FEET<br /> 
            <span className="text-red-500 animate-pulse">DESERVE</span><br /> 
            THE BEST
          </h1>
          <p className="text-gray-600 text-lg animate-slide-up">
            YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
            Because just like your perfect match, the right pair will walk with you through everything.
          </p>

          <div className="flex space-x-4 animate-bounce-in">
            <Link 
              to="/menu" 
              className="bg-red-500 text-white px-8 py-3 rounded-lg hover:bg-red-600 transition-all duration-300 transform hover:scale-110 hover:shadow-xl font-semibold"
            >
              Shop Now
            </Link>
            <Link 
              to="/menu" 
              className="border-2 border-gray-800 text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-800 hover:text-white transition-all duration-300 transform hover:scale-110 font-semibold"
            >
              Category
            </Link>
          </div>
          <div className="animate-fade-in-delay">
            <h4 className="text-gray-700 font-semibold mt-6">Also Available On</h4>
            <img src={shops} alt="Shop logos" className="mt-2 h-10 object-contain hover:scale-110 transition-transform duration-300" />
          </div>
        </div>

        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-10 scale-95'}`}>
          <div className="relative">
            <img 
              src={ShoesImage} 
              alt="Shoes" 
              className="w-full max-w-md object-contain animate-float" 
            />
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-red-500 rounded-full opacity-20 animate-ping"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 animate-fade-in">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border border-gray-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl mb-4 animate-bounce">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Products Section */}
      <section className="bg-gray-50 py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Popular Products</h2>
            <Link 
              to="/menu" 
              className="text-red-500 hover:text-red-600 font-semibold flex items-center gap-2 group"
            >
              View All
              <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularProducts.map((product, index) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-64 bg-gray-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {product.inStock && (
                    <div className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 rounded text-sm animate-fade-in">
                      In Stock
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-red-500">
                      ₹{product.price.toLocaleString()}
                    </span>
                    <Link
                      to="/menu"
                      className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-300 transform hover:scale-105 font-medium"
                    >
                      View
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-red-500 to-red-600 py-16 px-6 md:px-16 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="animate-counter">
              <div className="text-5xl font-bold mb-2">50K+</div>
              <div className="text-xl opacity-90">Happy Customers</div>
            </div>
            <div className="animate-counter">
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-xl opacity-90">Products</div>
            </div>
            <div className="animate-counter">
              <div className="text-5xl font-bold mb-2">10+</div>
              <div className="text-xl opacity-90">Years Experience</div>
            </div>
            <div className="animate-counter">
              <div className="text-5xl font-bold mb-2">3</div>
              <div className="text-xl opacity-90">Store Locations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-red-500"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-20 px-6 md:px-16 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Ready to Find Your Perfect Pair?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Explore our wide collection of premium shoes and step into style and comfort.
          </p>
          <Link
            to="/menu"
            className="inline-block bg-red-500 text-white px-10 py-4 rounded-lg hover:bg-red-600 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl font-semibold text-lg"
          >
            Shop Now →
          </Link>
        </div>
      </section>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 1s ease-out 0.3s both;
        }

        .animate-bounce-in {
          animation: bounce-in 0.8s ease-out 0.6s both;
        }

        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.9s both;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-counter {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </>
  );
}

export default Home;
