import useSWR from "swr";
import { get } from "../utils/makeRequest";

export default function useBillingHistory() {
  const { data, error } = useSWR(`transactions/`, get);
  return {
    data: data?.data || [], 
    isLoading: !error && !data,
    error,
  };

}