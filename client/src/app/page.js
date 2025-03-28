import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Home from "@/components/Home";
import SmoothScrollWrapper from "@/components/Animation/SmoothScrollWrapper";

const Children = () => {
  // main content
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
