import useSWR from "swr";
import { get } from "../utils/makeRequest";

export default function useMeal() {
  const { data, error } = useSWR(`meals/pack/?country=Nigeria`, get);
  return {
    data: data?.data || [], 
    isLoading: !error && !data,
    error,
  };
}