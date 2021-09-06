import React from "react";
// import { BsCircle } from "react-icons/bs";
import styled from "styled-components";
import R from "./logo192.png";
import m from "./mongodb.png";
import f from "./firebase.png";
import js from "./jj.jpg";

import "./Project.css";
const Project = () => {
  return (
    <Container id="Project">
      <Exp>
        <span>6 Projects Done and Deployed</span>
        <span>1 year+ Experience</span>
      </Exp>
      <Holder>
        <Circle>
          <Js src={js} />

          <Mongo src={m} />
          <Fire src={f} />
          <div className="reactt"></div>
          <Reactt src={R} />
        </Circle>
      </Holder>
    </Container>
  );
};

export default Project;
const Container = styled.div`
  /* width: 100vw; */
  height: 100vh;
  background-color: #dfdfdf;
  /* padding-top: 50px; */
  /* display: flex;
  flex-direction: column; */
`;
const Exp = styled.div`
  display: flex;
  justify-content: center;

  span {
    margin: 50px;
    font-weight: bolder;
    font-size: 20px;
    color: #6c63ff;
    @media screen and (max-width: 320px) {
      font-size: 5px;
      font-weight: bolder;
    }
  }
`;

const Holder = styled.div`
  /* background: red; */

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  height: 100vh;
  width: 100%;
  /* margin-left: 200px; */
`;
const Circle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  height: 400px;
  width: 400px;
  border-radius: 200px;
  background-color: white;
  background: rgba(158, 155, 155, 0.816);
  box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: width 2s, height 2s, background-color 2s, transform 2s;
  &:hover {
    transform: rotate(360deg);
  }
  @media screen and (max-width: 425px) {
    height: 250px;
    width: 250px;
  }
  @media screen and (max-width: 768px) {
    &:hover {
      transform: none;
    }
  }
`;
const Js = styled.img`
  height: 60px;
  margin-top: 300px;
  margin-left: 30px;
  @media screen and (max-width: 425px) {
    height: 30px;
    margin-top: 35px;
  }
`;
const Mongo = styled.img`
  height: 60px;
  margin-right: 30px;
  margin-top: 180px;
  @media screen and (max-width: 425px) {
    height: 30px;
  }
`;
const Fire = styled.img`
  height: 60px;
  @media screen and (max-width: 425px) {
    height: 30px;
  }
`;
const Reactt = styled.img`
  height: 60px;
  margin-top: 160px;
  margin-right: 50px;
  @media screen and (max-width: 425px) {
    height: 30px;
  }
  position: stickey;
`;
