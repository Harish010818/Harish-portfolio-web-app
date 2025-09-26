
const projects = [
  {
    id: "chat-app",
    title: "Real-time Chat Application",
    desc: "A responsive real-time chat application built using the MERN stack (MongoDB, Express.js, React, Node.js) with Socket.io for instant communication and JWT authentication for secure login. Users can chat in real-time, just like WhatsApp or Messenger.",
    url: "https://chat-web-app-h018.vercel.app/",
    thumbnail: "/assets/Projects/chat_home.png"
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
  },

  {
    id: "todo-web-app",
    title: "Todo-web-app",
    desc: "MERN To-Do Web App: A responsive and feature-rich To-Do app with user authentication (JWT-secured), full CRUD operations, and a sleek Tailwind CSS UI",
    url: "https://todo-web-app-r192.vercel.app/",
    thumbnail: "/assets/Projects/todo_home.png",
  }, 

];

const Projects = () => {
  return (
    <div className="grid gap-12 grid-cols-1 px-6 md:px-40 py-10 md:py-24">
      <div className="gap-4">
        <p className="uppercase font-bold text-sm text-[var(--office-green)]">Innovative solutions</p>
        <h1 className="text-2xl md:text-3xl font-bold text-black">Explore cutting-edge web-applications</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-4">
        {projects.map((project) => (
          <a key={project.id} href={project.url} target="_blank" rel="noopener noreferrer" className="overflow-hidden hover:scale-105 transition-all duration-300 group shadow shadow-gray-600">
               <img src={project.thumbnail} alt={project.title} className=" border border-gray-400" />
               <div className=" px-2 pb-2 md:h-50">
               <h2 className="text-xl font-semibold group-hover:text-[var(--office-green)]">{project.title}</h2>
               <p className="text-gray-600 mt-2">{project.desc}</p>
            </div>
         </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
