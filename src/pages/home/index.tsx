import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import type { FallbackProps } from "react-error-boundary";
import Values from "./Values";
import { ErrorCode } from "./error";

const Home = () => {
  return (
    <>
      <ErrorBoundary FallbackComponent={ChartErrorFallback}>
        <Suspense fallback={<p>로딩중...</p>}>
          <Values />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default Home;

// TODO: 타입 지정해야 함
const ChartErrorFallback = ({ error, resetErrorBoundary }: any) => {
  console.log("error: ", JSON.stringify(error));
  return (
    <div role="alert">
      <p>에러가 터짐:</p>
      <pre>{error.message}</pre>
      <pre>{error.errorCode}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};
