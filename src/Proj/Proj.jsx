import React from "react";
// import maw from "./44.jpg";
import c from "./cloud.jpg";
import m from "./movie.jpg";
import my from "./myServices.png";
import sec from "./security.jpg";
import to from "./todo.jpg";
import uk from "./uk.png";
import styled from "styled-components";
const Proj = () => {
  return (
    <Component id="Proj">
      <br />
      <br />
      <br />
      <PP>Project</PP>
      <Holder>
        <Media>
          <Image src={c} />

          <Content>
            <span style={{ fontSize: "10px" }}>
              <center>
                {" "}
                <div style={{ fontSize: "15px" }}>Weather Application</div>
              </center>
              The Weather Application is used to check the Current Weather of a
              particular city or country
              <br />
              <a href="https://wetherreact.herokuapp.com">VISIT SITE</a>
            </span>
          </Content>
        </Media>
        <Media>
          <Image src={m} />
          <center>
            <div style={{ fontSize: "15px", color: "white" }}>Movie</div>
          </center>
          <Content>
            <span style={{ fontSize: "10px" }}>
              An E-commerce movie app where you see all the latest movie and
              watch(ND)
              <br />
              <a href="https://redux-movie.herokuapp.com">VISIT SITE</a>
            </span>
          </Content>
        </Media>
        <Media>
          <Image src={my} />
          <center>
            <div style={{ fontSize: "15px", color: "white" }}>Services</div>
          </center>
          <Content>
            <span style={{ fontSize: "10px" }}>
              A webapp that connects skilled people to people that needs their
              services(ND)
              <br />
              <a href="https://myservicecon.web.app">VISIT SITE</a>
            </span>
          </Content>
        </Media>
        <Media>
          <Image src={uk} />
          <center>
            <div style={{ fontSize: "15px", color: "white" }}>
              Udeme kitchen
            </div>
          </center>
          <Content>
            <span style={{ fontSize: "10px" }}>
              Food E-commerce site that people go there to order their meal(ND)
              <br />
              <a href="https://udemekitchen.herokuapp.com">VISIT SITE</a>
            </span>
          </Content>
        </Media>
        <Media>
          <Image src={to} />
          <center>
            <div style={{ fontSize: "15px", color: "white" }}>Todo</div>
          </center>
          <Content>
            <span style={{ fontSize: "10px" }}>
              An app that you organise and set your day to day activity
              <br />
              <a href="https://personeltodo.firebaseapp.com">VISIT SITE</a>
            </span>
          </Content>
        </Media>
        <Media>
          <Image src={sec} />
          <center>
            <div style={{ fontSize: "15px", color: "white" }}>
              AJ Report Center
            </div>
          </center>
          <Content>
            <span style={{ fontSize: "10px" }}>
              A web platform where people in the community can report crime
              going on in the society
              <br />
              <a href="https://security-dev-project.firebaseapp.com">
                VISIT SITE
              </a>
            </span>
          </Content>
        </Media>
      </Holder>
    </Component>
  );
};

export default Proj;
const Component = styled.div`
  background-color: #dfdfdf;
  /* height: 150vh; */
  width: 100%;
`;
const Holder = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
`;
const Media = styled.div`
  height: 240px;
  width: 240px;
  background-color: #2d2e32;
  margin: 50px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
`;
const Image = styled.img`
  object-fit: cover;
  height: 150px;
  width: 240px;
  border-radius: 5px 5px 0px 0px;
  transition: width 2s, height 2s, background-color 2s, transform 2s;
  &:hover {
    transform: rotate(-5deg);
  }
  @media screen and (max-width: 768px) {
    &:hover {
      transform: none;
    }
  }
`;
const Content = styled.div`
  display: flex;
  /* background-color: #535354; */
  margin-bottom: 90px;
  width: 240px;
  border-radius: 0px 0px 8px 8px;
  color: white;
  span {
    margin: 5px;
  }
  a {
    text-decoration: underline;
    &:hover {
      color: #a331a3;
    }
  }
`;
const PP = styled.div`
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 20px;
  /* margin-top: 30px; */
  /* padding-top: 30px; */
  color: #6c63ff;
`;
