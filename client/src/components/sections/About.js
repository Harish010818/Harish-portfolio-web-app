const About = () => {
    return (
        <div className="flex justify-center items-center py-24   px-4 sm:px-6 md:py-24">
            <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-10 bg-[var(--isabelline)] rounded-3xl p-6 sm:p-10 md:p-16 shadow shadow-gray-300">

                {/* Left side text */}
                <div className="flex-1 text-center md:text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">About me</h2>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                        I am a Full Stack Developer based in Delhi,
                        specializing in modern web applications, APIs, and scalable solutions.
                        With a strong foundation in both frontend and backend technologies,
                        I bring innovative ideas to life through expertly crafted digital solutions.
                    </p>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        I love to create products that are quick to develop and easy to update.
                        My goal is to use technology to help businesses grow and succeed.
                    </p>
                </div>

                {/* Right side image */}
                <div className="relative flex-1 flex justify-center items-center">
                    {/* Decorative Circle */}
                    <div className="absolute -top-4 right-18 sm:right-12 h-20 w-20 sm:h-24 sm:w-24 bg-gray-200 rounded-full"></div>

                    {/* Background Box */}
                    <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-3xl shadow-md bg-gray-200 transform rotate-[88deg]"></div>

                    {/* Profile Image */}
                    <img
                        src="/assets/myprofile.jpeg"
                        alt="About me photo"
                        className="absolute object-cover w-52 h-52 sm:w-72 sm:h-72 rounded-3xl overflow-hidden shadow-md hover:cursor-pointer duration-300 ease-in-out hover:-translate-y-2"
                    />
                </div>
            </div>
        </div>
    );
}

export default About;
