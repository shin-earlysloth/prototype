import { EChartsOption } from "echarts";
import ChartUtil from "./ChartUtil";
import { GroupDataType } from "./type";

class DountEChart extends ChartUtil {
  private readonly option: EChartsOption = {};
  
  constructor( protected readonly graphData: GroupDataType) {
    super(graphData);
  }

  getChartOption(): EChartsOption {
    this.option.tooltip = this.getTooltipOption();
    this.option.series = this.getSeriesOption();

    return this.option;
  }

  private getTooltipOption(): EChartsOption["tooltip"] {
    return {
      trigger: "item",
    };
  }

  private getSeriesOption(): EChartsOption["series"] {
    return [
      {
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
        },

        labelLine: {
          show: false,
        },
        data: super.getChartData(),
      },
    ];
  }
}

export default DountEChart;
