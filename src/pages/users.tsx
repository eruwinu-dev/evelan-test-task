import { GetServerSideProps } from "next"
import React from "react"
import { dehydrate, QueryClient } from "@tanstack/react-query"
import Head from "next/head"
import { getUsers } from "@/lib/getUsers"
import UserList from "@/components/UserList"

type Props = {}

const User = ({}: Props) => {
	return (
		<>
			<Head>
				<title>Evelan Test Task</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<main>
				<UserList />
			</main>
		</>
	)
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const queryClient = new QueryClient()

	await queryClient.prefetchQuery({
		queryKey: ["users"],
		queryFn: async () => getUsers(1),
	})

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	}
}

export default User

