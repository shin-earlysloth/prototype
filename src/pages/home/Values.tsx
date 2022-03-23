import React, { useRef } from "react";
import { EChartsOption } from "echarts";
import { css, cx } from "@emotion/css";

import EChartsReact from "echarts-for-react";
import { useGetGraphData } from "../query/modules/reactQuery/useGetGraphData";
import styled from "@emotion/styled";
import { useEffect } from "react";

import DountGraph from "./Graphs/DountGraph";

const Values = () => {
  const graphData = useGetGraphData({
    surveyId: 418507,
    version: 15,
  });

  return (
    <>
      adf
    </>
  );
};

export default Values;
