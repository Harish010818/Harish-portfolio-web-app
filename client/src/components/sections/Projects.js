
const projects = [
  {
    id: "chat-app",
    title: "Real-time Chat Application",
    desc: "A responsive real-time chat application built using the MERN stack (MongoDB, Express.js, React, Node.js) with Socket.io for instant communication and JWT authentication for secure login. Users can chat in real-time, just like WhatsApp or Messenger.",
    url: "https://chat-web-app-h018.vercel.app/",
    thumbnail: "/assets/Projects/chat_home.png"
  },

  {
    id: "quiz-app",
    title: "Quiz Web application",
    desc: "Developed an interactive quiz platform using React, Node.js, PostgreSQL, and Drizzle ORM, featuring category-wise challenges and a responsive dark mode interface for enhanced user engagement.",
    url: "https://quiz-web-app-self.vercel.app/",
    thumbnail: "/assets/Projects/quiz_home.png",
  },
  
  {
    id: "space-exploration",
    title: "Space Exploration Site",
    desc: "This project is a visually stunning and responsive website built using React.js, React Router, and Tailwind CSS. Explore captivating destinations, stunning visuals, and engaging content about space exploration.",
    url: "https://space-travel-website-beta.vercel.app/",
    thumbnail: "/assets/Projects/space_home.png",
  },
  {
    id: "api-proxy",
    title: "API Proxy Serve",
    desc: "Built a Node.js + Express proxy server supporting HTTP methods, cookie-based authentication, and in-memory caching. Developed a React-based UI for sending requests and viewing responses, inspired by API testing tools like Postman.",
    url: "https://postman-lite-nfhf.vercel.app",
    thumbnail: "/assets/Projects/api_proxy.png",
  }
];

const Projects = () => {
  return (
    <div className="grid gap-12 grid-cols-1 px-6 md:px-40 py-10 md:py-24">
      <div className="gap-4">
        <p className="uppercase font-bold text-sm bg-gradient-to-r from-[#4284FF] to-[#2ECC71] bg-clip-text text-transparent">Innovative solutions</p>
        <h1 className="text-2xl md:text-3xl font-bold text-[var(--rich-black)]">Explore cutting-edge web-applications</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 ">
        {projects.map((project) => (
          <a key={project.id} href={project.url} target="_blank" rel="noopener noreferrer" className="overflow-hidden hover:scale-110 transition-all duration-300 group shadow shadow-gray-600">
               <img src={project.thumbnail} alt={project.title} className="" />
               <div className=" px-2 pb-2 md:h-50">
               <h2 className="text-xl font-semibold group-hover:bg-gradient-to-r group-hover:from-[#4284FF] group-hover:to-[#2ECC71] group-hover:bg-clip-text group-hover:text-transparent">{project.title}</h2>
               <p className="text-gray-600 mt-2">{project.desc}</p>
            </div>
         </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
