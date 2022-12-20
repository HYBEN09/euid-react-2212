import { useFetch } from "@/hooks/useFetch";

const ENDPOINT = "/api/users.json";

export function useUsers() {
  const { loading, error, data: users } = useFetch<User[]>(ENDPOINT);
  return { loading, error, users };
}
