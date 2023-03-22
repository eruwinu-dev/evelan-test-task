import { User } from "@/types/user"
import Image from "next/image"
import React from "react"

type Props = {
	user: User
}

const UserItem = ({ user }: Props) => {
	const name = `${user.first_name} ${user.last_name}`
	return (
		<div className="user-item">
			<div className="user-image">
				<Image
					src={user.avatar}
					alt={name}
					fill
					className="rounded-full object-cover p-1"
					sizes="(max-width: 768px) 75px,
							(max-width: 75px) 75px,
							33vw"
				/>
			</div>
			<span>{user.id}</span>
			<h2>{user.email}</h2>
			<h3>{name}</h3>
		</div>
	)
}

export default UserItem

