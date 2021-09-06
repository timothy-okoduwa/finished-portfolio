import React from "react";
import styled from "styled-components";
// import { Button, Input } from "antd";
import d from "./design.png";
const About = () => {
  return (
    <Container id="About">
      <Con>
        <div>
          <Intro>introduction</Intro>
          <Name>Hey!!😄 i'm Timothy Okoduwa</Name>
        </div>
        <Type>A Focused and Dedicated Programmer</Type>
        <Me>
          Since i begin my journey with Codelab to become a software enginner ,
          that's the bold step i have ever taken in my life. I'm a very
          hardworking person, who always take projects been given to me serious
          and i delivered on time. I enjoy working with teams especially those
          that are serious for the business and also those that can think and
          bring out solutions. Trust me am the right choice you need for your
          business and web Application creation. Courteous, tenacious and
          enthusiastic, I am interested in software design & development as well
          as most things in its orbit.
        </Me>
        <Click>Get My CV</Click>
      </Con>
    </Container>
  );
};

export default About;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-image: url(${d});
  height: 100vh;
  /* width: 100vw; */
`;
const Con = styled.div`
  height: 500px;
  width: 300px;
  border-radius: 10px;
  background: rgba(218, 214, 214, 0.816);
  box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: width 2s, height 2s, transform 2s;
  &:hover {
    transform: rotate(-7deg);
  }
  /* backdrop-filter: blur(4px); */
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  align-item: center;
  margin-top: 30px;
  @media screen and (max-width: 768px) {
    margin: 2px;
    margin-top: 20px;
    &:hover {
      transform: none;
    }
  }

  div {
    display: flex;
    flex-direction: column;
  }
`;
const Intro = styled.div`
  margin-left: 20px;
  font-size: 15px;
`;
const Name = styled.div`
  font-size: 30px;
  margin-left: 10px;
  font-weight: bolder;
`;
const Type = styled.div`
  margin-left: 10px;
   {
    display: inline-block;
    overflow: hidden;
    letter-spacing: 2px;
    animation: typing 5s infinite steps(30, end), blink 0.75s step-end infinite;
    white-space: nowrap;
    font-size: 12.9px;
    font-weight: 7200;
    border-right: 4px solid orange;
    box-sizing: border-box;
  }
  @keyframes typing {
    from {
      width: 0%;
    }
    to {
      width: 100%;
    }
  }
  @keyframes blink {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: #aa00ff;
    }
  }
`;
const Me = styled.div`
  font-weight: bold;
  font-size: 15px;
  margin-left: 10px;
  margin-top: 10px;
  margin-right: 10px;
`;
const Click = styled.div`
  height: 30px;
  width: 150px;
  background-color: dimgrey;
  margin-left: 50px;
  margin-top: 20px;
  border-radius: 4px;
  color: white;
  padding-left: 40px;
  padding-top: 5px;
  box-shadow: 0 8px 32px 0 rgba(45, 51, 140, 0.439);
  transform: scaleX(3.3px);
  &:hover {
    background-color: purple;
    /* transition: all scaleX(2.3px); */
    transform: scaleX(0.3px);
  }
`;
