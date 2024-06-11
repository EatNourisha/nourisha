import useSWR from "swr";
import { get } from "../utils/makeRequest";


export default function useGetPlans() {
  const { data, error } = useSWR(`plans/?country=nigeria`, get);

  return {
    data: data?.data || [], 
    isLoading: !error && !data,
    error,
  };
}