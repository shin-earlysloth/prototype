import { css } from "@emotion/css";
import { number } from "echarts";
import EChartsReact from "echarts-for-react";
import React, { useRef } from "react";


interface IDountGroup {
  graphData: any;
  width: number;
}

const DountGraph = ({ graphData, width }: IDountGroup) => {
  const divRef = useRef<HTMLDivElement>(null);
//   const getOptions = new DountEChart(graphData).getChartOption()

  return (
    <>
      <div className={wrapper(width)} ref={divRef}>
        {/* <EChartsReact option={getOptions} />
        {divRef.current ? (
          <p
            className={innerValue(
              divRef.current.clientWidth,
              divRef.current.clientHeight,
              graphData.series[0] as number 
            )}
          >
            {graphData.series[0]}
          </p>
        ) : null} */}
      </div>
    </>
  );
};

const wrapper = (width: number) => css`
  position: relative;
  width: ${width}px;
`;
const innerValue = (width: number, top: number, valueLength: number) => css`
  margin: 0;
  position: absolute;
  top: ${top / 2.1}px;
  left: ${valueLength === 2 ? width / 2.15 : width / 2.2}px;
`;

export default DountGraph;
