export type graphType =
  | "multi_pie"
  | "radar"
  | "line_smoth"
  | "vertical"
  | "line_bar"
  | "quadrant";

export type MultiPieChartType = {
  type: "multi_pie";
  innerText: string;
  charts: MultiPieChartDataType[][];
};

type MultiPieChartDataType = {
  name: string;
  value: number;
  ratio: string;
};

export type RadarChartType = {
  type: "radar";
  xAxis: string[];
  series: RadarChartDataType[];
};

type RadarChartDataType = {
  name: string;
  values: number[];
};

export type LineSmothType = {
  type: "line_smoth";
  xAxis: string[];
  series: LineSmothDataType;
};

type LineSmothDataType = {
  name: string;
  values: number[];
};

export type VerticalType = {
  type: "vertical";
  xAxis: string[];
  values: number[];
};
