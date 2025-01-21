import React from 'react'
import { useParams } from 'react-router-dom'
import styled from '@emotion/styled'

const Container = styled.div`
	text-align: center;
`

const Title = styled.h1`
	color: #4caf50;
`

const Paragraph = styled.p`
	font-size: 1.2rem;
`

function User() {
	const { id } = useParams()

	return (
		<Container>
			<Title>User {id} Page</Title>
			<Paragraph>Details about user {id}</Paragraph>
		</Container>
	)
}

User.layout = 'DefaultLayout'

export default User
