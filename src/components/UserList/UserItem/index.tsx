import { User } from "@/types/user"
import Image from "next/image"
import React, { memo } from "react"

type Props = {
	user: User
}

const UserItem = ({ user }: Props) => {
	const name = `${user.first_name} ${user.last_name}`
	return (
		<div className="user-item">
			<div>
				<figure className="user-image">
					<Image
						src={user.avatar}
						alt={name}
						fill
						className="rounded-full object-cover p-1"
						sizes="(max-width: 768px) 75px,
							(max-width: 1200px) 100px,
							125px"
					/>
				</figure>
			</div>
			<div className="user-desc">
				<h2>{name}</h2>
				<h3>{user.email}</h3>
				<label htmlFor={user.email}>{user.id}</label>
			</div>
		</div>
	)
}

export default memo(UserItem)

