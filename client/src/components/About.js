import Link from "next/link";

const About = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2  gap-4 md:gap-16 items-center px-6 md:px-40 py-10 md:py-24">
            {/* Left Side: Text Content */}
            <div className="space-y-4">
                <h3 className="text-[var(--office-green)] font-semibold uppercase tracking-wide">
                    Crafting Digital Solutions
                </h3>
                <h1 className="text-2xl md:text-4xl font-bold">Your go-to full stack developer</h1>
                <p className="text-gray-600 md:text-xl">
                    Harish Chandra Juyal is a Full Stack Developer based in Delhi, 
                    specializing in modern web applications, APIs, and scalable solutions. 
                    With a strong foundation in both frontend and backend technologies, 
                    Harish brings innovative ideas to life through expertly crafted digital solutions.
                    This portfolio showcases a blend of skills, projects, and experience, 
                    all designed with a classic aesthetic and user-friendly dark mode/light 
                    mode feature to elevate the user experience.
                </p>
                <span  className="text-gray-600 cursor-pointer underline">
                   <Link href="#contact" className="">Get in touch </Link> 
                </span>
            </div>

            {/* Right Side: Image */}
            <div className="flex justify-center">
            <img 
               src="/assets/img-about.png" 
               alt="About Image" 
               className="h-fit md:h-[90vh] w-auto"
             />

            </div>
        </div>
    );
}

export default About;
