import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4 footer-company-logo">
            </div>
            <p className="text-gray-400">
              Leading EPC contractor specializing in utility-scale solar installations and industrial energy solutions since 2015.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Enterprise Solutions</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white">Industrial Solutions</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/achievements" className="text-gray-400 hover:text-white">Project Portfolio</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Enterprise Contact</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Industrial Services</h3>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-gray-400 hover:text-white">Utility-Scale Solar</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white">Energy Storage Systems</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white">Commercial Installations</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white">Smart Monitoring</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white">EPC Services</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white">O&M Contracts</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Enterprise Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="text-gray-400">Ground Floor, Raj Tower, Opp. Sant Nirankari Satsang Bhawan, Kargi Chowk, Dehradun(UK)-248001.</span>
              </li>
              <li className="flex items-center">
                <a href="tel:+919456336900" className="text-gray-400 hover:text-white">+91 9456336900</a>
              </li>
              <li className="flex items-center">
                <a href="tel:+916396266476" className="text-gray-400 hover:text-white">+91 6396266476</a>
              </li>
              <li className="flex items-center">
                <a href="mailto:info@urzaindia.com" className="text-gray-400 hover:text-white">info@urzaindia.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Aasna Urza India Pvt Ltd. All rights reserved. | ISO Certified EPC Contractor</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;