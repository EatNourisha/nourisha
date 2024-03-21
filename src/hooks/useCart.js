import useSWR from "swr";
import { post } from "../utils/makeRequest";

export default function useCart() {
  const { data, error } = useSWR(`cart/`, post);
  return {
    data: data?.data || [], 
    isLoading: !error && !data,
    error,
  };
}