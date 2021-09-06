import About from "./Aboutcomp/About";
import Body from "./BodyComp/Body";
import Fotter from "./Footer/Fotter";
import Proj from "./Proj/Proj";
import Project from "./Roject/Project";
import Services from "./Services/Services";
import Thetwo from "./Thetwo";
import "antd/dist/antd.css";
import { button } from "antd";
import styled from "styled-components";

function App() {
  return (
    <div style={{ backgroundColor: " #dfdfdf" }}>
      {/* <Thetwo /> */}
      {/* <Body />
      <About />
      <Services />
      <Project />
      <Proj />
      <Fotter /> */}
      <Thetwo />
      <Body />
      <About />
      <Services />
      <Project />
      <Proj />
      <Fotter />
    </div>
  );
}

export default App;
