


const  Home = () => {
  return (
          <div id="home" className="bg-fixed bg-home-mobile md:bg-home-desktop w-full h-[95vh] bg-cover bg-center bg-no-repeat flex items-center">
              {/* to glass effect and blocking bg   */}
              <div className="absolute h-[95vh] inset-0 bg-black/50"></div> 

              <div className="px-6 md:ml-40 grid z-20">
                 <h1 className="text-4xl md:text-6xl font-bold text-white">Hi, I'm Harish</h1>
                 <h2 className="text-xl mt-1.5 md:text-2xl text-white">Full Stack Developer</h2>
                 <button className="uppercase mt-6 w-44 md:w-52  py-3 font-bold bg-[var(--office-green)] text-white hover:bg-[var(--hover-green)]">
                  <a href="#services" className="text-xs md:text-lg font-sans tracking-wider">View Services</a> 
                 </button>
             </div>
    </div>   
  )
}

export default Home;
