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

type BarLineSeriesType = {
  name: string;
  format?: string;
  values: number[];
};

export type BarLineType = {
  type: "line_bar";
  xAxis: string[];
  series: BarLineSeriesType[];
};

export const isBarLineType = (v: GroupDataType): v is BarLineType => {
  return v.type === "line_bar";
};

export type GroupDataType =
  | MultiPieChartType
  | BarLineType
  | VerticalType
  | LineSmothType
  | RadarChartType;
export type QudrantType = {
  type: "quadrant";
  data: [number, number][];
};
