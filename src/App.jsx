import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import BrandLogo from './assets/Images/brand_logo.png';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Location from './pages/Location';
import About from './pages/About';
import Contact from './pages/Contact';

function Navigation() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const isActive = (path) => {
    return location.pathname === path ? "text-red-500 font-bold" : "text-gray-700";
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/menu", label: "Menu" },
    { path: "/location", label: "Location" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" }
  ];

  return (
    <nav className="bg-white p-4 flex items-center justify-between shadow-md sticky top-0 z-50">
      <Link to="/" className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300">
        <img src={BrandLogo} alt="Brand Logo" className="h-10 w-auto" />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-6">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`${isActive(link.path)} hover:text-red-500 font-medium transition duration-300 transform hover:scale-110`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center space-x-4">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-gray-700 hover:text-red-500 transition duration-300"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <button
          type="submit"
          className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition duration-300 transform hover:scale-105 font-medium"
        >
          Login
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden animate-slide-down">
          <div className="flex flex-col space-y-2 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`${isActive(link.path)} hover:text-red-500 hover:bg-red-50 px-4 py-3 rounded-lg font-medium transition duration-300`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/location" element={<Location />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
