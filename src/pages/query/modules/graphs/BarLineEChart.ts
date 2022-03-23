import { EChartsOption } from "echarts";
import ChartError, { ErrorCode } from "../../../home/error";
import { BarLineType } from "../../../home/Graphs/type";
import ChartUtil from "./ChartUtil";

class BarLineEChart extends ChartUtil {
  private readonly option: EChartsOption = {};

  constructor(protected readonly graphData: BarLineType) {
    super(graphData);
  }

  getChartOption(): EChartsOption {
    this.option.tooltip = this.getTooltipOption();
    this.option.series = this.getSeriesOption();
    this.option.legend = this.getLegend();
    this.option.xAxis = this.getXAxis();

    return this.option;
  }

  private getTooltipOption(): EChartsOption["tooltip"] {
    return {
      trigger: "item",
    };
  }

  private getLegend(): EChartsOption["legend"] {
    return {
      data: this.graphData.series.map((item) => item.name),
    };
  }

  private getXAxis(): EChartsOption["xAxis"] {
    return [
      {
        type: "category",
        data: this.graphData.xAxis,
      },
    ];
  }

  private getSeriesOption(): EChartsOption["series"] {
    try {
      const chartSeries = this.getChartData();

      if (chartSeries === undefined || chartSeries.length === 0)
        throw new ChartError(ErrorCode.E1);

      return [
        {
          type: "bar",
          ...chartSeries[0],
        },
        {
          type: "line",
          ...chartSeries[1],
        },
      ];
    } catch (err) {
      throw new ChartError(ErrorCode.E1);
    }
  }
}

export default BarLineEChart;
