import { HandWavingAnimate } from "../wrapper/SmoothScrollWrapper";


const Home = () => {
  return (
    <div id="home" className="bg-fixed w-full min-h-[95vh] flex items-center">
      {/* to glass effect and blocking bg   */}
      {/* <div className="absolute h-[95vh] inset-0 bg-black/50"></div> */}

      <div className="px-6 md:ml-40 gap-12 grid z-20">
        <div>
          <div className="flex items-center justify-center  gap-3">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#4284FF] to-[#2ECC71] bg-clip-text text-transparent">Hi, I&apos;m Harish</h1>
            <HandWavingAnimate><span className="text-4xl md:text-[60px]">👋</span ></HandWavingAnimate>
          </div>
          <h2 className="text-xl mt-1.5 md:text-2xl text-[var(--rich-black)]">Full Stack Developer</h2>

        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--rich-black)]">Have a project in mind?</h1>
          <button className="cursor-pointer mt-6 w-44 md:w-52  py-3 font-bold bg-[var(--rich-black)] text-white rounded-lg hover:scale-105 ease-in-out duration-300">
            <a href="/intake" className="text-xs md:text-lg font-sans font-medium">Let's Get Started</a>
          </button>
        </div>


      </div>
    </div>
  )
}

export default Home;













{/* Decorative Wave */}
{/* <div className="relative w-full -mt-21 sm:-mt-48 pointer-events-none z-25">
            <svg
                className="w-full h-[120px] sm:h-[200px] lg:h-[220px]"
                viewBox="0 0 1440 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
            >
                <path
                    d="M0,0  C240,200 480,280 720,280  C960,280 1200,200 1440,0"
                    stroke="#fff"
                    strokeWidth="16"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M0,0  C240,200 480,280 720,280  C960,280 1200,200 1440,0  L1440,500 L0,500 Z"
                    fill="#D7E0E7"
                />
            </svg>
        </div> */}