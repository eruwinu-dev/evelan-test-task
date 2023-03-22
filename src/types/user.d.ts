export type User = {
	id: number
	email: string
	first_name: string
	last_name: string
	avatar: string
}

export type UserResponse = {
	users: User[]
	total_pages: number
	page: number
}

