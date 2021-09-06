import React from "react";
import styled from "styled-components";
import a from "./webd.png";
import b from "./user.png";
import c from "./pc.png";

const Services = () => {
  return (
    <Container id="Services" style={{ backgroundColor: "white" }}>
      <Holder>
        <Image src={a} />

        <span>
          I design UI wireframes and layouts for smartphones and tablets that
          give life to your project/product using software applications like
          adobe XD
        </span>
      </Holder>
      <Holder>
        <Image src={b} />
        <span>
          I build intuitive, dynamic and user-friendly websites and webapps to
          cater for your unique preferences using HTML, CSS, Javascript,and
          React JS.
        </span>
      </Holder>
      <Holder>
        <Image src={c} />
        <span>
          I also render specialised and unique User Interface design for
          Desktops and PCs, as well as mobile.
        </span>
      </Holder>
    </Container>
  );
};

export default Services;
const Container = styled.div`
  display: flex;
  justify-content: center;

  flex-wrap: wrap;
  /* margin-top: 70px; */
  /* height: 100vh; */
  /* width: 100vw; */

  backround-color: #000000;
`;
const Holder = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: white; */
  /* color: white; */
  margin: 20px;
  span {
    font-weight: bold;
    font-size: 12px;
  }
`;
const Image = styled.img`
  height: 150px;
  width: 150px;
  /* background-color: purple; */
  color: black;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: 150px;
  object-fit: contain;
`;
