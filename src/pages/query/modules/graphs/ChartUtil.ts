import { EChartsOption } from "echarts";
import {
  BarLineType,
  GroupDataType,
  isBarLineType,
} from "../../../home/Graphs/type";

class ChartUtil {
  constructor(protected readonly graphData: GroupDataType) {}
  protected getChartData() {
    if (isBarLineType(this.graphData)) {
      return this.getBarLineChartData(this.graphData);
    }
  }

  private getBarLineChartData(data: BarLineType) {
    return data.series.map((item) => ({
      data: item.values,
      name: item.name,
    }));
  }
}

export default ChartUtil;
