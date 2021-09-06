import React from "react";
import styled from "styled-components";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { AiOutlineDoubleRight } from "react-icons/ai";
import whatsapp from "./whats.png";
import git from "./g.png";
import l from "./lin.png";
import fb from "./fb.png";
const Fotter = () => {
  return (
    <Container id="Fotter">
      <Name id="Body">
        <AiOutlineDoubleLeft style={{ color: "black" }} />
        Timothy
        <AiOutlineDoubleRight style={{ color: "black" }} />
      </Name>
      <Develope>Developed by Timothy💻|© 2021</Develope>
      <Cont>
        <a href="https://wa.me/+2349045339820">
          {" "}
          <Image src={whatsapp} />{" "}
        </a>
        <a href="https://github.com/timothy-okoduwa">
          {" "}
          <Image src={git} />
        </a>
        <a href="https://www.linkedin.com/in/timothy-okoduwa-3845ab215/">
          {" "}
          <Image src={l} />
        </a>
        <a href="https://www.facebook.com/timmy.lee.37669528">
          {" "}
          <Image src={fb} />
        </a>
      </Cont>
    </Container>
  );
};

export default Fotter;

const Container = styled.div`
  height: 100px;
  /* width: 100vw; */
   {
    background: linear-gradient(
      295deg,
      #00d0ff,
      #daeaee,
      #0c99f9,
      #f90cc6,
      #94231d
    );
    background-size: 1000% 1000%;

    -webkit-animation: AnimationName 18s ease infinite;
    -moz-animation: AnimationName 18s ease infinite;
    -o-animation: AnimationName 18s ease infinite;
    animation: AnimationName 18s ease infinite;
  }

  @-webkit-keyframes AnimationName {
    0% {
      background-position: 0% 15%;
    }
    50% {
      background-position: 100% 86%;
    }
    100% {
      background-position: 0% 15%;
    }
  }
  @-moz-keyframes AnimationName {
    0% {
      background-position: 0% 15%;
    }
    50% {
      background-position: 100% 86%;
    }
    100% {
      background-position: 0% 15%;
    }
  }
  @-o-keyframes AnimationName {
    0% {
      background-position: 0% 15%;
    }
    50% {
      background-position: 100% 86%;
    }
    100% {
      background-position: 0% 15%;
    }
  }
  @keyframes AnimationName {
    0% {
      background-position: 0% 15%;
    }
    50% {
      background-position: 100% 86%;
    }
    100% {
      background-position: 0% 15%;
    }
  }
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  padding-left: 50px;
`;
const Name = styled.div`
  font-weight: bold;
  /* font-size: 20px; */
  margin-top: 10px;
  color: #6c6464;
  cursor: pointer;
  text-transform: uppercase;
`;
const Develope = styled.div`
  margin-top: 10px;
  font-weight: bold;
  /* font-size:15px; */
`;
const Cont = styled.div``;
const Image = styled.img`
  height: 40px;
  margin: 5px;
  @media screen and (max-width: 425px) {
    height: 20px;
  }
`;
