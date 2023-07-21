import React from "react";
import styled from "styled-components";
import "./styles/styles.css";
import Wizard from "./components/Wizard";
import wizHat from "../src/img/wizhat.png";

function App() {
  return (
    <StyledApp>
      <StyledTitle>
        <StyledImg className="hatA" src={wizHat} alt="wiz-hat" />
        <h1>Weather Wizard</h1>
        <StyledImg className="hatB" src={wizHat} alt="wiz-hat" />
      </StyledTitle>
      <Wizard />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  background-color: #32174d;
  width: 100vw;
  height: 100vh;
`;

const StyledTitle = styled.div`
  padding: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    text-shadow: #ffd700 2px 2px;
    color: #9932cc;
    padding: 0rem 2rem;
    font-size: 3rem;
    font-family: "Snowburst One", cursive;
  }
  .hatA {
    transform: rotate(180deg);
    transition: 1s ease transform;
    &:hover {
      transform: rotate(540deg);
    }
    @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    }
  }
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    display: flex;
    margin: 2rem 0rem 2rem 0rem;
    padding: 0;
    h1 {
      text-align: center;
    }
  }
`;

const StyledImg = styled.img`
  transition: 1s ease transform;
  animation: 1s Flip linear infinite;
  &:hover {
    transform: rotate(360deg);
  }
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 30vw;
  }
`;

export default App;
