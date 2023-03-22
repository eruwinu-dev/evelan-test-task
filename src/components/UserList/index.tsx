import { useAddUsers } from "@/hooks/useAddUsers"
import { useGetUsers } from "@/hooks/useGetUsers"
import React, { MouseEvent } from "react"
import UserItem from "./UserItem"
import UserSpinner from "./UserSpinner"

type Props = {}

const UserList = (props: Props) => {
	const { data } = useGetUsers()
	const { mutateAsync: addUsers, isLoading } = useAddUsers()

	const handleAddUsers = async (event: MouseEvent<HTMLButtonElement>) => {
		if (!data) return
		await addUsers(data.page + 1)
	}

	if (!data) return <></>

	return (
		<section className="user-container">
			<h1>Evelan Test Task</h1>
			<div className="user-list">
				{data.users.map((user) => (
					<UserItem key={user.id} user={user} />
				))}
			</div>
			{isLoading ? <UserSpinner /> : null}
			<div className="load-more-container">
				<button
					type="button"
					className="load-more-button"
					onClick={handleAddUsers}
					disabled={data.total_pages === data.page}
				>
					Load More
				</button>
			</div>
		</section>
	)
}

export default UserList

