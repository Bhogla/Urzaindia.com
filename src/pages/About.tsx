
import { CheckCircle, Lightbulb, Handshake, TrendingUp, Zap, BatteryCharging, Sun, Settings, Shield, DollarSign } from 'lucide-react';
import aboutBg from '../assets/about.jpg';

const About = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-20 bg-cover bg-center" style={{ backgroundImage: `url(${aboutBg})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for better text readability */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Urza India - Powering a Sustainable Tomorrow</h1>
          <p className="text-xl max-w-3xl">
            Welcome to Urza India, a trusted name in the field of renewable energy.
          </p>
        </div>
      </section>

      {/* About Us Section */}

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">About Us</h2>
          <p className="mb-4">
            Founded in 2015 in the serene landscape of Dehradun, Uttarakhand, Urza India was born from a commitment to make sustainable energy accessible and reliable for all. While our company was established in 2015, our core team brings over a decade of collective experience in solar photovoltaic and thermo-technology, forming a deep foundation of expertise and innovation.
          </p>
          <p className="mb-4">
            Today, Aasna Urza India Pvt. Ltd. is a leading EPC (Engineering, Procurement, and Construction) provider, offering a complete portfolio of solar energy and energy-efficient products. From our headquarters in Dehradun and service offices in New Delhi and Chandigarh, we design, integrate, and build custom solutions that empower homes, businesses, and communities across the nation.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl max-w-3xl mx-auto">
            "To provide high-quality products in renewable energy, backed by professional project management, unwavering contract loyalty, and dedicated customer support." We strive to be more than just a provider; we aim to be your trusted partner on the journey to energy independence.
          </p>
        </div>
      </section>

      {/* Why Choose Urza India Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10 text-center">Why Choose Urza India?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <CheckCircle className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Comprehensive Expertise</h3>
              <p>We are your one-stop solution for a vast range of services, including Grid-Interactive & Hybrid Solar Power Plants, Solar Thermotechnology, advanced Pumping Solutions, and robust Mounting Structures.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <Lightbulb className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Leading-Edge Technology</h3>
              <p>We leverage modern infrastructure and a highly skilled team to manufacture and implement high-efficiency renewable energy products. Our commitment to quality minimizes waste, accelerates project timelines, and ensures superior performance and warranty.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <Handshake className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Trusted Partnerships</h3>
              <p>Our quality is backed by our association with industry giants like WAAREE, Luminous, Exide, Bosch, Jaquar, TATA, Adani, Grundfos, and Sungrow, ensuring every component we use meets the highest standards.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <TrendingUp className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Proven Track Record</h3>
              <p>We are proud to have served a diverse clientele, including government bodies like Himurja and UJVNL, and prestigious brands like ITC Hotels, Marriott, and Lemon Tree Hotels. Our work speaks for itself, with over 1000 satisfied customers and counting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Our Solar Solutions: A Deep Dive into Off-Grid Systems */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Understanding Our Solar Solutions: A Deep Dive into Off-Grid Systems</h2>
          <p className="mb-4 text-center max-w-3xl mx-auto">
            While we are experts in Grid-Interactive (On-Grid) and Hybrid systems, we understand that energy independence is crucial, especially in areas with unreliable grid access. This is where our Off-Grid solutions shine.
          </p>
          <p className="mb-8 text-center max-w-3xl mx-auto">
            An Off-Grid, or Stand-Alone, solar power system operates completely independently from the main utility grid. It's a self-sufficient power island, generating, storing, and delivering electricity on your terms. This makes it the perfect solution for remote homes, agricultural farms, and any location where grid connectivity is a challenge.
          </p>

          <h3 className="text-2xl font-bold mb-6 text-center">Core Components of an Urza Off-Grid System</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <Zap className="h-12 w-12 text-blue-600 mb-4" />
              <h4 className="text-xl font-semibold mb-2">High-Efficiency Solar Panels</h4>
              <p>We use top-tier Poly-Crystalline or Mono-Crystalline modules that capture maximum sunlight and convert it into DC electricity, forming the powerhouse of your system.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <Settings className="h-12 w-12 text-blue-600 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Advanced Solar Inverter</h4>
              <p>The heart of the system, our inverters (including Hybrid models) expertly convert the DC power from your panels and batteries into the AC power that runs your home appliances.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <BatteryCharging className="h-12 w-12 text-blue-600 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Reliable Battery Storage</h4>
              <p>In an off-grid system, batteries are essential. During the day, excess energy generated by the panels is stored in high-quality batteries (Lead-Acid/SMF or LiFePo4). This stored power ensures your home remains lit and functional through the night and during cloudy days.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <Sun className="h-12 w-12 text-blue-600 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Intelligent Charge Controller</h4>
              <p>This device manages the flow of energy. It optimizes the charging of your batteries to extend their lifespan and efficiently directs power to the inverter for immediate use.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <Shield className="h-12 w-12 text-blue-600 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Robust Mounting Structures</h4>
              <p>A solar plant is only as strong as its foundation. We provide heavy-duty GI mounting structures, including advanced Single and Dual-Axis Auto-Tracking systems that follow the sun's path to maximize your energy generation by up to 30%.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <Settings className="h-12 w-12 text-blue-600 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Balance of System (BOS)</h4>
              <p>We ensure total safety and efficiency with a complete set of solar accessories, including DC/AC cables, combiner boxes, lightning arrestors, and proper earthing.</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold mt-12 mb-6 text-center">How Does an Urza Off-Grid System Work?</h3>
          <div className="relative flex flex-col items-center">
            <div className="absolute h-full w-1 bg-blue-300 rounded-full" style={{ left: '50%', transform: 'translateX(-50%)' }}></div>
            {[{
              title: "Step 1: Capture",
              description: "Solar panels absorb sunlight and generate DC electricity.",
              icon: <Sun className="h-8 w-8 text-white" />
            }, {
              title: "Step 2: Manage",
              description: "The current flows to a charge controller, which intelligently distributes it.",
              icon: <Settings className="h-8 w-8 text-white" />
            }, {
              title: "Step 3: Power & Store",
              description: "The charge controller sends electricity to the inverter to power your appliances. Any surplus power is used to charge the batteries.",
              icon: <BatteryCharging className="h-8 w-8 text-white" />
            }, {
              title: "Step 4: Convert",
              description: "The solar inverter converts the DC electricity (from panels or batteries) into usable AC electricity.",
              icon: <Zap className="h-8 w-8 text-white" />
            }, {
              title: "Step 5: Use",
              description: "The AC power runs your lights, fans, pumps, and other appliances, day or night.",
              icon: <CheckCircle className="h-8 w-8 text-white" />
            }].map((step, index) => (
              <div key={index} className={`flex items-center w-full mb-8 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                <div className="w-1/2 p-4">
                  <div className={`relative ${index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
                    <div className="absolute top-1/2 -translate-y-1/2 bg-blue-600 rounded-full p-3 z-10"
                         style={index % 2 === 0 ? { right: '-2.5rem' } : { left: '-2.5rem' }}>
                      {step.icon}
                    </div>
                    <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                </div>
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold mt-12 mb-6 text-center">Benefits of an Urza Off-Grid System</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <CheckCircle className="h-12 w-12 text-blue-600 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Complete Energy Independence</h4>
              <p>Say goodbye to power cuts and reliance on an unstable grid. You are in full control of your power supply.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <Zap className="h-12 w-12 text-blue-600 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Power for Remote Locations</h4>
              <p>It's the ideal solution for rural villages, farms, and off-grid homes where extending utility lines is impossible or prohibitively expensive.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <DollarSign className="h-12 w-12 text-blue-600 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Long-Term Savings</h4>
              <p>While the initial investment includes batteries, an off-grid system eliminates your monthly electricity bills, leading to significant long-term financial returns.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <Lightbulb className="h-12 w-12 text-blue-600 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Environmental Responsibility</h4>
              <p>Generate clean, green electricity and significantly reduce your carbon footprint.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;