import { getUsers } from "@/lib/getUsers"
import { UserResponse } from "@/types/user"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useAddUsers = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: ["add-users"],
		mutationFn: (page: number) => getUsers(page),
		onSuccess: async (data) => {
			const cached = (await queryClient.getQueryData(["users"])) as UserResponse
			queryClient.setQueryData(["users"], { ...data, users: [...cached.users, ...data.users] })
		},
		onError: () => {},
	})
}

