import React from "react";
import styled from "styled-components";
import useGetReplier from "../service/getReplier";

const Box = () => {
  const { data, error } = useGetReplier("051813", 2);

  return (
    <BoxWrapper>
      <h1>선택지입니다. {JSON.stringify(data?.data)}</h1>
    </BoxWrapper>
  );
};

const BoxWrapper = styled.div`
  background-color: #989898;
  color: white;
`;

export default Box;
