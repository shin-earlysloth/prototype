import { EChartsOption } from "echarts";
import { QudrantType } from "../../../home/Graphs/type";
import ChartUtil from "./ChartUtil";

class QuadrantGraphUtil extends ChartUtil {
  protected readonly AREA_COUNT = 4;
  protected readonly POINTER_COLOR = [
    "#37A2DA",
    "#e06343",
    "#37a354",
    "#b55dba",
  ];
  protected readonly IPA = [
    "유지 강화 영역",
    "중점 개선 영역",
    "점진적 개선 영역",
    "현상 유지 영역",
  ];
  protected getPieces() {
    return new Array(this.AREA_COUNT).fill(null).map((_, i) => ({
      value: i,
      lable: this.IPA[i],
      color: this.POINTER_COLOR[i],
    }));
  }
}

class QuadrantGraph extends QuadrantGraphUtil {
  private readonly option: EChartsOption = {};
  constructor(protected readonly graphData: QudrantType) {
    super(graphData);
  }

  getQuadrantGraphOption() {
    this.option.dataset = this.getDataSetOption();
    this.option.tooltip = this.getTooltipOption();
  }

  private getDataSetOption() {
    const result: EChartsOption["dataset"] = {
      source: this.graphData?.data,
      transform: {
        type: "ecStat:clustering",
        config: {
          clusterCount: this.AREA_COUNT,
          outputType: "single",
          outputClusterIndexDimenstion: this.AREA_COUNT,
        },
      },
    };
    return result;
  }

  private getTooltipOption() {
    const result: EChartsOption["tooltip"] = {
      position: "top",
    };
    return result;
  }
}

export default QuadrantGraph;
