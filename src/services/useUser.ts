import { useUsers } from "./useUsers";

export function useUserById(id: string) {
  const { loading, error, users } = useUsers();
  return { loading, error, user: users?.find((user) => user.id === id) };
}
