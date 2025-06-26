
import { Building2, Droplets, Lightbulb } from 'lucide-react';
import p7 from '../assets/Product/p7.jpg';
import a1 from '../assets/achivements/a1.jpg';
import a2 from '../assets/achivements/a2.jpg';
import a3 from '../assets/achivements/a3.jpg';
import a4 from '../assets/achivements/a4.jpg';
import { useEffect, useState } from 'react';

const Achievements = () => {
  const [counts, setCounts] = useState({
    awards: 0,
    experience: 0,
    clients: 0,
    projects: 0
  });

  const targetCounts = {
    awards: 17,
    experience: 12,
    clients: 1000,
    projects: 1000
  };

  useEffect(() => {
    const duration = 2000; // Animation duration in milliseconds
    const steps = 50; // Number of steps in the animation
    const interval = duration / steps;

    const incrementCounts = (step: number) => {
      setCounts({
        awards: Math.min(Math.floor((targetCounts.awards * step) / steps), targetCounts.awards),
        experience: Math.min(Math.floor((targetCounts.experience * step) / steps), targetCounts.experience),
        clients: Math.min(Math.floor((targetCounts.clients * step) / steps), targetCounts.clients),
        projects: Math.min(Math.floor((targetCounts.projects * step) / steps), targetCounts.projects)
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Achievements</h1>
          <p className="text-xl max-w-4xl mx-auto">
            Celebrating our milestones in sustainable energy and environmental conservation.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-900 text-center mb-4">OUR WORKS</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>

          </div>

          <div className="mb-12">
            <div className="relative rounded-lg overflow-hidden">
              <img src={a4} alt="Team Working" className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/50"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-blue-900">{counts.awards}</div>
              <div className="mt-2 text-sm font-medium text-gray-600 uppercase tracking-wider">Awards Won</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-900">{counts.experience}+</div>
              <div className="mt-2 text-sm font-medium text-gray-600 uppercase tracking-wider">Years Experience</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-900">{counts.clients === 1000 ? '1000+' : counts.clients}</div>
              <div className="mt-2 text-sm font-medium text-gray-600 uppercase tracking-wider">Clients</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-900">{counts.projects === 1000 ? '1000+' : counts.projects}</div>
              <div className="mt-2 text-sm font-medium text-gray-600 uppercase tracking-wider">Projects</div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Industrial Achievements Section */}
        <div className="mb-16 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 p-4">
              <img src={a1} alt="Industrial Impact" className="w-full h-40 object-cover rounded-lg shadow" />
            </div>
            <div className="md:w-2/3 p-6">
              <div className="flex items-center mb-4">
                <Building2 className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-800">Industrial Impact</h2>
              </div>
              <ul className="space-y-3">
                <li className="text-base text-gray-600 leading-relaxed flex items-start">
                  <span className="text-blue-600 mr-2 text-lg">•</span>
                  Over 18 MW+ of Solar PV Installations across residential, government, and commercial sectors
                </li>
                <li className="text-base text-gray-600 leading-relaxed flex items-start">
                  <span className="text-blue-600 mr-2 text-lg">•</span>
                  Reducing more than 7,000 tons of carbon emissions annually
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Commercial Achievements Section */}
        <div className="mb-16 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row-reverse">
            <div className="md:w-1/3 p-4">
              <img src={a2} alt="Commercial Milestones" className="w-full h-40 object-cover rounded-lg shadow" />
            </div>
            <div className="md:w-2/3 p-6">
              <div className="flex items-center mb-4">
                <Droplets className="h-8 w-8 text-green-600 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-800">Commercial Milestones</h2>
              </div>
              <ul className="space-y-3">
                <li className="text-base text-gray-600 leading-relaxed flex items-start">
                  <span className="text-green-600 mr-2 text-lg">•</span>
                  Over 3 lakh liters of Solar Water Heaters installed, helping save approximately 4.5 million units of electricity every year
                </li>
                <li className="text-base text-gray-600 leading-relaxed flex items-start">
                  <span className="text-green-600 mr-2 text-lg">•</span>
                  Over 1 lakh liters of Heat Pumps installed in resorts, hotels, hostels, and households, reducing energy bills and boosting long-term savings
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Residential & Community Section */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 p-4">
              <img src={a3} alt="Residential Reach & Rural Impact" className="w-full h-40 object-cover rounded-lg shadow" />
            </div>
            <div className="md:w-2/3 p-6">
              <div className="flex items-center mb-4">
                <Lightbulb className="h-8 w-8 text-yellow-600 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-800">Residential Reach & Rural Impact</h2>
              </div>
              <ul className="space-y-3">
                <li className="text-base text-gray-600 leading-relaxed flex items-start">
                  <span className="text-yellow-600 mr-2 text-lg">•</span>
                  More than 900+ Solar Street Lights installed in remote villages of Uttarakhand, bringing light and improving rural livelihoods
                </li>
                <li className="text-base text-gray-600 leading-relaxed flex items-start">
                  <span className="text-yellow-600 mr-2 text-lg">•</span>
                  Custom Pumping Solutions deployed for diverse solar energy efficiency requirements, and active in Water Treatment Solutions including STPs, ETPs, and Rainwater Harvesting Systems
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Achievements;