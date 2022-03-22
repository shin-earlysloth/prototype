import React from "react";
import styled from "styled-components";
import BackgroundImg from "./image-20220322110803108.png";

const SuspenseWrapper = () => {
  return (
    <Wrapper>
      <Center>
        <LoadingContainer>
          {Array.from({ length: 4 }).map(() => (
            <div />
          ))}
        </LoadingContainer>
      </Center>

      <Blur>
        <Background src={BackgroundImg} />
      </Blur>
    </Wrapper>
  );
};

export default SuspenseWrapper;

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const Background = styled.img`
  width: 700px;
  height: 800px;
`;

const Blur = styled.div`
  z-index: 10;
  filter: brightness(70%) blur(20px);

  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
`;

const LoadingContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #fac62d;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  div:nth-child(1) {
    left: 8px;
    animation: lds-ellipsis1 0.6s infinite;
  }
  div:nth-child(2) {
    left: 8px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  div:nth-child(3) {
    left: 32px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  div:nth-child(4) {
    left: 56px;
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }
`;

const Center = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  z-index: 20;
`;
