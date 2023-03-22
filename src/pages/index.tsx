import { GetServerSideProps } from "next"
import React from "react"

const Home = () => {
	return <></>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	return {
		redirect: {
			destination: "/users",
			permanent: false,
		},
	}
}

export default Home

