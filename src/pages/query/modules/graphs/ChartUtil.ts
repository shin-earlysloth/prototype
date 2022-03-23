import { EChartsOption } from "echarts";
import {
  BarLineType,
  GroupDataType,
  isBarLineType,
} from "../../../home/Graphs/type";

class ChartUtil {
  constructor(protected readonly graphData: GroupDataType) {}
  protected getChartData() {
    // if (this.graphData.type === "pie") {
    //   return this.getPieChartData();
    // }
    // if (this.graphData.type === "stack") {
    //   return this.getPieChartData();
    // }
    if (isBarLineType(this.graphData)) {
      return this.getBarLineChartData(this.graphData);
    }
  }

  // private getPieChartData() {
  //   return (
  //     this.graphData.series?.map((v, i) => ({
  //       value: v,
  //       name: this.graphData.labels && this.graphData.labels[i],
  //     })) ?? []
  //   );
  // }

  private getStackChartData() {}

  private getBarLineChartData(data: BarLineType) {
    return data.series.map((item) => ({
      data: item.values,
      name: item.name,
      axisLabel: {
        formatter: `{value} ${item.format ?? ""}`,
      },
    }));
  }
}

export default ChartUtil;
