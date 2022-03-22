import axios, { AxiosResponse } from "axios";
import { useQuery } from "react-query";

const useGetReplier = (surveyID: string, version: number) => {
  const {
    isLoading: isReplierLoading,
    error: replierError,
    data: replier,
  } = useQuery(
    ["replier", surveyID, version],
    () => service.getRawData(surveyID, version),
    { suspense: true }
  );

  const url = replier?.data.url ?? "";
  console.log(url, replier);

  const {
    isLoading: isGraphsLoading,
    error: graphsError,
    data: graphs,
  } = useQuery(["projects", url], () => service.getRealData(url), {
    suspense: true,
    enabled: !!url,
    refetchInterval: 5000,
    retry: 1,
  });

  return {
    data: graphs,
    error: replierError || graphsError,
  };
};

export default useGetReplier;

const service = {
  getRawData: async (
    surveyID: string,
    version: number
  ): Promise<AxiosResponse<IGetRawDataOutput>> =>
    axios.get(
      `https://6aqfsrgcfl.execute-api.ap-northeast-2.amazonaws.com/dev/replier/${surveyID}/${version}/graphs/?gq=1`,
      {
        headers: {
          Authorization: `Token 41cba35a69453440b4c13cc5125ce052a4429ddd`,
        },
      }
    ),
  getRealData: async (url: string) =>
    axios.get(url, {
      headers: {
        // Authorization: `Token 41cba35a69453440b4c13cc5125ce052a4429ddd`,
      },
    }),
};

interface IGetRawDataOutput {
  available_now: boolean;
  url: string;
}
