import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import 'locomotive-scroll/dist/locomotive-scroll.css';

import Home from "./components/Home";
import Loading from "./components/Loading";
import Header from "./components/Header";
import CustomCursor from "./components/cursor/CustomCursor";
import Me from "./components/Me";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Projects2 from "./components/Projects2";
import Projects3 from "./components/Projects3";
import Workspace from "./components/Workspace";


function App() {
  const containerRef = useRef(null)

  return (
    <LocomotiveScrollProvider
      options={
        {
          smooth: true,
        }
      }
      containerRef={containerRef}
    >
      {/* <Loading /> */}
      <CustomCursor />
      <Header />
      <main className="main" data-scroll-container ref={containerRef}>
        <Home />
        <Me />
        <Workspace />
        <Projects />  
        <Projects2 />
        <Projects3 />        
        <Footer/>
      </main>
    </LocomotiveScrollProvider>
  );
}

export default App;