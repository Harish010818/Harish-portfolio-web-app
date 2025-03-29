"use client";
import axios from "axios";
import { useEffect, useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        consent: false, // Initial false
      });

      const [loaded, setLoaded] = useState(false);

      useEffect( () => {
         setLoaded(true);
      }, [])
   
   
      // screen before mounted  
      if (!loaded) {
       return (
         <div className="flex flex-col items-center justify-center h-screen w-full bg-black text-white">
           <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-white mb-4"></div>
           <p className="text-4xl font-bold">Loading...</p>
         </div>
       );
     }
    
  
      const handleChange = (e) => {
        const { name, type, value, checked } = e.target;
        setFormData((prev) => ({
          ...prev,
            [name] : type === "checkbox" ? checked : value, // Checkbox ke liye `checked`, baaki fields ke liye `value`
        }));
      };


    const submitHandler = async(e) => {
        e.preventDefault();
      
        if (!formData.consent) {
            alert("Please allow consent before submitting.");  // ✅ Fast validation
            return;
        } 
          
        try {
             const res = await axios.post(
             `${import.meta.env.NEXT_PUBLIC_API_BASE_URL}/api/user/details`,
              formData,
              {
               headers :  {"Content-Type" : "application/json"},
               withCredentials : true     
             } 
        )
         
        if (!formData.consent) {
            alert("Please allow consent before submitting.");  // ✅ Fast validation
            return;
        }
        
        
        if(res) {
           alert(res.data.message);   
        }   
          
        } catch(err) {
           alert(err.response?.data?.message || "Something went wrong");  
        }
    } 


     return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center px-6 md:px-40 py-10 md:py-24">
            
            {/* Left Side: Contact Form */}
            <div className="space-y-6">
                <h3 className="text-[var(--office-green)] font-semibold uppercase tracking-wide">
                    Get In Touch
                </h3>
                <h1 className="text-3xl md:text-4xl font-bold">
                    Let&apos;s discuss your next project!
                </h1>


                <form className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-medium">Name <span className="text-red-400">*</span></label>
                        <input type="text"
                               name="name" 
                               onChange={handleChange} 
                               placeholder="John doe" 
                               className="w-60 md:w-96 px-4 py-2.5 border focus:outline-none focus:ring-2 focus:ring-gray-400"   
                            />
                      </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Email address <span className="text-red-400">*</span></label>
                        <input type="email" 
                               placeholder="johndoe@gmail.com" 
                               name="email"
                               onChange={handleChange}
                               className="w-60 md:w-96 px-4 py-2.5 border focus:outline-none focus:ring-2 focus:ring-gray-400"
                         />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Phone number <span className="text-red-400">*</span></label>
                        <input type="tel" 
                               placeholder="+91 9876543210" 
                               name="phone"
                               onChange={handleChange}
                               className="w-60 md:w-96 px-4 py-2.5 border focus:outline-none focus:ring-2 focus:ring-gray-400" 
                          />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium">Message</label>
                        <textarea rows="4" placeholder="Your message here..."
                                name="message"
                                onChange={handleChange}
                                className="w-60 md:w-96 px-4 py-2.5 border focus:outline-none focus:ring-2 focus:ring-gray-400"
                         ></textarea>
                    </div>

                    <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        id="consent"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                        className="w-4 h-4"
                     />
                        <label htmlFor="consent" className="text-gray-600 text-sm">
                         I allow this website to store my submission.
                        </label>
                    </div>

                    <button type="submit"
                            onClick={submitHandler} 
                            className="w-60 md:w-96 bg-[var(--office-green)] text-white py-2.5 px-4  hover:bg-[var(--hover-green)]"
                           >
                    Submit
                    </button>
              </form>
        </div>

            {/* Right Side: Contact Details */}
            <div className="bg-gray-100 p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-4">Get in touch</h3>
                <p className="text-gray-700 flex items-center gap-2">
                    <a href="mailto:devharishjuyal18@gmail.com" className="text-blue-600">devharishjuyal18@gmail.com</a>
                </p>
                <p className="text-gray-700 flex items-center gap-2">
                    <a href="" className="text-blue-600">8851871862</a>
                </p>
                <p className="text-gray-700 flex items-center gap-2 mt-2">
                    <span>New Delhi, INDIA</span>
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-2">Hours</h3>
                <p className="text-gray-600">Monday - Friday: 10:00am - 8:00pm</p>
                <p className="text-gray-600">Saturday: 10:00am - 5:00pm</p>
                <p className="text-gray-600">Sunday: 10:00am - 12:00pm</p>
            </div>
        </div>
    );
}

export default Contact;
