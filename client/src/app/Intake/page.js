"use client";
import { useEffect, useState } from "react";
import axios from "axios";

const IntakeForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        services: [],
        deadline: "",
        budget: "",
        technologies: [],
        projectDetails: "",
        additionalComments: "",
    });

   const [loaded, setLoaded] = useState(false);

   useEffect( () => {
      setLoaded(true);
   }, [])


   // screen before mounted  
   if (!loaded) {
    return (
      <div className="flex flex-col items-center justify-center h-screen w-full bg-black text-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white mb-4"></div>
        <p className="text-xl md:text-4xl font-bold">Loading...</p>
      </div>
    );
  }


   const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
        setFormData((prev) => ({
            ...prev, [name]: checked ? [...prev[name], value] : prev[name].filter((item) => item !== value),
         }));
       } 
         else {
           setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

  
    
    const submitHandler = async(e) => {
        e.preventDefault();
        try {
             const res = await axios.post(
             `${import.meta.env.NEXT_PUBLIC_API_BASE_URL}/api/user/intake`,
              formData,
              {
               headers :  {"Content-Type" : "application/json"},
               withCredentials : true     
              } 
           )
           
        if(res) {
           alert(res.data.message);   
        }   
          
        } catch(err) {
          alert(err.response?.data?.message || "Something went wrong");  
      }
  } 


  return (
    <div className="grid grid-cols-1 items-center md:max-w-3xl pt-36 pb-10 md:py-40 px-6 md:px-0 md:mx-auto">
       <h3 className="text-[var(--office-green)] font-semibold uppercase tracking-wide mb-2">Intake form</h3>
        <h1 className="text-3xl md:text-4xl font-bold mb-10">Help us serve you better</h1> 

        {/* onSubmit={handleSubmit} */}
      <form className="space-y-4">
         {/* Name */}
        <div>
          <label className="block font-medium">Name <span className="text-red-600">*</span></label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-gray-500"
            // required
            placeholder="Jane Smith"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium">Email address <span className="text-red-600">*</span></label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-gray-500"
            // required
            placeholder="email@website.com"
          />
        </div>

        {/* Services */}
        <div>
          <label className="block font-medium">What services are you interested in?</label>
          {["Web Development", "API Development", "Scalable Solutions", "Consultation"].map((service) => (
            <div key={service}>
              <input
                type="checkbox"
                name="services"
                value={service}
                checked={formData.services.includes(service)}
                onChange={handleChange}
                className="mr-2"
              />
              <span>{service}</span>
            </div>
          ))}
        </div>

        {/* Project Deadline */}
        <div>
          <label className="block font-medium">What is your project deadline?</label>
          <input
            type="date"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-gray-500"
          />
        </div>

        {/* Budget Range */}
        <div>
            <label className="block font-medium">What is your budget range?</label>
            <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-500"
            >
                <option value="">Select</option>
                <option value="Under ₹50,000">Under ₹50,000</option>
                <option value="₹50,000 - ₹2,00,000">₹50,000 - ₹2,00,000</option>
                <option value="₹2,00,000 - ₹5,00,000">₹2,00,000 - ₹5,00,000</option>
                <option value="Over ₹5,00,000">Over ₹5,00,000</option>
            </select>
        </div>

        {/* Technologies */}
        <div>
          <label className="block font-medium">What technologies are you planning to use?</label>
          {["HTML", "CSS", "JavaScript", "React", "Node.js", "Python", "PHP"].map((tech) => (
            <div key={tech}>
              <input
                type="checkbox"
                name="technologies"
                value={tech}
                checked={formData.technologies.includes(tech)}
                onChange={handleChange}
                className="mr-2"
              />
              <span>{tech}</span>
            </div>
          ))}
        </div>

        {/* Project Details */}
        <div>
          <label className="block font-medium">Please describe your project in detail.</label>
          <textarea
              name="projectDetails"
              value={formData.projectDetails}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-gray-500 h-28"
              placeholder="Describe your project..."
          />
        </div>

        {/* Additional Questions */}
        <div>
          <label className="block font-medium">Additional questions or comments</label>
          <textarea
             name="additionalComments"
             value={formData.additionalComments}
             onChange={handleChange}
             className="w-full px-4 py-2.5 border border-gray-500 h-28"
             placeholder="Enter any additional questions or comments..."
          />
        </div>

        {/* Submit Button */}
        <button 
           type="submit" 
           className="w-full px-4 py-2.5 hover:bg-[var(--hover-green)]  
           bg-[var(--office-green)]"
           onClick={submitHandler}
          > 
          Submit
        </button>
      </form>
    </div>
  );
};

export default IntakeForm;
