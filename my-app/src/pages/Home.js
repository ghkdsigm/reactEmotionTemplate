import React from 'react'
import styled from '@emotion/styled'

// 스타일 정의
const Container = styled.div`
	text-align: center;
`

const Title = styled.h1`
	color: #61dafb;
`

const Paragraph = styled.p`
	font-size: 1.2rem;
`

function Home() {
	return (
		<Container>
			<Title>Home Page</Title>
			<Paragraph>Welcome to the Home Page!</Paragraph>
		</Container>
	)
}

export default Home
