import React, { useState, useEffect } from "react";
import { products, categories } from "../data/products";

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isVisible, setIsVisible] = useState(false);

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    setIsVisible(false);
    setTimeout(() => setIsVisible(true), 100);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
            Our Products
          </h1>
          <p className="text-gray-600 text-lg">Discover the perfect pair for every step</p>
        </div>
        
        {/* Category Filter with Animations */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-xl scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-300 hover:border-red-500"
              }`}
              style={{ 
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid with Stagger Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 group border border-gray-100"
              style={{ 
                animation: `fadeInScale 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {!product.inStock && (
                  <div className="absolute top-3 right-3 bg-gray-800 text-white px-3 py-1 rounded-full text-sm animate-pulse">
                    Out of Stock
                  </div>
                )}
                {product.inStock && (
                  <div className="absolute top-3 left-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    ✓ In Stock
                  </div>
                )}
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-500 transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                    ₹{product.price.toLocaleString()}
                  </span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
                <button
                  disabled={!product.inStock}
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 transform ${
                    product.inStock
                      ? "bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 hover:shadow-lg hover:scale-105 active:scale-95"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  {product.inStock ? "🛒 Add to Cart" : "Unavailable"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20 animate-bounce">
            <div className="text-6xl mb-4">😔</div>
            <p className="text-gray-600 text-xl">No products found in this category.</p>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default Menu;
