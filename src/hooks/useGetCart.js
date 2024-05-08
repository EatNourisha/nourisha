import useSWR from "swr";
import { get } from "../utils/makeRequest";
import useAuthStore from "../stores/auth";
import { useEffect } from "react";


export default function useGetCart() {
  const { data, error } = useSWR(`cart`, get);
  const { setCount } = useAuthStore();

  useEffect(() => {
    console.log(data, "what is coming")
    setCount(data?.data?.items?.totalCount)
  }, [setCount])

  return {
    data: data?.data || [], 
    isLoading: !error && !data,
    error,
  };
}