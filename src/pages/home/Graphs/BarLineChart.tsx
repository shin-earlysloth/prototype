import EChartsReact from "echarts-for-react";
import BarLineEChart from "../../query/modules/graphs/BarLineEChart";
import { BarLineType } from "./type";

interface IBarLineChartProps {
  graphData: BarLineType;
}

// TODO: 여기 컴포넌트를 렌더링하기 이전에 타입 가드를 적용한 스위처 컴포넌트에서 차트 타입에 알맞는 컴포넌트를 렌더링한다.
// 에러는 처리하지 않는다. BarLineEChart 내부에서 에러가 발생하면 throw new Error 를 실행하고, ErrorBoundary에 있는 fallback 컴포넌트가 렌더링 되면서
// 아래 내용은 무조건 정상적인 동작에, 데이터가 잘 들어가 있음이 보장된다.

const BarLineChart = ({ graphData }: IBarLineChartProps) => {
  const option = new BarLineEChart(graphData).getChartOption();

  return <EChartsReact option={option} />;
};

export default BarLineChart;
