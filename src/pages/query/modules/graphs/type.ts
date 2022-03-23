export type GroupDataType = IPieData | IStackData;
export interface IPieData {
  question_orders: number[] | undefined;
  question: string;
  questionNum: number;
  type: "pie";
  series: number[];
  labels: string[];
  xAxis: string[];
  proportion: string[];
  elapsed: string[];
  image_selections: string[];
  score: number;
  series_point: number | null[];
}

export interface IStackData {
  question_orders: number[] | undefined;
  question: string;
  questionNum: number;
  type: "stack";
  series: number[][];
  labels: string[];
  xAxis: string[];
  proportion: string[];
  elapsed: string[];
  image_selections: string[];
  score: number;
  series_point: number | null[];
}
