import axios from "axios";
import { useEffect, useState } from "react";

export function useFetch<T>(
  endpoint: string,
  options?: { method: "Get"; body: null }
): {
  loading: boolean;
  error: null | Error;
  data?: T;
} {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<null | Error>(null);
  const [data, setData] = useState<T | undefined>();

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(endpoint, options);
        setData(data);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { loading, error, data };
}
