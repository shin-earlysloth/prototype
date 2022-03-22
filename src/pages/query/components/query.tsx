import React, { Suspense } from "react";
import styled from "styled-components";
import Box from "./box";
import SuspenseWrapper from "./suspenseWrapper";
import { ErrorBoundary } from "react-error-boundary";
import { useQueryErrorResetBoundary } from "react-query";

const Query = () => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <QueryWrapper>
      <ErrorBoundary
        onReset={reset}
        fallbackRender={({ resetErrorBoundary }) => (
          <div>
            There was an error!
            <button onClick={() => resetErrorBoundary()}>Try again</button>
          </div>
        )}
      >
        <Suspense fallback={<SuspenseWrapper />}>
          <Box />
        </Suspense>
      </ErrorBoundary>
    </QueryWrapper>
  );
};

export default Query;

const QueryWrapper = styled.div`
  width: 700px;
  height: 800px;

  align-items: center;
  justify-content: center;
  display: flex;
  border: 1px solid black;
`;
