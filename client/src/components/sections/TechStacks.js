import { FaNodeJs, FaReact, FaAws, FaDocker } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiOpenai } from "react-icons/si";

const techStack = [
  { name: "NextJS", icon: <SiNextdotjs size={40} className="text-black" /> },
  { name: "Tailwind", icon: <SiTailwindcss size={40} className="text-sky-500" /> },
  { name: "ReactJS", icon: <FaReact size={40} className="text-sky-400" /> },
  { name: "Postgres", icon: <BiLogoPostgresql size={40} className="text-blue-900" /> },
  { name: "NodeJS", icon: <FaNodeJs size={40} className="text-green-600" /> },
  { name: "OpenAI", icon: <SiOpenai size={40} className="text-gray-800" /> },
  { name: "MongoDB", icon: <SiMongodb size={40} className="text-green-500" /> },
  { name: "Docker", icon: <FaDocker size={40} className="text-sky-600" /> },
  { name: "AWS", icon: <FaAws size={40} className="text-orange-500" /> },
  { name: "Redis", icon: <DiRedis size={45} className="text-red-700" /> }
];

const Techstacks = () => {
  return (
     <div className="py-16 px-6 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-10">
        Technologies I Work With
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {techStack.map((tech, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow shadow-gray-400 hover:-translate-y-2.5 duration-300 ease-in-out"
          >
            {tech.icon}
            <span className="mt-3 text-gray-700 font-medium">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Techstacks;
