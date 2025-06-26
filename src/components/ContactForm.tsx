import { useState } from "react"; 
 
 export default function ContactForm() { 
   const [status, setStatus] = useState(""); 
 
   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => { 
     e.preventDefault(); 
     const form = e.target as HTMLFormElement; 
     const data = new FormData(form); 
 
     const response = await fetch("https://formspree.io/f/xgvynnzk", { 
       method: "POST", 
       body: data, 
       headers: { 
         Accept: "application/json", 
       }, 
     }); 
 
     if (response.ok) { 
       setStatus("Thank you for your inquiry! Our enterprise team will contact you within 24 hours."); 
       form.reset(); 
     } else { 
       setStatus("There was an issue submitting your request. Please try again or call us directly."); 
     } 
   }; 
 
   return ( 
     <div className="max-w-xl mx-auto p-4 bg-white shadow-lg rounded-lg mt-10"> 
       <h2 className="text-2xl font-bold mb-2 text-center">Enterprise Solar Consultation</h2> 
       <p className="text-center mb-6 text-gray-500"> 
         Get a customized industrial solar solution for your facility 
       </p> 
       <form onSubmit={handleSubmit} className="space-y-4"> 
         <input 
           type="text" 
           name="name" 
           placeholder="Contact Person Name" 
           required 
           className="w-full p-3 border rounded" 
         /> 
         <input 
           type="text" 
           name="company" 
           placeholder="Company/Organization Name" 
           required 
           className="w-full p-3 border rounded" 
         />
         <input 
           type="tel" 
           name="phone" 
           placeholder="Business Phone Number" 
           required 
           className="w-full p-3 border rounded" 
         />
         <input 
           type="email" 
           name="email" 
           placeholder="Business Email Address" 
           required 
           className="w-full p-3 border rounded" 
         />
         <input 
           type="text" 
           name="location" 
           placeholder="Facility Location (City, State)" 
           required 
           className="w-full p-3 border rounded" 
         />
         <select 
           name="project_type" 
           required 
           className="w-full p-3 border rounded" 
         >
           <option value="">Select Project Type</option>
           <option value="utility_scale">Utility-Scale Solar Farm (5MW+)</option>
           <option value="commercial_rooftop">Commercial Rooftop (100kW-5MW)</option>
           <option value="industrial_rooftop">Industrial Rooftop (1MW+)</option>
           <option value="energy_storage">Energy Storage System</option>
           <option value="microgrid">Microgrid Solution</option>
           <option value="consultation">Initial Consultation</option>
         </select>
         <textarea 
           name="message" 
           placeholder="Project Details (Current energy consumption, facility type, timeline, etc.)" 
           required 
           rows={4}
           className="w-full p-3 border rounded" 
         /> 
         <button 
           type="submit" 
           className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition w-full" 
         > 
           Request Enterprise Consultation
         </button> 
         {status && <p className={`mt-4 ${status.includes('Thank you') ? 'text-green-600' : 'text-red-600'}`}>{status}</p>} 
       </form> 
     </div> 
   ); 
 }