import { useQuery } from "react-query";
import axios, { AxiosResponse } from "axios";
import { TOKEN } from "../../../../constants";



const fetchReplier = ({ surveyId, version }: { surveyId: number, version: number }) => axios(
  `https://6aqfsrgcfl.execute-api.ap-northeast-2.amazonaws.com/prod/replier/${surveyId}/${version}/graphs/?gq=0`,
  {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  }
)

const fetchGraphsData = (url: string) => axios(url)


export const useGetGraphData = ({ surveyId, version }: { surveyId: number, version: number }) => {
  const { data: replierData } = useQuery<AxiosResponse<IReplier>>(['@list/graphData/graphReplier', surveyId, version], () => fetchReplier({
    surveyId,
    version
  }), { suspense: true })

  const url = replierData?.data.url ?? ""

  const { data: graphData } = useQuery<AxiosResponse<IGroupData>>(['@list/graphData', url], () => fetchGraphsData(url), {
    suspense: true,
    enabled: !!url,
    refetchInterval: 5000,
    retry: 1,
  })
  return {
    ...graphData!.data[0],
    question_orders: graphData?.data.question_orders,
  }
}


interface IReplier {
  available_now: boolean;
  url: string
}

interface IGroupData {
  0: {
    question: string
    questionNum: number,
    type: "string",
    series: number[],
    labels: string[],
    proportion: string[],
    elapsed: string[],
    image_selections: string[],
    score: number,
    series_point: number | null[]
  },
  question_orders: number[]
}




// surveyId: 227585,
// version: 13