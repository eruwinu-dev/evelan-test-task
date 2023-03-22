import { getUsers } from "@/lib/getUsers"
import { UserResponse } from "@/types/user"
import { NextApiRequest, NextApiResponse } from "next"

type Data = {
	response: UserResponse
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
	const response = await getUsers(1)

	res.status(200).json({ response })
}

export default handler

