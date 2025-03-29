// import Link from "next/link";

// const services = [
//   {
//     id: "web-app",
//     name: "Web Application Development",
//     desc: "Crafting high-performance web applications tailored for your needs.",
//     img: "/assets/services/web-app.png",
//   },
//   {
//     id: "api-dev",
//     name: "API Development",
//     desc: "Building robust APIs to enhance connectivity and functionality.",
//     img: "/assets/services/api-dev.png",
//   },
//   {
//     id: "frontend-dev",
//     name: "Frontend Development",
//     desc: "Creating engaging and intuitive user interfaces for web applications.",
//     img: "/assets/services/frontend-dev.png",
//   },
// ];

// const Services = () => {
//   return (
//     <div className="grid gap-12 grid-cols-1 px-6 md:px-40 py-10 md:py-24 bg-services">
//       <div className="gap-4 text-white">
//         <p className="uppercase font-bold text-sm tracking-wider">Expert web solutions</p>
//         <h1 className="text-2xl md:text-3xl font-bold">
//           Innovative applications for your needs
//         </h1>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-4">
//         {services.map((service) => (
//           <Link
//             key={service.id}
//             href={`/Service/${service.id}`}
//             className="bg-[var(--dark-green)] text-white overflow-hidden hover:scale-100  md:hover:scale-105 transition-all duration-300 cursor-pointer group"
//           >
//             <img
//               src={service.img}
//               alt={service.name}
//               className="w-full h-[40vh] object-cover"
//             />
//             <div className="p-6">
//               <h2 className="text-xl font-semibold transition-all duration-300 group-hover:text-[var(--office-green)]">
//                 {service.name}
//               </h2>
//               <p className="text-gray-300 mt-2">{service.desc}</p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Services;
