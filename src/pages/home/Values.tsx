import React, { useRef } from "react";
import { EChartsOption } from "echarts";
import { css, cx } from "@emotion/css";

import EChartsReact from "echarts-for-react";
import { useGetGraphData } from "../query/modules/reactQuery/useGetGraphData";
import styled from "@emotion/styled";
import { useEffect } from "react";

import DountGraph from "./Graphs/DountGraph";
import BarLineChart from "./Graphs/BarLineChart";
import { BarLineType } from "./Graphs/type";

const Values = () => {
  // const graphData = useGetGraphData({
  //   surveyId: 418507,
  //   version: 15,
  // });

  // 에러 바운더리 확인을 위해서 일부러 빈 데이터를 넘겨줌
  return (
    <>
      <BarLineChart
        graphData={
          {
            type: "line_bar",
            series: [],
          } as unknown as BarLineType
        }
      />
    </>
  );
};

export default Values;
