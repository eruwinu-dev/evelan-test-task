import { User, UserResponse } from "@/types/user"

export const getUsers = async (page: number) => {
	const result = await fetch(`https://reqres.in/api/users?page=${page}`, {
		method: "GET",
		headers: { "Content-Type": "application/json" },
	})
	const { total_pages, data: users } = (await result.json()) as { total_pages: number; data: User[] }
	const data: UserResponse = { total_pages, users, page }
	return data
}

