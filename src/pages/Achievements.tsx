import { Building2, Droplets, Lightbulb, Factory, Zap, Award, TrendingUp, Sun, Home, TreePine, Flame, Settings, Wrench, Recycle, CloudRain } from 'lucide-react';
import p7 from '../assets/Product/p7.jpg';
import a1 from '../assets/achivements/a1.jpg';
import a2 from '../assets/achivements/a2.jpg';
import a3 from '../assets/achivements/a3.jpg';
import { useEffect, useState } from 'react';

const Achievements = () => {
  const [counts, setCounts] = useState({
    streetLights: 0,
    waterHeaters: 0,
    heatPumps: 0
  });

  const targetCounts = {
    streetLights: 900,
    waterHeaters: 300000,
    heatPumps: 100000
  };

  useEffect(() => {
    const duration = 2000;
    const steps = 50;
    const interval = duration / steps;

    const incrementCounts = (step: number) => {
      setCounts({
        streetLights: Math.min(Math.floor((targetCounts.streetLights * step) / steps), targetCounts.streetLights),
        waterHeaters: Math.min(Math.floor((targetCounts.waterHeaters * step) / steps), targetCounts.waterHeaters),
        heatPumps: Math.min(Math.floor((targetCounts.heatPumps * step) / steps), targetCounts.heatPumps)
      });
    };

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      incrementCounts(currentStep);
      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <section className="relative bg-blue-900 text-white py-20 bg-cover bg-center" style={{ backgroundImage: `url(${p7})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Industrial & Commercial Achievements</h1>
          <p className="text-xl max-w-4xl mx-auto">
            Celebrating our success in transforming India's industrial energy landscape through innovative solar solutions and sustainable infrastructure development.
          </p>
        </div>
      </section>

      {/* Photovoltaic Technology Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-steel-blue-800 mb-4">Photovoltaic Technology</h2>
            <div className="w-24 h-1 bg-burnt-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Leading solar PV installations across industrial, commercial, and residential sectors
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Industrial */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 p-3 rounded-full mr-4">
                  <Factory className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900">Industrial</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Sun className="h-5 w-5 text-yellow-500 mr-2" />
                  <span className="text-lg font-semibold">Installed over 18 MW+ of solar PV systems</span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Across residential, government, and commercial sectors, delivering reliable clean energy solutions for large-scale operations.
                </p>
              </div>
            </div>

            {/* Commercial */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <div className="bg-green-600 p-3 rounded-full mr-4">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-green-900">Commercial</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Zap className="h-5 w-5 text-yellow-500 mr-2" />
                  <span className="text-lg font-semibold">Completed 15 MW+ solar projects</span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Resulted in a reduction of <span className="font-bold text-green-700">7,500 tonnes of CO₂ emissions</span>, supporting commercial sustainability goals.
                </p>
              </div>
            </div>

            {/* Residential */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <div className="bg-orange-600 p-3 rounded-full mr-4">
                  <Home className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-orange-900">Residential</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Sun className="h-5 w-5 text-yellow-500 mr-2" />
                  <span className="text-lg font-semibold">Installed 8 MW+ worth of rooftop solar systems</span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Resulted in <span className="font-bold text-orange-700">4,000 tonnes of CO₂ emission reduction</span>, empowering households with clean energy.
                </p>
              </div>
            </div>
          </div>

          {/* Solar Street Light Impact */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
            <div className="flex items-center mb-6">
              <div className="bg-white/20 p-4 rounded-full mr-6">
                <Lightbulb className="h-10 w-10 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2">🌄 Solar Street Light Impact</h3>
                <div className="text-2xl font-semibold">Installed over {counts.streetLights}+ Solar Street Lights</div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/10 rounded-lg p-4">
                <TreePine className="h-8 w-8 mb-2" />
                <h4 className="font-semibold mb-1">Remote Villages Focus</h4>
                <p className="text-sm opacity-90">Focused on remote villages in Uttarakhand</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <Award className="h-8 w-8 mb-2" />
                <h4 className="font-semibold mb-1">Enhanced Safety</h4>
                <p className="text-sm opacity-90">Brought clean lighting and improved safety</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <TrendingUp className="h-8 w-8 mb-2" />
                <h4 className="font-semibold mb-1">Rural Development</h4>
                <p className="text-sm opacity-90">Enhanced rural livelihoods and community impact</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thermo Technology Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-red-800 mb-4">🔥 Thermo Technology</h2>
            <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Advanced thermal solutions for residential and commercial applications
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Solar Water Heaters */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all">
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-r from-red-500 to-orange-500 p-4 rounded-full mr-6">
                  <Flame className="h-10 w-10 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-red-800">Solar Water Heaters</h3>
                  <div className="text-2xl font-semibold text-red-600 mt-2">
                    Over {counts.waterHeaters === 300000 ? '3 lakh' : Math.floor(counts.waterHeaters / 1000) + 'k'} units installed
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-red-50 rounded-lg">
                  <Home className="h-6 w-6 text-red-600 mr-3" />
                  <span className="text-lg">Residential Sector Solutions</span>
                </div>
                <div className="flex items-center p-4 bg-orange-50 rounded-lg">
                  <Building2 className="h-6 w-6 text-orange-600 mr-3" />
                  <span className="text-lg">Commercial Sector Applications</span>
                </div>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Providing efficient hot water solutions with significant energy savings and reduced carbon footprint across diverse applications.
                </p>
              </div>
            </div>

            {/* Heat Pumps */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all">
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-full mr-6">
                  <Settings className="h-10 w-10 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-purple-800">♨️ Heat Pumps</h3>
                  <div className="text-2xl font-semibold text-purple-600 mt-2">
                    Over {counts.heatPumps === 100000 ? '1 lakh' : Math.floor(counts.heatPumps / 1000) + 'k'} units installed
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-purple-50 rounded-lg">
                  <Building2 className="h-6 w-6 text-purple-600 mr-3" />
                  <span className="text-lg">Urban Applications</span>
                </div>
                <div className="flex items-center p-4 bg-pink-50 rounded-lg">
                  <TreePine className="h-6 w-6 text-pink-600 mr-3" />
                  <span className="text-lg">Rural Deployments</span>
                </div>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Deployed in various urban and rural applications, providing efficient heating and cooling solutions with advanced energy management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Water Solutions Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">💧 Water Solutions</h2>
            <div className="w-24 h-1 bg-cyan-300 mx-auto mb-6"></div>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Comprehensive water management and treatment solutions powered by renewable energy
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Energy-Efficient Pumping */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all">
              <div className="flex items-center mb-6">
                <div className="bg-white/20 p-4 rounded-full mr-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Energy-Efficient Pumping</h3>
              </div>
              <p className="text-lg opacity-90 mb-6">
                Designed for residential, commercial, and industrial uses with advanced energy optimization
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <Home className="h-8 w-8 mx-auto mb-2 opacity-80" />
                  <span className="text-sm">Residential</span>
                </div>
                <div className="text-center">
                  <Building2 className="h-8 w-8 mx-auto mb-2 opacity-80" />
                  <span className="text-sm">Commercial</span>
                </div>
                <div className="text-center">
                  <Factory className="h-8 w-8 mx-auto mb-2 opacity-80" />
                  <span className="text-sm">Industrial</span>
                </div>
              </div>
            </div>

            {/* Custom Pumping & Water Treatment */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all">
              <div className="flex items-center mb-6">
                <div className="bg-white/20 p-4 rounded-full mr-4">
                  <Wrench className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Custom Pumping & Water Treatment</h3>
              </div>
              <p className="text-lg opacity-90 mb-6">
                Tailored solar pumping systems with comprehensive water treatment solutions
              </p>
            </div>
          </div>

          {/* Water Treatment Applications */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-8 text-center">🛠️ Active Involvement In:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white/20 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Recycle className="h-10 w-10" />
                </div>
                <h4 className="text-xl font-semibold mb-2">STPs</h4>
                <p className="opacity-90">Sewage Treatment Plants</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Droplets className="h-10 w-10" />
                </div>
                <h4 className="text-xl font-semibold mb-2">ETPs</h4>
                <p className="opacity-90">Effluent Treatment Plants</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <CloudRain className="h-10 w-10" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Rainwater Harvesting</h4>
                <p className="opacity-90">Sustainable Water Management</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Content - Manufacturing & Industrial Sector */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Manufacturing & Industrial Sector */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-4">
                <img src={a1} alt="Manufacturing Solar Solutions" className="w-full h-48 object-cover rounded-lg shadow" />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Factory className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-semibold text-gray-800">Manufacturing & Industrial Excellence</h2>
                </div>
                <ul className="space-y-3">
                  <li className="text-base text-gray-600 leading-relaxed flex items-start">
                    <span className="text-blue-600 mr-2 text-lg">•</span>
                    15+ MW of solar installations across manufacturing facilities, reducing operational costs by 40-60%
                  </li>
                  <li className="text-base text-gray-600 leading-relaxed flex items-start">
                    <span className="text-blue-600 mr-2 text-lg">•</span>
                    Integrated energy storage systems providing 24/7 power security for critical manufacturing processes
                  </li>
                  <li className="text-base text-gray-600 leading-relaxed flex items-start">
                    <span className="text-blue-600 mr-2 text-lg">•</span>
                    Advanced monitoring systems ensuring 99.5%+ uptime for industrial solar installations
                  </li>
                </ul>
              </div>
            </div>

            {/* Commercial & Hospitality Sector */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-4">
                <img src={a2} alt="Commercial Solar Projects" className="w-full h-48 object-cover rounded-lg shadow" />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Building2 className="h-8 w-8 text-green-600 mr-3" />
                  <h2 className="text-2xl font-semibold text-gray-800">Commercial & Hospitality Leadership</h2>
                </div>
                <ul className="space-y-3">
                  <li className="text-base text-gray-600 leading-relaxed flex items-start">
                    <span className="text-green-600 mr-2 text-lg">•</span>
                    Premium hotel chains including ITC Hotels, Marriott, and Lemon Tree Hotels powered by our solar solutions
                  </li>
                  <li className="text-base text-gray-600 leading-relaxed flex items-start">
                    <span className="text-green-600 mr-2 text-lg">•</span>
                    3+ MW of commercial rooftop installations across office complexes and retail centers
                  </li>
                  <li className="text-base text-gray-600 leading-relaxed flex items-start">
                    <span className="text-green-600 mr-2 text-lg">•</span>
                    Integrated solar thermal systems providing hot water solutions for hospitality sector, saving 2+ million units annually
                  </li>
                </ul>
              </div>
            </div>

            {/* Government & Utility Projects */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-4">
                <img src={a3} alt="Government Solar Projects" className="w-full h-48 object-cover rounded-lg shadow" />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Award className="h-8 w-8 text-yellow-600 mr-3" />
                  <h2 className="text-2xl font-semibold text-gray-800">Government & Utility Partnerships</h2>
                </div>
                <ul className="space-y-3">
                  <li className="text-base text-gray-600 leading-relaxed flex items-start">
                    <span className="text-yellow-600 mr-2 text-lg">•</span>
                    Strategic partnerships with government bodies including HIMURJA and UJVNL for renewable energy projects
                  </li>
                  <li className="text-base text-gray-600 leading-relaxed flex items-start">
                    <span className="text-yellow-600 mr-2 text-lg">•</span>
                    Utility-scale solar installations contributing to state renewable energy targets and grid stability
                  </li>
                  <li className="text-base text-gray-600 leading-relaxed flex items-start">
                    <span className="text-yellow-600 mr-2 text-lg">•</span>
                    Advanced grid integration solutions supporting India's renewable energy transition goals
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Performance Indicators */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Performance Excellence</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <TrendingUp className="h-16 w-16 text-blue-600 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">System Performance</h3>
              <p className="text-gray-600 text-lg">99.5%+ average system uptime with predictive maintenance protocols</p>
            </div>
            <div className="text-center bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <Zap className="h-16 w-16 text-green-600 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Energy Efficiency</h3>
              <p className="text-gray-600 text-lg">20%+ higher energy yield through advanced tracking and optimization systems</p>
            </div>
            <div className="text-center bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <Award className="h-16 w-16 text-yellow-600 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Client Satisfaction</h3>
              <p className="text-gray-600 text-lg">100% project delivery on time with guaranteed performance warranties</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Achievements;