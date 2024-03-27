import useSWR from "swr";
import { get } from "../utils/makeRequest";

export default function useGetCart() {
  const { data, error } = useSWR(`cart`, get);
  return {
    data: data?.data || [], 
    isLoading: !error && !data,
    error,
  };
}