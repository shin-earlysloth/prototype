import { useQuery } from "react-query";
import axios, { AxiosResponse } from "axios";
import { QudrantType } from "../../../home/Graphs/type";

const getData = () => axios("http://localhost:8080/");

export const useGetQudrantData = (): QudrantType | undefined => {
  const { data } = useQuery<AxiosResponse<QudrantType>>(
    ["@list/graph/quadrant"],
    getData,
    { suspense: true }
  );
  return data?.data;
};
