import { GroupDataType } from "./type";

class ChartUtil {
  constructor(protected readonly graphData: GroupDataType) {}
  protected getChartData() {
    if (this.graphData.type === "pie") {
      return this.getPieChartData();
    }
    if (this.graphData.type === "stack") {
      return this.getPieChartData();
    }
  }

  private getPieChartData() {
    return (
      this.graphData.series?.map((v, i) => ({
        value: v,
        name: this.graphData.labels && this.graphData.labels[i],
      })) ?? []
    );
  }

  private getStackChartData() {}
}

export default ChartUtil;
