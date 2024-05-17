import useSWR from "swr";
import { get } from "../utils/makeRequest";


export default function usePendingReferral() {
  const { data, error } = useSWR(`/referrals/pending`, get);

  return {
    data: data?.data || [], 
    isLoading: !error && !data,
    error,
  };
}