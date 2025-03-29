import Home from "@/components/sections/Home";
import About from "@/components/sections/About";
import Services from "./services/page";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import SmoothScrollWrapper from "@/components/wrapper/SmoothScrollWrapper";


const Children = () => {
  //main content
  return (
      <main>
          <SmoothScrollWrapper><section id="home"><Home /></section></SmoothScrollWrapper>
          <SmoothScrollWrapper><section id="about"><About /></section></SmoothScrollWrapper>
          <SmoothScrollWrapper><section id="services"><Services /></section></SmoothScrollWrapper>
          <SmoothScrollWrapper><section id="projects"><Projects /></section></SmoothScrollWrapper>
          <SmoothScrollWrapper><section id="contact"><Contact /></section></SmoothScrollWrapper>  
      </main>
  );
}
export default Children;
