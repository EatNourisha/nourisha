import useSWR from "swr";
import { get } from "../utils/makeRequest";


export default function useMeal(id) {
  const { data, error } = useSWR(`meals/pack/${id}`, get);
  return {
    data: data?.data || [], 
    isLoading: !error && !data,
    error,
  };

}

