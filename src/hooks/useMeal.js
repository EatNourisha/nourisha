import useSWR from "swr";
import { get } from "../utils/makeRequest";

export default function useMeal(page = 1, limit = 10) {
  const { data, error } = useSWR(`meals/pack/?country=Nigeria&limit=${limit}&page=${page}`, get);
  return {
    data: data?.data || [], 
    isLoading: !error && !data,
    error,
    // totalCount: data?.totalCount
  };

}