export type graphType =
  | "multi_pie"
  | "radar"
  | "line_smoth"
  | "vertical"
  | "line_bar"
  | "quadrant"
  | "stack";

export type MultiPieChartType = {
  type: "multi_pie";
  innerText: string;
  charts: MultiPieChartDataType[][];
};

export const isMultiPieChartType = (
  v: GroupDataType
): v is MultiPieChartType => {
  return v.type === "multi_pie";
};

type MultiPieChartDataType = {
  name: string;
  value: number;
  ratio: string;
};

export type RadarChartType = {
  type: "radar";
  xAxis: string[];
  series: MultiDataChartType[];
};

export type LineSmothType = {
  type: "line_smoth";
  xAxis: string[];
  series: MultiDataChartType[];
};

type MultiDataChartType = {
  name: string;
  values: number[];
};

export type VerticalType = {
  type: "vertical";
  xAxis: string[];
  values: number[];
};

export type QudrantType = {
  type: "quadrant";
  data: [number, number][];
};

export type StackType = {
  type: "stack";
  xAxis: string[];
  series: MultiDataChartType[];
};

export type BarLineType = {
  type: "line_bar";
  xAxis: string[];
  format: string;
  series: MultiDataChartType[];
};

export type GroupDataType =
  | MultiPieChartType
  | RadarChartType
  | LineSmothType
  | VerticalType
  | QudrantType
  | StackType
  | BarLineType;

export const isBarLineType = (v: GroupDataType): v is BarLineType =>
  v.type === "line_bar";

export const isRadarType = (v: GroupDataType): v is RadarChartType =>
  v.type === "radar";
