import { getUsers } from "@/lib/getUsers"
import { UserResponse } from "@/types/user"
import { useQuery } from "@tanstack/react-query"

export const useGetUsers = () => {
	return useQuery<UserResponse, Error>({
		queryKey: ["users"],
		queryFn: async () => getUsers(1),
		refetchOnWindowFocus: false,
	})
}

