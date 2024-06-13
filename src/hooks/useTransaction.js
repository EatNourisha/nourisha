import useSWR from "swr";
import { get } from "../utils/makeRequest";

export default function useTransaction(id) {
  const { data, error } = useSWR(`transactions/${id}`, get);
  return {
    transaction: data?.data || [], 
    transactionLoading: !error && !data,
    error,
  };

}