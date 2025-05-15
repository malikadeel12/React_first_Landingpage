import React from "react"
import BrandLogo from './assets/Images/brand_logo.png'
import ShoesImage from './assets/Images/shoe_image.png'
import shops from './assets/Images/shops.png'
function App() {


  return (
    <>
      <nav className="bg-white p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src={BrandLogo} alt="Brand Logo" className="h-10 w-auto" />
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-gray-700 hover:text-red-500 font-medium">Menu</a>
          <a href="#" className="text-gray-700 hover:text-red-500 font-medium">Location</a>
          <a href="#" className="text-gray-700 hover:text-red-500 font-medium">About</a>
          <a href="#" className="text-gray-700 hover:text-red-500 font-medium">Contact</a>
        </div>

        <button
          type="submit"
          className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition duration-300"
        >
          Login
        </button>
      </nav>
      <section className="bg-white px-6 md:px-16 py-12 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="max-w-xl space-y-6">
          <h1 className="text-5xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            YOUR FEET<br /> DESERVE<br /> THE BEST
          </h1>
          <p className="text-gray-600 text-lg">
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
            Because just like your perfect match, the right pair will walk with you through everything.
          </p>

          <div className="flex space-x-4">
            <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition duration-300">
              Shop Now
            </button>
            <button className="border border-gray-800 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-100 transition duration-300">
              Category
            </button>
          </div>
          <div>
            <h4 className="text-gray-700 font-semibold mt-6">Also Available On</h4>
            <img src={shops} alt="Shop logos" className="mt-2 h-10 object-contain" />
          </div>
        </div>

        <div>
          <img src={ShoesImage} alt="Shoes" className="w-full max-w-md object-contain" />
        </div>
      </section>


    </>
  )
}

export default App
