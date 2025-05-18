import { FaCoffee, FaStar, FaSeedling, FaFireAlt } from "react-icons/fa";

import heroimg from "../assets/more/3.png";

const Hero = () => {
  return (
    <div className=" bg-amber-600">
      <div
        className="bg-center bg-cover bg-no-repeat h-[80vh] w-full "
        style={{ backgroundImage: `url(${heroimg})` }}
      >
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl text-amber-800 md:text-5xl font-semibold mb-4">
            Would you like a{" "}
            <span className="italic">Cup of Delicious Coffee?</span>
          </h1>
          <p className="max-w-2xl mx-auto mb-6 text-lg text-gray-300">
            It’s coffee time – Sip & Savor – Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <button className="bg-yellow-800 hover:bg-yellow-800 text-white px-6 py-2 rounded font-medium shadow-lg transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Features section */}
      <div className="bg-[#ECEAE3] text-gray-800 py-12 px-4 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
        <div>
          <FaCoffee className="text-3xl mx-auto mb-3 text-brown-600" />
          <h4 className="font-bold text-lg mb-1">Awesome Aroma</h4>
          <p className="text-sm">
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div>
          <FaStar className="text-3xl mx-auto mb-3 text-brown-600" />
          <h4 className="font-bold text-lg mb-1">High Quality</h4>
          <p className="text-sm">
            We served the coffee to you maintaining the best quality
          </p>
        </div>
        <div>
          <FaSeedling className="text-3xl mx-auto mb-3 text-brown-600" />
          <h4 className="font-bold text-lg mb-1">Pure Grades</h4>
          <p className="text-sm">
            The coffee is made of the green coffee beans which you will love
          </p>
        </div>
        <div>
          <FaFireAlt className="text-3xl mx-auto mb-3 text-brown-600" />
          <h4 className="font-bold text-lg mb-1">Proper Roasting</h4>
          <p className="text-sm">
            Your coffee is brewed by first roasting the green coffee beans
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
