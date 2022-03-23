import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import Values from "./Values";

const Home = () => {
  return (
    <>
      <ErrorBoundary fallback={<p>에러!!</p>}>
        <Suspense fallback={<p>로딩중...</p>}>
          <Values />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default Home;
