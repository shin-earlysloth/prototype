import { EChartsOption } from "echarts";
import { isRadarType, StackType } from "../../../home/Graphs/type";
import ChartUtil from "./ChartUtil";

class RadarChartUtil extends ChartUtil {
  protected getSeriesData() {
    if (isRadarType(this.graphData)) {
      const result: EChartsOption["series"] = this.graphData.series.map(
        (v) => ({
          name: v.name,
          type: "line",
          stack: "Total",
          areaStyle: {},
          emphasis: {
            focus: "series",
          },
          data: v.values,
        })
      );

      return result;
    }
    return [];
  }
}

class RadarChart extends RadarChartUtil {
  private readonly option: EChartsOption = {};
  constructor(protected readonly graphData: StackType) {
    super(graphData);
  }

  getOption() {
    this.option.grid = this.getGrid();
    this.option.xAxis = this.getXAxis();
    this.option.yAxis = this.getYAxis();
    this.option.series = this.getSeries();
    return { ...this.option };
  }

  private getGrid() {
    const result: EChartsOption["grid"] = {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    };
    return result;
  }

  private getXAxis() {
    const result: EChartsOption["xAxis"] = {
      type: "category",
      boundaryGap: false,
      data: this.graphData.xAxis,
    };
    return [result];
  }

  private getYAxis() {
    const result: EChartsOption["yAxis"] = {
      type: "value",
    };
    return [result];
  }

  private getSeries() {
    return super.getSeriesData();
  }
}

export default RadarChart;
