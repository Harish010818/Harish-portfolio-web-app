
const projects = [
  {
    id: "space-exploration",
    title: "Space Exploration Site",
    desc: "This project is a visually stunning and interactive website built using React.js, React Router, and Tailwind CSS. Explore captivating destinations, stunning visuals, and engaging content about space exploration.",
    url: "https://space-travel-website-beta.vercel.app/",
    thumbnail: "/assets/Projects/space_home.png",
  },
  {
    id: "todo-web-app",
    title: "Todo-web-app",
    desc: "MERN To-Do Web App: A responsive and feature-rich To-Do app with user authentication (JWT-secured), full CRUD operations, and a sleek Tailwind CSS UI",
    url: "https://todo-web-app-r192.vercel.app/",
    thumbnail: "/assets/Projects/todo_home.png",
  },
  {
    id: "meme-generator",
    title: "Meme Generator App",
    desc: "This web application allows users to create custom memes by overlaying text on randomly fetched meme images. Built with React, this meme generator provides a fun and easy way for users to generate their own memes in just a few clicks.",
    url: "http://meme-generator-web-app.vercel.app/",
    thumbnail: "/assets/Projects/meme_page.png",
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
          <a key={project.id} href={project.url} target="_blank" rel="noopener noreferrer" className="overflow-hidden hover:scale-105 transition-all duration-300 group">
               <img src={project.thumbnail} alt={project.title} className="w-full h-[40vh] object-cover" />
               <div className="border border-gray-800 px-2 pb-2 md:h-50">
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
