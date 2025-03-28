"use client";  // 👈 Yeh likhne se ab ye client component ban jayega

import { useParams } from "next/navigation";

const services = {
  "web-app": {
    title: "Web Application Development",
    description: "Unlock the potential of your business with custom web applications designed to elevate user experience and streamline operations. Utilizing the latest technologies, I create responsive and scalable web apps that adapt to any device and user requirement. By focusing on both functionality and aesthetics, I ensure your application not only meets but exceeds expectations. From concept to deployment, I guide you through each step, ensuring a seamless integration with existing systems. Let’s work together to develop a solution that empowers your business and engages your audience effectively.",
    img: "/assets/services/web-app.png",
  },
  "api-dev": {
    title: "API Development",
    description: "Enhance your application’s capabilities with tailored API development. I specialize in creating RESTful APIs that ensure secure and efficient data exchange between your systems. By leveraging best practices in API design and implementation, I deliver solutions that are not only scalable but also maintainable. Whether you need to integrate third-party services or build a microservices architecture, I’m here to help. My approach focuses on performance and security, ensuring your API can handle high traffic while protecting your data. Elevate your application’s functionality with a custom-built API designed to meet your specific needs.",
    img: "/assets/services/api-dev.png",
  },
  "frontend-dev": {
    title: "Frontend Development",
    description: "Transform your vision into a stunning reality with expert frontend development. I design and implement user interfaces that are not only visually appealing but also provide an intuitive user experience. Utilizing modern frameworks and technologies, I ensure your application is responsive, fast, and accessible on all devices. My focus lies in understanding user behavior and crafting interfaces that enhance interaction. By combining creativity with technical expertise, I deliver solutions that captivate users and drive engagement. Let’s collaborate to create a frontend that reflects your brand and resonates with your audience.",
    img: "/assets/services/frontend-dev.png",
  },
};

const ServiceDetail = () => {
  const { id } = useParams();  // 👈 Ye id URL se lega
  const service = services[id];

  return (
    <main className="bg-black grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center px-6 md:px-40 pt-36 md:pt-0 pb-10 md:pb-0 md:py-24">
          
           {/* left Side: Image */}
          <div>
            <img 
               src={service.img} 
               alt={service.title} 
               className="h-auto w-auto"
             />

          </div>
           
            {/* right Side: Text Content */}
            <div className="space-y-4">
                <h3 className="text-[var(--office-green)] font-semibold uppercase tracking-wide">
                    {service.title}
                </h3>
                <p className="text-white md:text-xl">
                    {service.description}
                </p>
            </div>
      </main>
  );
};

export default ServiceDetail;
